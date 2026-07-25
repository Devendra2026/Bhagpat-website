import type {
  PropertyRecord,
  TaxTotal,
} from "@/types/property-tax";

export function formatCurrency(
  amount: number
): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getPropertyLabel(
  property: PropertyRecord
): string {
  return `${property.propertyId} | ${property.ownerName} S/o ${property.fatherName} | ${property.parcelNo} | ${property.locality} | ${property.landmark}`;
}

export function calculatePropertyTax(
  property: PropertyRecord
): TaxTotal {
  const currentDemand =
    property.tax.propertyTax +
    property.tax.waterTax +
    property.tax.drainageTax +
    property.tax.lightingTax +
    property.tax.otherTax;

  const grossAmount =
    currentDemand +
    property.tax.arrears +
    property.tax.penalty;

  const totalPayable =
    grossAmount -
    property.tax.rebate -
    property.tax.paidAmount;

  return {
    currentDemand,
    grossAmount,
    totalPayable,
  };
}
