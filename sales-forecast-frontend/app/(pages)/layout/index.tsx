import React from "react";
import styles from "./index.module.css";
import Sidebar from "@/app/components/sidebar";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white">Navbar</div>
        <div
          className={`${styles.layoutMain} mx-5 shadow mb-5 bg-body-tertiary d-flex`}
        >
          <Sidebar />
          <div className="mx-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
