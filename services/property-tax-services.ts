import { MOCK_PROPERTIES } from "@/data/property-tax/mock-properties";
import type { PropertyRecord } from "@/types/property-tax";
import { string } from "zod";

function normalizeSearchValue(value: string): string {
  return value.trim().toLowerCase();
}

export const propertyTaxService = {
  async getPropertiesByWard(
    ward: string
  ): Promise<PropertyRecord[]> {
    return MOCK_PROPERTIES.filter(
      (property) => property.ward === ward
    );
  },

  async getPropertyByRecordId(
    id: string
  ): Promise<PropertyRecord | null> {
    return (
      MOCK_PROPERTIES.find(
        (property) => property.id === id
      ) ?? null
    );
  },
  async searchByProperty(
    searchValue: string
  ): Promise<PropertyRecord[]> {
    const value =
      normalizeSearchValue(searchValue);

    return MOCK_PROPERTIES.filter(
      (property) =>
        property.propertyId
          .toLowerCase()
          .includes(value) ||
        property.parcelNo
          .toLowerCase()
          .includes(value)
    );
  },

  async searchByOwner(
    searchValue: string
  ): Promise<PropertyRecord[]> {
    const value =
      normalizeSearchValue(searchValue);

    return MOCK_PROPERTIES.filter(
      (property) =>
        property.ownerName
          .toLowerCase()
          .includes(value) ||
        property.mobile.includes(value)
    );
  },
};

