"use client";

import { useState } from "react";
import styles from "../admin.module.css";

export default function SliderMaster() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <h1 className={styles.title}>Slider Master</h1>

        <button
          className={`${styles.btn} ${styles.btnprimary}`}
          onClick={() => setShowModal(true)}
        >
          + Add Slider
        </button>
      </div>

      <div className={styles.tablecontainer}>
        <table className={styles.usertable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Link</th>
              <th>Status</th>
              <th className={styles.center}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Welcome Banner</td>
              <td><img src="/images/slider1.jpg" alt="Welcome Banner" className={styles.image} /></td>
              <td>/welcome</td>
              <td>Active</td>
              <td className={styles.center}>
                <button className={`${styles.btn} ${styles.btnprimary} ${styles.small}`}>Edit</button>
                <button className={`${styles.btn} ${styles.btndanger} ${styles.small}`}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sale Banner</td>
              <td><img src="/images/slider2.jpg" alt="Sale Banner" className={styles.image} /></td>
              <td>/sale</td>
              <td>Inactive</td>
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
              <h3>Add New Slider</h3>
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
                <input type="text" placeholder="Enter slider title" />
              </div>
              <div className={styles.formgroup}>
                <label>Image URL</label>
                <input type="text" placeholder="Enter image URL" />
              </div>
              <div className={styles.formgroup}>
                <label>Link</label>
                <input type="text" placeholder="Enter link URL" />
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
                <button type="submit" className={`${styles.btn} ${styles.btnprimary}`}>
                  Save Slider
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}