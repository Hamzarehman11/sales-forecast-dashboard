"use client";

import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Dashboard", icon: "bi-house-door" },
    { href: "/upload", label: "Upload CSV", icon: "bi-cloud-arrow-up" },
    { href: "/forecast", label: "Forecast", icon: "bi-graph-up" },
    { href: "/sales", label: "Sales Insights", icon: "bi-bar-chart-line" },
  ];

  return (
    <div className={styles.sidebar}>
      <h3 className="mb-4">Sales Forecast Dashboard</h3>
      <ul className="nav nav-pills flex-column mb-auto">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`nav-link text-white ${
                pathname === item.href ? "active" : ""
              }`}
            >
              <i className={`bi ${item.icon} fs-5`}></i>
              <span className="mx-2">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
