import {
  Building2,
  MapPin,
  ReceiptText,
  UserRound,
} from "lucide-react";

import { formatCurrency } from "@/lib/property-tax";

import PaymentSummary from "./PaymentSummary";

import type { PropertyRecord } from "@/types/property-tax";

interface PropertyTaxDetailsProps {
  property: PropertyRecord;
}

export default function PropertyTaxDetails({
  property,
}: PropertyTaxDetailsProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="bg-slate-900 px-5 py-6 text-white sm:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/10 p-3">
              <ReceiptText className="h-7 w-7" />
            </div>

            <div>
              <p className="text-sm font-medium text-orange-300">
                Town Panchayat , Aminagar Sarai, Baghpat
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Property Tax Assessment
              </h2>
            </div>
          </div>

          <div className="rounded-xl bg-white/10 px-4 py-3">
            <p className="text-xs uppercase tracking-wider text-slate-300">
              Financial Year
            </p>

            <p className="mt-1 font-bold">
              2026–2027
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 p-5 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <InformationCard
            title="Property Information"
            icon={<Building2 className="h-5 w-5" />}
          >
            <DetailItem
              label="Property ID"
              value={property.propertyId}
            />

            <DetailItem
              label="Parcel Number"
              value={property.parcelNo}
            />

            <DetailItem
              label="Ward"
              value={property.ward}
            />

            <DetailItem
              label="Building Number"
              value={property.buildingNo}
            />

            <DetailItem
              label="Property Type"
              value={property.propertyType}
            />

            <DetailItem
              label="Usage Type"
              value={property.usageType}
            />
          </InformationCard>

          <InformationCard
            title="Owner Information"
            icon={<UserRound className="h-5 w-5" />}
          >
            <DetailItem
              label="Owner Name"
              value={property.ownerName}
            />

            <DetailItem
              label="Father / Guardian"
              value={property.fatherName}
            />

            <DetailItem
              label="Mobile Number"
              value={property.mobile}
            />

            <DetailItem
              label="Rate Zone"
              value={property.rateZone}
            />
          </InformationCard>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-600" />

            <h3 className="font-bold text-slate-900">
              Property Address
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <DetailItem
              label="Complete Address"
              value={property.address}
            />

            <DetailItem
              label="Landmark"
              value={property.landmark}
            />

            <DetailItem
              label="Locality"
              value={property.locality}
            />

            <DetailItem
              label="District"
              value="Etah, Uttar Pradesh"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-slate-900">
            Property Assessment Details
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AssessmentCard
              label="Plot Area"
              value={`${property.plotArea} sq. ft.`}
            />

            <AssessmentCard
              label="Built-up Area"
              value={`${property.builtUpArea} sq. ft.`}
            />

            <AssessmentCard
              label="Construction Year"
              value={String(
                property.constructionYear
              )}
            />

            <AssessmentCard
              label="Occupancy"
              value={property.usageType}
            />
          </div>
        </div>

        <TaxDemandTable property={property} />

        <PaymentSummary property={property} />
      </div>
    </section>
  );
}

function InformationCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <div className="mb-5 flex items-center gap-2 text-orange-600">
        {icon}

        <h3 className="font-bold text-slate-900">
          {title}
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {children}
      </div>
    </div>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function AssessmentCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function TaxDemandTable({
  property,
}: {
  property: PropertyRecord;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
        <h3 className="font-bold text-slate-900">
          Tax Demand Details
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-left text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-5 py-4">
                Tax Head
              </th>

              <th className="px-5 py-4 text-right">
                Current Demand
              </th>

              <th className="px-5 py-4 text-right">
                Arrears
              </th>

              <th className="px-5 py-4 text-right">
                Total
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            <TaxRow
              name="Property Tax"
              current={property.tax.propertyTax}
              arrears={property.tax.arrears}
            />

            <TaxRow
              name="Water Tax"
              current={property.tax.waterTax}
              arrears={0}
            />

            <TaxRow
              name="Drainage Tax"
              current={property.tax.drainageTax}
              arrears={0}
            />

            <TaxRow
              name="Lighting Tax"
              current={property.tax.lightingTax}
              arrears={0}
            />

            <TaxRow
              name="Other Tax"
              current={property.tax.otherTax}
              arrears={0}
            />

            <TaxRow
              name="Late Payment Penalty"
              current={property.tax.penalty}
              arrears={0}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TaxRow({
  name,
  current,
  arrears,
}: {
  name: string;
  current: number;
  arrears: number;
}) {
  return (
    <tr className="text-slate-700">
      <td className="px-5 py-4 font-medium">
        {name}
      </td>

      <td className="px-5 py-4 text-right">
        {formatCurrency(current)}
      </td>

      <td className="px-5 py-4 text-right">
        {formatCurrency(arrears)}
      </td>

      <td className="px-5 py-4 text-right font-semibold text-slate-900">
        {formatCurrency(current + arrears)}
      </td>
    </tr>
  );
}
