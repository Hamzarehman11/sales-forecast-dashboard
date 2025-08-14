// import styles from "./page.module.css";

import DashboardCard from "./components/dashboardCard";
import Dropdown from "./components/dropdown";

export default function Home() {
  return (
    <div>
      <div className="d-flex gap-3 mb-4">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <div className="d-flex gap-4">
        <DashboardCard title="Total Sales" value={"$11,250.125"} />
        <DashboardCard title="Top Region" value={"North America"} />
        <DashboardCard title="Top Product" value={"Product A"} />
      </div>
    </div>
  );
}
