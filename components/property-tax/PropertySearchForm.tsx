import {
  Building2,
  Hash,
  RotateCcw,
  Search,
  UserRound,
} from "lucide-react";

import { PROPERTY_TAX_WARDS } from "@/constants/property-tax";
import { getPropertyLabel } from "@/lib/property-tax";

import type {
  PropertyRecord,
  SearchMode,
} from "@/types/property-tax";

interface PropertySearchFormProps {
  searchMode: SearchMode;

  selectedWard: string;
  selectedPropertyId: string;
  searchValue: string;

  wardProperties: PropertyRecord[];

  isLoading: boolean;
  errorMessage: string;

  onModeChange: (mode: SearchMode) => void;
  onWardChange: (ward: string) => void;
  onPropertyChange: (propertyId: string) => void;
  onSearchValueChange: (value: string) => void;
  onSearch: () => void;
  onReset: () => void;
}

export default function PropertySearchForm({
  searchMode,
  selectedWard,
  selectedPropertyId,
  searchValue,
  wardProperties,
  isLoading,
  errorMessage,
  onModeChange,
  onWardChange,
  onPropertyChange,
  onSearchValueChange,
  onSearch,
  onReset,
}: PropertySearchFormProps) {
  function getTabClass(mode: SearchMode) {
    return `flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      searchMode === mode
        ? "bg-orange-600 text-white shadow-lg shadow-orange-200"
        : "bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-700"
    }`;
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      {/* Search tabs */}
      <div className="border-b border-slate-200 bg-slate-50 p-3">
        <div className="grid gap-2 md:grid-cols-3">
          <button
            type="button"
            onClick={() => onModeChange("ward")}
            className={getTabClass("ward")}
          >
            <Building2 className="h-4 w-4" />
            Search by Ward
          </button>

          <button
            type="button"
            onClick={() => onModeChange("property")}
            className={getTabClass("property")}
          >
            <Hash className="h-4 w-4" />
            Property ID / Parcel No.
          </button>

          <button
            type="button"
            onClick={() => onModeChange("owner")}
            className={getTabClass("owner")}
          >
            <UserRound className="h-4 w-4" />
            Owner Name / Mobile No.
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Find Your Property
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Enter the required information to view
            property tax details.
          </p>
        </div>

        {searchMode === "ward" ? (
          <WardSearchFields
            selectedWard={selectedWard}
            selectedPropertyId={selectedPropertyId}
            wardProperties={wardProperties}
            onWardChange={onWardChange}
            onPropertyChange={onPropertyChange}
          />
        ) : (
          <TextSearchField
            searchMode={searchMode}
            searchValue={searchValue}
            onSearchValueChange={onSearchValueChange}
          />
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onSearch}
            disabled={isLoading}
            className="flex h-12 min-w-32 items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Search className="h-4 w-4" />

            {isLoading ? "Searching..." : "Search"}
          </button>

          <button
            type="button"
            onClick={onReset}
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>

        {errorMessage && (
          <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
}

interface WardSearchFieldsProps {
  selectedWard: string;
  selectedPropertyId: string;
  wardProperties: PropertyRecord[];

  onWardChange: (ward: string) => void;
  onPropertyChange: (propertyId: string) => void;
}

function WardSearchFields({
  selectedWard,
  selectedPropertyId,
  wardProperties,
  onWardChange,
  onPropertyChange,
}: WardSearchFieldsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div>
        <label
          htmlFor="ward"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Select Ward
        </label>

        <select
          id="ward"
          value={selectedWard}
          onChange={(event) =>
            onWardChange(event.target.value)
          }
          className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        >
          <option value="">
            Select Ward Number
          </option>

          {PROPERTY_TAX_WARDS.map((ward) => (
            <option key={ward} value={ward}>
              {ward}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="property"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Select Building / House / Plot
        </label>

        <select
          id="property"
          value={selectedPropertyId}
          disabled={!selectedWard}
          onChange={(event) =>
            onPropertyChange(event.target.value)
          }
          className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition disabled:cursor-not-allowed disabled:bg-slate-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        >
          <option value="">
            {selectedWard
              ? "Select Property"
              : "First select a ward"}
          </option>

          {wardProperties.map((property) => (
            <option
              key={property.id}
              value={property.id}
            >
              {getPropertyLabel(property)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

interface TextSearchFieldProps {
  searchMode: SearchMode;
  searchValue: string;

  onSearchValueChange: (value: string) => void;
}

function TextSearchField({
  searchMode,
  searchValue,
  onSearchValueChange,
}: TextSearchFieldProps) {
  const isPropertyMode =
    searchMode === "property";

  return (
    <div>
      <label
        htmlFor="property-search"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {isPropertyMode
          ? "Property ID or Parcel Number"
          : "Owner Name or Mobile Number"}
      </label>

      <input
        id="property-search"
        type="text"
        value={searchValue}
        onChange={(event) =>
          onSearchValueChange(event.target.value)
        }
        placeholder={
          isPropertyMode
            ? "Example: ETAH-01-0001 or PAR-01-1001"
            : "Enter owner name or mobile number"
        }
        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
      />
    </div>
  );
}
