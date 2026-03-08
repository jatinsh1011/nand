"use client";

import { useState } from "react";
import api from "../lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter()

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const payload = {name , password}
    const res = await api.post('/login/register' , payload)
    if(res.status == 201){
      route.push('/login')
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      ```
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>

        <div className="flex flex-col gap-4">
          <input
            placeholder="Username"
            value={name}
            onChange={handleName}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleRegister}
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
