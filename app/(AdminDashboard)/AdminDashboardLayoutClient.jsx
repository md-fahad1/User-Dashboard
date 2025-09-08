"use client";

import AdminDashboardHeader from "@/components/UserDashboard/DashboardHeader/DashboardHeader";
import DashboardHeader from "../../components/AdminDashboard/DashboardHeader/DashboardHeader";
import AdminSideNavbar from "../../components/AdminDashboard/SideNavbar/AdminSideNavbar";

export default function DashboardLayoutClient({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* Sidebar (Fixed) */}
      <aside className="hidden lg:block lg:w-64 bg-white shadow-md fixed top-0 left-0 h-screen">
        <AdminSideNavbar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Header (Sticky) */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <AdminDashboardHeader />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
