
// "use client";

// import { useAuth } from "@clerk/nextjs";
// import {
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";

// import {
//   createGrievance,
//   deleteGrievance,
//   getAllGrievances,
//   getGrievanceById,
//   updateGrievance,
// } from "@/services/grievance-api";

// import type {
//   CreateGrievanceData,
//   Grievance,
// } from "@/types/public-grievance";

// export const grievanceQueryKeys = {
//   all: ["grievances"] as const,

//   detail: (id: number) =>
//     ["grievances", "detail", id] as const,
// };

// /*
//  * GET ALL GRIEVANCES
//  * Protected API
//  */
// export function useGrievances() {
//   const {
//     getToken,
//     isLoaded,
//     isSignedIn,
//   } = useAuth();

//   return useQuery({
//     queryKey: grievanceQueryKeys.all,

//     queryFn: async () => {
//       const token = await getToken();

//       if (!token) {
//         throw new Error(
//           "Authentication token nahi mila. Admin account se sign in karo."
//         );
//       }

//       return getAllGrievances(token);
//     },

//     enabled:
//       isLoaded && isSignedIn === true,

//     retry: false,
//   });
// }

// /*
//  * GET GRIEVANCE BY ID
//  * Protected API
//  */
// export function useGrievance(id: number) {
//   const {
//     getToken,
//     isLoaded,
//     isSignedIn,
//   } = useAuth();

//   return useQuery({
//     queryKey:
//       grievanceQueryKeys.detail(id),

//     queryFn: async () => {
//       const token = await getToken();

//       if (!token) {
//         throw new Error(
//           "Authentication token nahi mila."
//         );
//       }

//       return getGrievanceById(
//         id,
//         token
//       );
//     },

//     enabled:
//       isLoaded &&
//       isSignedIn === true &&
//       id > 0,

//     retry: false,
//   });
// }

// /*
//  * CREATE GRIEVANCE
//  * Public API — token nahi chahiye
//  */
// export function useCreateGrievance() {
//   const queryClient =
//     useQueryClient();

//   return useMutation<
//     Grievance,
//     Error,
//     CreateGrievanceData
//   >({
//     mutationFn: createGrievance,

//     onSuccess: async () => {
//       await queryClient.invalidateQueries({
//         queryKey:
//           grievanceQueryKeys.all,
//       });
//     },
//   });
// }

// /*
//  * UPDATE GRIEVANCE
//  * Protected API
//  */
// export function useUpdateGrievance() {
//   const queryClient =
//     useQueryClient();

//   const { getToken } = useAuth();

//   return useMutation<
//     Grievance,
//     Error,
//     {
//       id: number;
//       data: Partial<CreateGrievanceData>;
//     }
//   >({
//     mutationFn: async ({
//       id,
//       data,
//     }) => {
//       const token = await getToken();

//       if (!token) {
//         throw new Error(
//           "Authentication token nahi mila."
//         );
//       }

//       return updateGrievance(
//         id,
//         data,
//         token
//       );
//     },

//     onSuccess: async (
//       updatedGrievance
//     ) => {
//       queryClient.setQueryData(
//         grievanceQueryKeys.detail(
//           updatedGrievance.id
//         ),
//         updatedGrievance
//       );

//       await queryClient.invalidateQueries({
//         queryKey:
//           grievanceQueryKeys.all,
//       });
//     },
//   });
// }

// /*
//  * DELETE GRIEVANCE
//  * Protected API
//  */
// export function useDeleteGrievance() {
//   const queryClient =
//     useQueryClient();

//   const { getToken } = useAuth();

//   return useMutation<
//     void,
//     Error,
//     number
//   >({
//     mutationFn: async (id) => {
//       const token = await getToken();

//       if (!token) {
//         throw new Error(
//           "Authentication token nahi mila."
//         );
//       }

//       return deleteGrievance(
//         id,
//         token
//       );
//     },

//     onSuccess: async () => {
//       await queryClient.invalidateQueries({
//         queryKey:
//           grievanceQueryKeys.all,
//       });
//     },
//   });
// }
"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import type {
  CreateGrievanceData,
  Grievance,
} from "@/types/public-grievance";

import {
  createGrievance,
  deleteGrievance,
  getAllGrievances,
  getGrievanceById,
  updateGrievance,
} from "@/services/grievance-api";

export const grievanceQueryKeys = {
  all: ["grievances"] as const,

  detail: (id: number) =>
    ["grievances", "detail", id] as const,
};

/*
 * GET ALL GRIEVANCES
 */
export function useGrievances() {
  return useQuery({
    queryKey: grievanceQueryKeys.all,
    queryFn: getAllGrievances,
    retry: false,
  });
}

/*
 * GET GRIEVANCE BY ID
 */
export function useGrievance(id: number) {
  return useQuery({
    queryKey: grievanceQueryKeys.detail(id),
    queryFn: () => getGrievanceById(id),
    enabled: id > 0,
    retry: false,
  });
}

/*
 * CREATE GRIEVANCE
 */
export function useCreateGrievance() {
  const queryClient = useQueryClient();

  return useMutation<Grievance, Error, CreateGrievanceData>({
    mutationFn: createGrievance,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: grievanceQueryKeys.all,
      });
    },
  });
}

/*
 * UPDATE GRIEVANCE
 */
export function useUpdateGrievance() {
  const queryClient = useQueryClient();

  return useMutation<
    Grievance,
    Error,
    { id: number; data: Partial<CreateGrievanceData> }
  >({
    mutationFn: ({ id, data }) => updateGrievance(id, data),

    onSuccess: async (updatedGrievance) => {
      queryClient.setQueryData(
        grievanceQueryKeys.detail(updatedGrievance.id),
        updatedGrievance
      );

      await queryClient.invalidateQueries({
        queryKey: grievanceQueryKeys.all,
      });
    },
  });
}

/*
 * DELETE GRIEVANCE
 */
export function useDeleteGrievance() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: (id) => deleteGrievance(id),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: grievanceQueryKeys.all,
      });
    },
  });
}
