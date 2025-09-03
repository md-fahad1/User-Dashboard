import { fetchUser } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import UserDetailsClient from "./UserDetailsClient";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props) {
  const user = await fetchUser(params.id).catch(() => null);
  return { title: user ? `${user.name} | User` : "User | Not found" };
}

export default async function UserDetails({ params }: Props) {
  const user = await fetchUser(params.id).catch(() => null);
  if (!user) notFound();

  return (
    <div className="space-y-6">
      <Link
        href="/users"
        className="inline-block text-sm text-indigo-700 hover:underline"
      >
        ← Back to Users
      </Link>
      <UserDetailsClient user={user} />
    </div>
  );
}
