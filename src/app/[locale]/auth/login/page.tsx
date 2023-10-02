"use client"
import { useState, useEffect} from 'react';

import Link from "next/link";

import Stack from "@mui/material/Stack";

import axios from "@/components/Auth/axios";

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

    try {
      const DTO: LoginDto = { user, password: pwd };
      const response = await axios.post(LOGIN_URL,
        JSON.stringify(DTO),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
    );

    setUser('');
    setPwd('');
    const sub = response?.data?.sub;
    const token = response?.data?.token;
    const claims = response?.data?.claims;
    document.cookie = `fid=${token}; path=/; secure; max-age=3600; SameSite=Lax`;
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