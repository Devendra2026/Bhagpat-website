import { CreditCard, ShieldCheck } from "lucide-react";

import {
  calculatePropertyTax,
  formatCurrency,
} from "@/lib/property-tax";

import type { PropertyRecord } from "@/types/property-tax";

interface PaymentSummaryProps {
  property: PropertyRecord;
}

export default function PaymentSummary({
  property,
}: PaymentSummaryProps) {
  const taxTotals =
    calculatePropertyTax(property);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex gap-3">
          <ShieldCheck className="h-6 w-6 shrink-0 text-blue-600" />

          <div>
            <h3 className="font-bold text-blue-950">
              Payment Information
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-800">
              Please verify the property information,
              tax demand and payable amount before
              proceeding with the payment.
            </p>

            <p className="mt-3 text-xs font-medium text-blue-700">
              The online payment gateway will be
              integrated later.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-900 p-6 text-white">
        <h3 className="text-lg font-bold">
          Payment Summary
        </h3>

        <div className="mt-5 space-y-3 text-sm">
          <SummaryRow
            label="Current Demand"
            value={formatCurrency(
              taxTotals.currentDemand
            )}
          />

          <SummaryRow
            label="Previous Arrears"
            value={formatCurrency(
              property.tax.arrears
            )}
          />

          <SummaryRow
            label="Penalty"
            value={formatCurrency(
              property.tax.penalty
            )}
          />

          <SummaryRow
            label="Rebate"
            value={`- ${formatCurrency(
              property.tax.rebate
            )}`}
          />

          <SummaryRow
            label="Paid Amount"
            value={formatCurrency(
              property.tax.paidAmount
            )}
          />
        </div>

        <div className="my-5 border-t border-white/20" />

        <p className="text-sm text-slate-300">
          Total Payable
        </p>

        <p className="mt-1 text-3xl font-bold text-orange-400">
          {formatCurrency(
            taxTotals.totalPayable
          )}
        </p>

        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white transition hover:bg-orange-600"
        >
          <CreditCard className="h-5 w-5" />
          Pay Now
        </button>

        <p className="mt-3 text-center text-xs text-slate-400">
          Payment facility will be connected later.
        </p>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-slate-300">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}
