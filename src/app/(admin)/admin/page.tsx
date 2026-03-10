"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../admin/page.module.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    router.push("/admin/users");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Admin Login</h2>

        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        <div className={styles.inputGroup}>
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