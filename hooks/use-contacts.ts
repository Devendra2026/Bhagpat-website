"use client"
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CreateContactData } from "@/types/contact"; 
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "@/services/contact-api";

export const contactQueryKeys = {
  all: ["contacts"] as const,

  detail: (id: number) =>
    ["contacts", "detail", id] as const,
};

// Saare contacts fetch karne ka hook
export function useContacts() {
  return useQuery({
    queryKey: contactQueryKeys.all,
    queryFn: getAllContacts,
  });
}

// Ek contact ko ID se fetch karne ka hook
export function useContact(id: number) {
  return useQuery({
    queryKey: contactQueryKeys.detail(id),
    queryFn: () => getContactById(id),
    enabled: id > 0,
  });
}

// Contact create karne ka hook
export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createContact,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: contactQueryKeys.all,
      });
    },
  });
}

// Contact update karne ka hook
export function useUpdateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: Partial<CreateContactData>;
    }) => updateContact(id, data),

    onSuccess: async (updatedContact) => {
      queryClient.setQueryData(
        contactQueryKeys.detail(updatedContact.id),
        updatedContact
      );

      await queryClient.invalidateQueries({
        queryKey: contactQueryKeys.all,
      });
    },
  });
}

// Contact delete karne ka hook
export function useDeleteContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteContact,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: contactQueryKeys.all,
      });
    },
  });
}

