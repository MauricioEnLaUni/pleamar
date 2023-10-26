import crypto from "node:crypto";

import { Redis } from "@upstash/redis";
import { encode } from "@msgpack/msgpack";

import Maybe from "../utils/Maybe.js";
import AuthRequest from "../request/AuthRequest.js";
import RegisterRequest from "../request/RegisterRequest.js";
import RedisRecord from "../models/RedisRecord.js";
import User from "../models/User.js";

export default class RedisInterface
{
    private redis = new Redis({
        url: process.env.DB,
        token: process.env.DB_TOKEN
    });

    async createUser(request: RegisterRequest)
    {
        const salt = crypto.randomBytes(16).toString("hex");
        return await this.redis.set(request.username, encode({
            password: crypto.scrypt(request.password, salt, 64, (error, derivedKey) => {
                if (error) throw error;
                return derivedKey;
            }),
            email: request.email
        }));
    }

    private async verify(password: string, hash: string) {
        return new Promise((resolve, reject) => {
            const [salt, key] = hash.split(":");
            crypto.scrypt(password, salt, 64, (err, derivedKey) => {
                if (err) reject(err);
                resolve(key === derivedKey.toString("hex"));
            });
        });
    }

    async createToken()
    {

    }

    async find(authRequest: AuthRequest)
    {
        const record = Maybe
            .fromNullable(
                (await this.redis.get(authRequest.username)) as RedisRecord<User>);
    
        if (record.isNothing())
        {
            return null;
        }
        
        const member = record
            .getOrElse({ key: "", value: { password: "", email: "" }});

        if(!this.verify(authRequest.password, member.value.password))
        {
            return null;
        }

        return member;
    }
}
