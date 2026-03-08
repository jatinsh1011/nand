"use client";

import { useState } from "react";
import api from "../lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
     const payload = {name , password}
    const res = await api.post('/login' , payload)
    if(res.status == 200){
      router.push('/data')
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      ```
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <div className="flex flex-col gap-4">
          <input
            placeholder="Username"
            value={name}
            onChange={handleName}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
          <Link href="/register">
            <button className="border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition w-full">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
