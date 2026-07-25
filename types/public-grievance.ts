
import { z } from "zod";


export const createGrievanceSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(
      2,
      "Name must contain at least 2 characters"
    )
    .max(
      120,
      "Name cannot exceed 120 characters"
    ),

  mobile_number: z
    .string()
    .trim()
    .min(
      7,
      "Mobile number must contain at least 7 characters"
    )
    .max(
      20,
      "Mobile number cannot exceed 20 characters"
    )
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit mobile number"
    ),

  email: z
    .string()
    .trim()
    .email(
      "Please enter a valid email address"
    ),

  complaint_category: z
    .string()
    .trim()
    .min(
      2,
      "Please select a complaint category"
    )
    .max(
      120,
      "Complaint category cannot exceed 120 characters"
    ),

  municipal_ward: z
    .string()
    .trim()
    .min(
      2,
      "Please select a municipal ward"
    )
    .max(
      60,
      "Municipal ward cannot exceed 60 characters"
    ),

  incident_address: z
    .string()
    .trim()
    .min(
      5,
      "Incident address must contain at least 5 characters"
    )
    .max(
      255,
      "Incident address cannot exceed 255 characters"
    ),

  description: z
    .string()
    .trim()
    .min(
      10,
      "Description must contain at least 10 characters"
    ),
});

/*
 * Backend se grievance create hone ke baad
 * id ke saath complete response aayega.
 */
export const grievanceSchema =
  createGrievanceSchema.extend({
    id: z
      .number()
      .int()
      .positive(),
  });

/*
 * POST request ka type.
 * Isme id nahi hogi.
 */
export type CreateGrievanceData = z.infer<
  typeof createGrievanceSchema
>;

/*
 * Backend response aur admin table ka type.
 * Isme id hogi.
 */
export type Grievance = z.infer<
  typeof grievanceSchema
>;
