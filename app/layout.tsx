import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users Dashboard",
  description: "Users dashboard with search, pagination, and details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gray-50 text-gray-900 antialiased">
        <div className="mx-auto max-w-6xl p-4">{children}</div>
      </body>
    </html>
  );
}
