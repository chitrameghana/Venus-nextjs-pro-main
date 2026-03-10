"use client";

import { useState } from "react";
import styles from "../admin.module.css";

export default function ContentMaster() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <h1 className={styles.title}>Content Master</h1>

        <button
          className={`${styles.btn} ${styles.btnprimary}`}
          onClick={() => setShowModal(true)}
        >
          + Add Content
        </button>
      </div>

      <div className={styles.tablecontainer}>
        <table className={styles.usertable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th className={styles.center}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>About Us</td>
              <td>about-us</td>
              <td>Published</td>
              <td className={styles.center}>
                <button className={`${styles.btn} ${styles.btnprimary} ${styles.small}`}>Edit</button>
                <button className={`${styles.btn} ${styles.btndanger} ${styles.small}`}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Privacy Policy</td>
              <td>privacy-policy</td>
              <td>Draft</td>
              <td className={styles.center}>
                <button className={`${styles.btn} ${styles.btnprimary} ${styles.small}`}>Edit</button>
                <button className={`${styles.btn} ${styles.btndanger} ${styles.small}`}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className={styles.modaloverlay}>
          <div className={styles.modal}>
            <div className={styles.modalheader}>
              <h3>Add New Content</h3>
              <button
                className={styles.closebtn}
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>
            </div>
            <form className={styles.form}>
              <div className={styles.formgroup}>
                <label>Title</label>
                <input type="text" placeholder="Enter content title" />
              </div>
              <div className={styles.formgroup}>
                <label>Slug</label>
                <input type="text" placeholder="Enter slug (URL friendly)" />
              </div>
              <div className={styles.formgroup}>
                <label>Status</label>
                <select>
                  <option>Published</option>
                  <option>Draft</option>
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
                <button type="submit" className={`${styles.btn} ${styles.btnprimary}`}>
                  Save Content
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}