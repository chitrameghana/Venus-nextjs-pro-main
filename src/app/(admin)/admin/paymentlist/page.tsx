"use client";

import { useState } from "react";
import styles from "../admin.module.css";

export default function PaymentList() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      user: "Anita Sharma",
      package: "Basic Plan",
      amount: "₹999",
      date: "2026-02-10",
      status: "Completed",
      transactionId: "TXN123456",
    },
    {
      id: 2,
      user: "Ravi Kumar",
      package: "Premium Plan",
      amount: "₹2999",
      date: "2026-02-15",
      status: "Pending",
      transactionId: "TXN654321",
    },
  ]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Payment List</h1>

      <div className={styles.tablecontainer}>
        <table className={styles.usertable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Package</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Transaction ID</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.user}</td>
                <td>{p.package}</td>
                <td>{p.amount}</td>
                <td>{p.date}</td>
                <td
                  className={
                    p.status === "Completed"
                      ? styles.statusCompleted
                      : p.status === "Pending"
                      ? styles.statusPending
                      : ""
                  }
                >
                  {p.status}
                </td>
                <td>{p.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}