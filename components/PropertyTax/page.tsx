import { ShieldCheck } from "lucide-react";

import PropertyTaxClient from "@/components/property-tax/PropertyTaxClient";


export default function PropertyTaxPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                Town Panchayat , Aminagar Sarai, Baghpat
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Online Property Tax Payment
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Search your property, check tax
                assessment details, view outstanding
                dues and proceed with online payment.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
              <div className="rounded-xl bg-emerald-50 p-3">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>

              <div>
                <p className="font-semibold text-emerald-500">
                  Secure Service
                </p>

                <p className="text-sm text-slate-500">
                  Transparent property tax information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 text-sm text-slate-500">
          Home

          <span className="mx-2">/</span>

          <span className="font-medium text-orange-600">
            Online Property Tax Payment
          </span>
        </div>

        <PropertyTaxClient />
      </div>
    </main>
  );
}
