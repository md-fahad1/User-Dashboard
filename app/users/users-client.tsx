"use client";

import { useMemo, useState } from "react";
import type { User } from "@/types/user";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = { initialUsers: User[] };
const PAGE_SIZE = 8;

export default function UsersClient({ initialUsers }: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const list = initialUsers ?? []; // ✅ fallback to []
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
    );
  }, [initialUsers, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function onChangeQuery(v: string) {
    setQuery(v);
    setPage(1);
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          👥 All Users
        </h1>
        <div className="relative w-full sm:w-80">
          <input
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            placeholder="🔍 Search by name or email…"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm outline-none focus:border-[#00b894] focus:ring-2 focus:ring-[#00b894]"
          />
        </div>
      </motion.div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-md">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs font-semibold uppercase text-gray-600">
            <tr>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {current.map((u) => (
              <motion.tr
                key={u.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="hover:bg-[#00b894]/5 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00b894]/20 text-[#00b894] font-semibold">
                      {u.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{u.name}</div>
                      <div className="text-gray-500 text-xs">{u.email}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-700">{u.company?.name}</td>
                <td className="px-6 py-4 text-gray-600">{u.address?.city}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/users/${u.id}`}
                    className="inline-flex items-center rounded-lg bg-[#00b894] px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#019270] transition"
                  >
                    View Details →
                  </Link>
                </td>
              </motion.tr>
            ))}

            {current.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Page <strong>{page}</strong> of <strong>{totalPages}</strong> •{" "}
          {filtered.length} user(s)
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-full px-3 py-1 text-sm disabled:opacity-40 hover:bg-gray-100 transition"
          >
            ◀
          </button>
          {Array.from({ length: totalPages })
            .slice(0, 5)
            .map((_, i) => {
              const n = i + 1;
              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`rounded-full px-3 py-1 text-sm transition ${
                    n === page
                      ? "bg-[#00b894] text-white shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              );
            })}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-full px-3 py-1 text-sm disabled:opacity-40 hover:bg-gray-100 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
