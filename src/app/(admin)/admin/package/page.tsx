"use client";
import { useState } from "react";
import styles from "../admin.module.css";

export default function PackageMaster() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <h1 className={styles.title}>Package Master</h1>

        <div className={styles.headeractions}>
          <input
            type="text"
            placeholder="Search packages..."
            className={styles.searchinput}
          />

          <button
            className={`${styles.btn} ${styles.btnprimary}`}
            onClick={() => setShowModal(true)}
          >
            + Add Package
          </button>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tablecontainer}>
        <table className={styles.usertable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Package Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Job Posts</th>
              <th>Status</th>
              <th className={styles.center}>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Basic Plan</td>
              <td>₹999</td>
              <td>30 Days</td>
              <td>5 Jobs</td>
              <td>Active</td>
              <td className={styles.center}>
                <button className={`${styles.btn} ${styles.btnprimary} ${styles.small}`}>
                  Edit
                </button>
                <button className={`${styles.btn} ${styles.btndanger} ${styles.small}`}>
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Premium Plan</td>
              <td>₹2999</td>
              <td>90 Days</td>
              <td>20 Jobs</td>
              <td>Active</td>
              <td className={styles.center}>
                <button className={`${styles.btn} ${styles.btnprimary} ${styles.small}`}>
                  Edit
                </button>
                <button className={`${styles.btn} ${styles.btndanger} ${styles.small}`}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modaloverlay}>
          <div className={styles.modal}>

            <div className={styles.modalheader}>
              <h3>Add New Package</h3>
              <button
                className={styles.closebtn}
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>
            </div>

            <form className={styles.form}>

              <div className={styles.formgroup}>
                <label>Package Name</label>
                <input type="text" placeholder="Enter package name" />
              </div>

              <div className={styles.formgroup}>
                <label>Price</label>
                <input type="number" placeholder="Enter price" />
              </div>

              <div className={styles.formgroup}>
                <label>Duration (Days)</label>
                <input type="number" placeholder="Enter duration" />
              </div>

              <div className={styles.formgroup}>
                <label>Number of Job Posts</label>
                <input type="number" placeholder="Enter job post limit" />
              </div>

              <div className={styles.formgroup}>
                <label>Status</label>
                <select>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className={styles.formactions}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnsecondary}`}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={`${styles.btn} ${styles.btnprimary}`}
                >
                  Save Package
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}