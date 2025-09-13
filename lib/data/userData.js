export const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Sara Wilson",
    email: "sara@example.com",
    status: "Pending",
    image: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Tom Hanks",
    email: "tom@example.com",
    status: "Active",
    image: "https://i.pravatar.cc/40?img=5",
  },
];


export const tabs = [
  { label: "All", count: usersData.length },
  {
    label: "Active",
    count: usersData.filter((u) => u.status === "Active").length,
  },
  {
    label: "Inactive",
    count: usersData.filter((u) => u.status === "Inactive").length,
  },
  {
    label: "Pending",
    count: usersData.filter((u) => u.status === "Pending").length,
  },
];

