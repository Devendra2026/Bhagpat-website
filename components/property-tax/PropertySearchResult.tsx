
import { Building2, MapPin, Phone } from "lucide-react";

import { getPropertyLabel } from "@/lib/property-tax";

import type { PropertyRecord } from "@/types/property-tax";

interface PropertySearchResultsProps {
  properties: PropertyRecord[];
  onSelectProperty: (
    property: PropertyRecord
  ) => void;
}

export default function PropertySearchResults({
  properties,
  onSelectProperty,
}: PropertySearchResultsProps) {
  if (properties.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg sm:p-8">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Property Search Results
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {properties.length} property record(s)
            found.
          </p>
        </div>

        <span className="w-fit rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
          Mock Data
        </span>
      </div>

      <div className="space-y-4">
        {properties.map((property, index) => (
          <article
            key={property.id}
            className="rounded-2xl border border-slate-200 p-5 transition hover:border-orange-300 hover:bg-orange-50/40"
          >
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-700">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {property.propertyId}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {getPropertyLabel(property)}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5" />
                      {property.ward}
                    </span>

                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {property.locality}
                    </span>

                    <span className="flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" />
                      {property.mobile}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onSelectProperty(property)
                }
                className="shrink-0 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                View Tax Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
