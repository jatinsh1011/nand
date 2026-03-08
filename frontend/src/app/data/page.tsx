"use client";

import { useEffect, useState } from "react";
import api from "../lib/api";

export default function DataPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/login/data");
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      {" "}
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl">
        {" "}
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome 🎉</h1>
        ```
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg text-left shadow-sm"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-blue-600 font-bold">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
