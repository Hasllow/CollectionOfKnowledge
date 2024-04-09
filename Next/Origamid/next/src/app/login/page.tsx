"use client";

import { login } from "@/actions/login";
import { useState } from "react";

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    const res = await login(username, password);

    if (res.autorizado) {
      window.location.href = "/";
    }
  };

  return (
    <main>
      <form onClick={handleSubmit} className="flex flex-col">
        <input type="text" name="username" className="text-black p-1 rounded" />
        <input
          type="password"
          name="password"
          className="text-black p-1 rounded"
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
