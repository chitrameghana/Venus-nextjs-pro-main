"use client";
import { useState } from "react";
import styles from "../admin.module.css";

export default function UsersPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.page}>
      
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>User Master</h1>

        <div className={styles.headeractions}>
          <input
            type="text"
            placeholder="Search users..."
            className={styles.searchinput}
          />

          <button
            onClick={() => setShowModal(true)}
className={`${styles.btn} ${styles.primary}`}          >
            + Add User
          </button>
        </div>
      </div>

      {/* Table */}
    <div className={styles.tablecontainer}>
  <table className={styles.usertable}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th className={styles.center}>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Anita Sharma</td>
        <td>anita@mail.com</td>
        <td>Editor</td>
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
        <td>Ravi Kumar</td>
        <td>ravi@mail.com</td>
        <td>Manager</td>
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
        <h3>Add New User</h3>
        <button
          onClick={() => setShowModal(false)}
          className={styles.closebtn}
        >
          ✖
        </button>
      </div>

      <form className={styles.form}>
        <div className={styles.formgroup}>
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
        </div>

        <div className={styles.formgroup}>
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>

        <div className={styles.formgroup}>
          <label>Role</label>
          <select>
            <option>Admin</option>
            <option>Manager</option>
            <option>Editor</option>
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
            Save User
          </button>
        </div>

      </form>
    </div>
  </div>
)}

    </div>
  );
}