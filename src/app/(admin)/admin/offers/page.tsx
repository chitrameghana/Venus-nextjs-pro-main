"use client";

import { useState } from "react";
import styles from "../admin.module.css";

export default function OfferMaster() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.page}>

      {/* Header */}

      <div className={styles.header}>
        <h1 className={styles.title}>Offer Master</h1>

        <div className={styles.headeractions}>
          <input
            type="text"
            placeholder="Search offers..."
            className={styles.searchinput}
          />

          <button
            className={`${styles.btn} ${styles.btnprimary}`}
            onClick={() => setShowModal(true)}
          >
            + Add Offer
          </button>
        </div>
      </div>

      {/* Table */}

      <div className={styles.tablecontainer}>
        <table className={styles.usertable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Offer Name</th>
              <th>Discount</th>
              <th>Coupon Code</th>
              <th>Valid From</th>
              <th>Valid To</th>
              <th>Status</th>
              <th className={styles.center}>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Diwali Offer</td>
              <td>20%</td>
              <td>DIWALI20</td>
              <td>01-11-2025</td>
              <td>15-11-2025</td>
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
              <td>New Year Offer</td>
              <td>30%</td>
              <td>NEWYEAR30</td>
              <td>01-01-2026</td>
              <td>10-01-2026</td>
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
              <h3>Add Offer</h3>

              <button
                className={styles.closebtn}
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>
            </div>

            <form className={styles.form}>

              <div className={styles.formgroup}>
                <label>Offer Name</label>
                <input type="text" placeholder="Enter offer name" />
              </div>

              <div className={styles.formgroup}>
                <label>Discount (%)</label>
                <input type="number" placeholder="Enter discount" />
              </div>

              <div className={styles.formgroup}>
                <label>Coupon Code</label>
                <input type="text" placeholder="Enter coupon code" />
              </div>

              <div className={styles.formgroup}>
                <label>Valid From</label>
                <input type="date" />
              </div>

              <div className={styles.formgroup}>
                <label>Valid To</label>
                <input type="date" />
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
                  Save Offer
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}