
"use client";

import { MessageSquareText } from "lucide-react";

import ContactTable from "@/components/admin/contacts/Contact-Table";
import { useContacts } from "@/hooks/use-contacts";

export default function AdminContactsPage() {
  const {
    data: contacts = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useContacts();

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <MessageSquareText className="h-6 w-6" />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-600">
                Admin Management
              </p>

              <h1 className="text-2xl font-bold text-slate-900">
                Contact Submissions
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Receive enquiries submitted through the website
                contact form.
              </p>
            </div>
          </div>

          {!isLoading && !isError && (
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2">
              <p className="text-xs font-semibold text-blue-600">
                Total Submissions
              </p>

              <p className="text-xl font-bold text-blue-900">
                {contacts.length}
              </p>
            </div>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
            <div className="text-center">
              <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />

              <p className="mt-4 text-sm font-medium text-slate-500">
                Contact submissions loading...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="font-semibold text-red-700">
              Does not load contacts.
            </h2>

            <p className="mt-1 text-sm text-red-600">
              {error instanceof Error
                ? error.message
                : "Something went wrong"}
            </p>

            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isFetching ? "Retrying..." : "Try Again"}
            </button>
          </div>
        )}

        {/* Contact Table */}
        {!isLoading && !isError && (
          <ContactTable data={contacts} />
        )}
      </div>
    </main>
  );
}
