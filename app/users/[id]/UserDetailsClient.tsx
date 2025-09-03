"use client";

import { User } from "@/types/user";
import { motion } from "framer-motion";

interface Props {
  user: User;
}

export default function UserDetailsClient({ user }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12"
    >
      {/* Profile Header */}
      <div className="relative bg-[#00b894]/20 rounded-3xl h-36 flex items-center justify-center shadow-md">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 h-36 w-36 sm:h-40 sm:w-40 rounded-full bg-white flex items-center justify-center text-6xl font-bold text-[#00b894] shadow-2xl border-4 border-white">
          {user.name?.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* Name & Actions */}
      <div className="mt-20 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {user.name}
          </h1>
          <p className="text-gray-500 text-lg mt-1">@{user.username}</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <a
            href={`mailto:${user.email}`}
            className="flex items-center gap-2 rounded-lg bg-[#00b894] px-6 py-2 text-white font-semibold shadow hover:bg-[#019270] transition"
          >
            ✉️ Email
          </a>
          <a
            href={`tel:${user.phone}`}
            className="flex items-center gap-2 rounded-lg border border-[#00b894] px-6 py-2 text-[#00b894] font-semibold shadow hover:bg-[#00b894]/10 transition"
          >
            📞 Call
          </a>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InfoCard title="📇 Contact Info">
          <Info label="Email" value={user.email} />
          <Info label="Phone" value={user.phone} />
          <Info label="Website" value={user.website} />
        </InfoCard>

        <InfoCard title="🏢 Company">
          <Info label="Name" value={user.company?.name} />
          <Info label="Catchphrase" value={user.company?.catchPhrase} />
          <Info label="Business" value={user.company?.bs} />
        </InfoCard>

        <InfoCard title="📍 Address" className="sm:col-span-2">
          <Info label="Street" value={user.address?.street} />
          <Info label="Suite" value={user.address?.suite} />
          <Info label="City" value={user.address?.city} />
          <Info label="Zipcode" value={user.address?.zipcode} />
        </InfoCard>

        <InfoCard title="🌐 Geo Location" className="sm:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <Info label="Latitude" value={user.address?.geo?.lat} />
            <Info label="Longitude" value={user.address?.geo?.lng} />
          </div>
          {user.address?.geo?.lat && user.address?.geo?.lng && (
            <div className="mt-6 h-64 w-full rounded-xl overflow-hidden shadow-md">
              <iframe
                src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&z=15&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </InfoCard>
      </div>
    </motion.div>
  );
}

// Info block
function Info({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold uppercase text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-800">{value || "-"}</p>
    </div>
  );
}

// InfoCard wrapper
function InfoCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition ${className}`}
    >
      <h2 className="mb-5 text-sm font-semibold uppercase text-[#00b894]">
        {title}
      </h2>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}
