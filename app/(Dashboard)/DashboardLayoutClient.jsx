"use client";

import DashboardHeader from "../../components/UserDashboard/DashboardHeader/DashboardHeader";
import SideNavbar from "../../components/UserDashboard/SideNavbar/SideNavbar";

export default function DashboardLayoutClient({ children }) {
  return (
    <div className="lg:grid lg:grid-cols-12">
      <section className="lg:col-span-2">
        <SideNavbar />
      </section>
      <section className="lg:col-span-10">
        <DashboardHeader />
        <div className="my-4 md:my-3 md:px-3">{children}</div>
      </section>
    </div>
  );
}
