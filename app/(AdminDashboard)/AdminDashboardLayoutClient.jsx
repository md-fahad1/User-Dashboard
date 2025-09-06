"use client";

import AdminDashboardHeader from "@/components/UserDashboard/DashboardHeader/DashboardHeader";
import DashboardHeader from "../../components/AdminDashboard/DashboardHeader/DashboardHeader";
import AdminSideNavbar from "../../components/AdminDashboard/SideNavbar/AdminSideNavbar";

export default function DashboardLayoutClient({ children }) {
  return (
    <div className="lg:grid lg:grid-cols-12 w-full">
      <section className="lg:col-span-2">
        <AdminSideNavbar />
      </section>
      <section className="lg:col-span-10">
        <AdminDashboardHeader />
        <div className="my-4 md:my-3 md:px-3">{children}</div>
      </section>
    </div>
  );
}
