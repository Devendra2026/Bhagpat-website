import { z } from "zod";

import { apiRequest } from "@/lib/api-clients";

import {
  contactSchema,
  type Contact,
  type CreateContactData,
} from "@/types/contact";


const CONTACT_ENDPOINT = "/contact/";

// POST: naya contact submit karna
export async function createContact(
  data: CreateContactData
): Promise<Contact> {
  const response = await apiRequest<unknown>(
    CONTACT_ENDPOINT,
    {
      method: "POST",
      body: JSON.stringify(data)
    }
  );

  return contactSchema.parse(response);
}
// GET ALL

export async function getAllContacts():
  Promise<Contact[]>{
  const response = await apiRequest<unknown>(
    CONTACT_ENDPOINT
  );
  return z.array(contactSchema).parse(response);
}
  
// get by id
export async function getContactById(
  id:number
): Promise<Contact>{
  const response = await apiRequest<unknown>(
    `${CONTACT_ENDPOINT}/${id}`,
    {
      method: "GET",
    }
  );
  return contactSchema.parse(response);
}

// put 
export async function updateContact(
  id: number,
  data:Partial<CreateContactData>
): Promise<Contact>{
  const response = await apiRequest<unknown>(
    `${CONTACT_ENDPOINT}/${id}`,
    {
      method: "DELETE",
      body: JSON.stringify(data),
    }
  );
  return contactSchema.parse(response);
}
// delete
export async function deleteContact(
  id : number
): Promise<void>{
  const response = await apiRequest<unknown>(
    `${CONTACT_ENDPOINT}/${id}`,
    {
      method: "DELETE",
    }
  );
}
