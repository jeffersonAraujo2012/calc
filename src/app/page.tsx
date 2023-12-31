"use client"

import Keypad from "@/components/Keypad";
import Display from "@/components/Display";
import CalcContextProvider from "@/contexts/CalcContext";
import s from "./styles.module.scss";
import { login } from "@/services/calcApi";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    user: "",
    password: "",
  });

  async function onLogin(e: FormEvent) {
    e.preventDefault();
    const result = await login(loginData);
    if (result?.status == 200) {
      router.push('/calc');
    }
  }
  return (
    <div className={s.containerPage}>
    <form onSubmit={onLogin} className={s.formCard}>
        <input
          type="text"
          placeholder="User"
          value={loginData.user}
          onChange={(e) =>
            setLoginData({ ...loginData, user: e.currentTarget.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.currentTarget.value })
          }
        />
        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
}
