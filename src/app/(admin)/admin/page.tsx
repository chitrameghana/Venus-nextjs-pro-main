"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // For demo, accept any credentials
    router.push("/admin/users");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Admin Login</h2>
        <div className="inputGroup">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="inputGroup">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}