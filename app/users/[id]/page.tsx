import { fetchUser } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import UserDetailsClient from "./UserDetailsClient";
export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const user = await fetchUser(resolvedParams.id).catch(() => null);

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 space-y-6">
      <Link
        href="/users"
        className="inline-block text-sm text-[#00b894] hover:underline"
      >
        ← Back to Users
      </Link>
      <UserDetailsClient user={user} />
    </div>
  );
}
