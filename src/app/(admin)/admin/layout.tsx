

// import { ReactNode } from "react";
// import "@/Style/admin.css";
// interface AdminLayoutProps {
//   children: ReactNode; // <-- type children properly
// }

// export default function AdminLayout({ children }: AdminLayoutProps) {
//   return (
//     <div className="admin-container">
//       <header className="admin-header">
//         <h1>Admin Panel</h1>
//       </header>

//       <main className="admin-main">{children}</main>

//       <footer className="admin-footer">
//         &copy; {new Date().getFullYear()} Admin Panel
//       </footer>
//     </div>
//   );
// }

import React from "react";
import styles from "./admin.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminContainer}>
      
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Admin</h2>
        <nav>
          <ul>
            <li><a href="/admin/dashboard">Dashboard</a></li>
            <li><a href="/admin/users">Users</a></li>
            <li><a href="/admin/settings">Settings</a></li>
                        <li><a href="/admin/package">Packages</a></li>
                                                <li><a href="/admin/offers">Offers</a></li>
                                                <li><a href="/admin/paymentlist">Payment List</a></li>
                                                <li><a href="/admin/joblist">Job List</a></li>
                                                <li><a href="/admin/content">Content Master</a></li>
                                                <li><a href="/admin/slider">Slider Master</a></li>








          </ul>
        </nav>
      </aside>

      {/* Main Section */}
      <div className={styles.mainSection}>
        
        {/* Top Navbar */}
        <header className={styles.topbar}>
          <div>Welcome Admin</div>
          <div>Logout</div>
        </header>

        {/* Page Content */}
        <main className={styles.content}>
          {children}
        </main>

      </div>
    </div>
  );
}