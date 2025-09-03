import { fetchUsers } from "@/lib/api";
import UsersClient from "./users-client";

export const metadata = { title: "Users | Dashboard" };

export default async function UsersPage() {
  const users = await fetchUsers();
  return <UsersClient initialUsers={users} />;
}
