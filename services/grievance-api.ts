
import { z } from "zod";

import { apiRequest } from "@/lib/api-clients";

import {
  grievanceSchema,
  type CreateGrievanceData,
  type Grievance,
} from "@/types/public-grievance";

const GRIEVANCE_ENDPOINT = "/publicgrievance/";

// POST: Public grievance submit karna
export async function createGrievance(
  data: CreateGrievanceData
): Promise<Grievance> {
  const response = await apiRequest<unknown>(
    GRIEVANCE_ENDPOINT,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  console.log("BACKEND RESPONSE:", response);

  return grievanceSchema.parse(response);
}

// GET ALL: Saare grievances fetch karna
export async function getAllGrievances(): Promise<Grievance[]> {
  const response = await apiRequest<unknown>(
    GRIEVANCE_ENDPOINT
  );

  return z.array(grievanceSchema).parse(response);
}

// GET BY ID: Single grievance fetch karna
export async function getGrievanceById(
  id: number
): Promise<Grievance> {
  const response = await apiRequest<unknown>(
    `${GRIEVANCE_ENDPOINT}${id}`
  );

  return grievanceSchema.parse(response);
}

// PUT / PATCH: Grievance update karna
export async function updateGrievance(
  id: number,
  data: Partial<CreateGrievanceData>
): Promise<Grievance> {
  const response = await apiRequest<unknown>(
    `${GRIEVANCE_ENDPOINT}${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );

  return grievanceSchema.parse(response);
}

// DELETE: Grievance delete karna
export async function deleteGrievance(
  id: number
): Promise<void> {
  await apiRequest<void>(
    `${GRIEVANCE_ENDPOINT}${id}`,
    {
      method: "DELETE",
    }
  );
}
