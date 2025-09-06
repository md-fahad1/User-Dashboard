import DashboardLayoutClient from "./DashboardLayoutClient";

export const metadata = {
  title: "Admin | Dream Of Company",
  description: "Manage orders, products, and users in your admin dashboard.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Admin Dashboard - Dream Of Company",
    description:
      "Secure admin dashboard for managing dream of company products.",
    url: "https://dream3799.com/dashboard",
    siteName: "Dream Of Company",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Dashboard Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Dashboard | Dream Of Company",
    description: "Manage your products, orders, and analytics.",
    images: ["/logo1.png"],
  },
};

export default function Layout({ children }) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
