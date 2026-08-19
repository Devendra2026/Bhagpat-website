import PropertyTax  from "@/components/PropertyTax/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay Property Tax",
  description: " Explore the property tax of Town Panchayat , Aminagar Sarai, Baghpat.",
  
};
export default function PropertyTaxPage() {
  return (
    <div>
      <PropertyTax />
    </div>
  );
}
