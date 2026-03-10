"use client";

import { useState } from "react";
import styles from "../admin.module.css";

export default function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      type: "Full-time",
      postedDate: "2026-02-01",
      status: "Open",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Innovate Ltd",
      location: "New York",
      type: "Part-time",
      postedDate: "2026-01-28",
      status: "Closed",
    },
  ]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Job List</h1>

      <div className={styles.tablecontainer}>
        <table className={styles.usertable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Type</th>
              <th>Posted Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.type}</td>
                <td>{job.postedDate}</td>
                <td
                  className={
                    job.status === "Open" ? styles.statusOpen : styles.statusClosed
                  }
                >
                  {job.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}