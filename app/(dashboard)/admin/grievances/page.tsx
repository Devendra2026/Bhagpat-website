
"use client";

import { useGrievances } from "@/hooks/use-grievances";
import GrievanceTable from "@/components/admin/grievances/Grievance-Table";

export default function AdminGrievancesPage() {
  const {
    data: grievances = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGrievances();

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-sm font-medium text-slate-500">
          Grievances loading...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <p className="text-sm font-semibold text-red-700">
          {error.message}
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold text-orange-600">
          Admin Management
        </p>

        <h1 className="text-2xl font-bold text-slate-900">
          Public Grievances
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Total grievances: {grievances.length}
        </p>
      </div>

      <GrievanceTable data={grievances} />
    </section>
  );
}
