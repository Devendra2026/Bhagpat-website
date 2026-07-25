

"use client";

import type { ColumnDef } from "@tanstack/react-table";

import type { Grievance } from "@/types/public-grievance";

export const grievanceColumns: ColumnDef<Grievance>[] = [
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
    accessorKey: "full_name",
    header: "Citizen Name",

    cell: ({ row }) => (
      <div>
        <p className="font-semibold text-slate-900">
          {row.original.full_name}
        </p>

        <p className="text-xs text-slate-500">
          {row.original.email}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "mobile_number",
    header: "Mobile Number",

    cell: ({ row }) => (
      <span className="whitespace-nowrap text-sm text-slate-700">
        {row.original.mobile_number}
      </span>
    ),
  },

  {
    accessorKey: "complaint_category",
    header: "Category",

    cell: ({ row }) => (
      <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
        {row.original.complaint_category}
      </span>
    ),
  },

  {
    accessorKey: "municipal_ward",
    header: "Ward",

    cell: ({ row }) => (
      <span className="inline-flex rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
        {row.original.municipal_ward}
      </span>
    ),
  },

  {
    accessorKey: "incident_address",
    header: "Incident Address",

    cell: ({ row }) => (
      <p
        title={row.original.incident_address}
        className="max-w-[220px] truncate text-sm text-slate-600"
      >
        {row.original.incident_address}
      </p>
    ),
  },

  {
    accessorKey: "description",
    header: "Description",

    cell: ({ row }) => (
      <p
        title={row.original.description}
        className="max-w-[280px] truncate text-sm text-slate-600"
      >
        {row.original.description}
      </p>
    ),
  },
];
