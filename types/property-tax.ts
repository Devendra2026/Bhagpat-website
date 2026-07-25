
import { z } from "zod";


export const searchModeSchema = z.enum(["ward", "owner", "property"]);

export const propertyTaxBreakdownSchema = z.object({
  propertyTax: z.number().nonnegative(),
  waterTax: z.number().nonnegative(),
  drainageTax: z.number().nonnegative(),
  lightingTax: z.number().nonnegative(),
  otherTax: z.number().nonnegative(),
  arrears: z.number().nonnegative(),
  penalty: z.number().nonnegative(),
  rebate: z.number().nonnegative(),
  paidAmount: z.number().nonnegative(),
});

export const propertyRecordSchema = z.object({
  id: z.string(),
  propertyId: z.string(),
  parcelNo: z.string(),
  ward: z.string(),

  ownerName: z.string(),
  fatherName: z.string(),
  mobile: z.string(),

  buildingNo: z.string(),
  propertyType: z.string(),
  usageType: z.string(),

  locality: z.string(),
  address: z.string(),
  landmark: z.string(),

  rateZone: z.string(),
  constructionYear: z.number(),
  plotArea: z.number(),
  builtUpArea: z.number(),

  tax: propertyTaxBreakdownSchema,
});

export const taxTotalSchema = z.object({
  currentDemand: z.number(),
  grossAmount: z.number(),
  totalPayable: z.number(),
});

// ==========================================
// 2. INFERRED TYPES (Same names, 0 code break)
// ==========================================

export type SearchMode = z.infer<typeof searchModeSchema>;
export type PropertyTaxBreakdown = z.infer<typeof propertyTaxBreakdownSchema>;
export type PropertyRecord = z.infer<typeof propertyRecordSchema>;
export type TaxTotal = z.infer<typeof taxTotalSchema>;
