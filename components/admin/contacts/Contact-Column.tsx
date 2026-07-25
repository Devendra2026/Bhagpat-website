
"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Contact } from "@/types/contact";

export const contactColumns: ColumnDef<Contact>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <span className="font-semibold text-slate-700">
        {row.original.id}
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <span className="font-semibold text-slate-900">
        {row.original.name}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-sm text-slate-700">
        {row.original.email}
      </span>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <span className="whitespace-nowrap text-sm text-slate-700">
        {row.original.phone}
      </span>
    ),
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => (
      <span className="font-medium text-slate-800">
        {row.original.subject}
      </span>
    ),
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <p
        title={row.original.message}
        className="max-w-[300px] truncate text-sm text-slate-600"
      >
        {row.original.message}
      </p>
    ),
  },
];
