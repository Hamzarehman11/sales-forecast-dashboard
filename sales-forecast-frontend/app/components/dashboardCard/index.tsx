import React from "react";
import styles from "./index.module.css";

interface DashboardCardProps {
  title: string;
  value: string | number;
}

function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className={`${styles.dashboardCard} shadow mb-5 bg-body-tertiary`}>
      <h4>{title}</h4>
      <p className={styles.subHeading}>{value}</p>
    </div>
  );
}

export default DashboardCard;
