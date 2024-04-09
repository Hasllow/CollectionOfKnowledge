"use client";

import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e, formData);

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <main>
      <form onClick={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          className="text-black p-1 rounded"
        />
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          className="text-black p-1 rounded"
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
