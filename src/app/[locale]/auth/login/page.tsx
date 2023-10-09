/// <reference path="../../../../components/Auth/Auth.d.ts" />
"use client"
import { useState, useEffect} from 'react';

import Link from "next/link";

import NodeRSA from "node-rsa";

import Stack from "@mui/material/Stack";

import config from "@/config";
import { axiosPrivate } from "@/components/Auth/axios";

const LOGIN_URL = 'User/auth';

const Login = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const key = new NodeRSA(config.rsa.public);
        const f6092f2c98078cc93a2a48b195dd128b = key.encrypt(user);
        const ddf0d0321d6b7ce4d42f5183e525ef25 = key.encrypt(pwd);
        const DTO = JSON.stringify({
            f6092f2c98078cc93a2a48b195dd128b,
            ddf0d0321d6b7ce4d42f5183e525ef25,
        });

        try {
            const response = await axiosPrivate.post(LOGIN_URL,DTO);

            setUser('');
            setPwd('');

            const credentials: StoredCredentials = {
                ... response?.data?.credentials
            };
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }

    return (
        <Stack spacing={2} className="mx-auto w-7/12">
            <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Acceder</h1>
                <form onSubmit={handleSubmit}>
                    <Stack>
                        <label htmlFor="username">Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </Stack>
                    <button>Acceder</button>
              </form>
            <p>
                ¿No tiene cuenta?<br />
                <span className="line">
                  <Link href="/en/Auth/register">¡Inscribirme!</Link>
                </span>
            </p>
        </Stack>
    );
}

export default Login;
