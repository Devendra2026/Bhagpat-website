"use client";

import { useState } from "react";

import { propertyTaxService } from "@/services/property-tax-services";

import PropertySearchForm from "./PropertySearchForm";
import PropertySearchResults from "./PropertySearchResult";
import PropertyTaxDetails from "./PropertyTaxDetails";

import type {
  PropertyRecord,
  SearchMode,
} from "@/types/property-tax";

export default function PropertyTaxClient() {
  const [searchMode, setSearchMode] =
    useState<SearchMode>("ward");

  const [selectedWard, setSelectedWard] =
    useState("");

  const [
    selectedPropertyId,
    setSelectedPropertyId,
  ] = useState("");

  const [searchValue, setSearchValue] =
    useState("");

  const [wardProperties, setWardProperties] =
    useState<PropertyRecord[]>([]);

  const [searchResults, setSearchResults] =
    useState<PropertyRecord[]>([]);

  const [
    selectedProperty,
    setSelectedProperty,
  ] = useState<PropertyRecord | null>(null);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(false);

  function clearDisplayedData() {
    setSearchResults([]);
    setSelectedProperty(null);
    setErrorMessage("");
  }

  function handleModeChange(mode: SearchMode) {
    setSearchMode(mode);

    setSelectedWard("");
    setSelectedPropertyId("");
    setSearchValue("");
    setWardProperties([]);

    clearDisplayedData();
  }

  async function handleWardChange(ward: string) {
    setSelectedWard(ward);
    setSelectedPropertyId("");

    clearDisplayedData();

    if (!ward) {
      setWardProperties([]);
      return;
    }

    try {
      setIsLoading(true);

      const properties =
        await propertyTaxService.getPropertiesByWard(
          ward
        );

      setWardProperties(properties);
    } catch {
      setWardProperties([]);

      setErrorMessage(
        "Ward properties could not be loaded."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    setSelectedWard("");
    setSelectedPropertyId("");
    setSearchValue("");
    setWardProperties([]);
    setSearchResults([]);
    setSelectedProperty(null);
    setErrorMessage("");
  }

  function handleSelectProperty(
    property: PropertyRecord
  ) {
    setSelectedProperty(property);
    setSearchResults([]);
    setErrorMessage("");
  }

  async function handleSearch() {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setSelectedProperty(null);
      setSearchResults([]);

      if (searchMode === "ward") {
        await searchByWard();
        return;
      }

      if (!searchValue.trim()) {
        setErrorMessage(
          searchMode === "property"
            ? "Please enter a Property ID or Parcel Number."
            : "Please enter an Owner Name or Mobile Number."
        );

        return;
      }

      const properties =
        searchMode === "property"
          ? await propertyTaxService.searchByProperty(
              searchValue
            )
          : await propertyTaxService.searchByOwner(
              searchValue
            );

      showSearchResponse(properties);
    } catch {
      setErrorMessage(
        "Something went wrong while searching the property."
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function searchByWard() {
    if (!selectedWard) {
      setErrorMessage(
        "Please select a ward."
      );

      return;
    }

    if (selectedPropertyId) {
      const property =
        await propertyTaxService.getPropertyByRecordId(
          selectedPropertyId
        );

      if (!property) {
        setErrorMessage(
          "Selected property record was not found."
        );

        return;
      }

      setSelectedProperty(property);
      return;
    }

    const properties =
      await propertyTaxService.getPropertiesByWard(
        selectedWard
      );

    showSearchResponse(properties);
  }

  function showSearchResponse(
    properties: PropertyRecord[]
  ) {
    if (properties.length === 0) {
      setErrorMessage(
        "No property record found for the entered details."
      );

      return;
    }

    if (properties.length === 1) {
      setSelectedProperty(properties[0]);
      return;
    }

    setSearchResults(properties);
  }

  return (
    <>
      <PropertySearchForm
        searchMode={searchMode}
        selectedWard={selectedWard}
        selectedPropertyId={
          selectedPropertyId
        }
        searchValue={searchValue}
        wardProperties={wardProperties}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onModeChange={handleModeChange}
        onWardChange={handleWardChange}
        onPropertyChange={
          setSelectedPropertyId
        }
        onSearchValueChange={setSearchValue}
        onSearch={handleSearch}
        onReset={handleReset}
      />

      <PropertySearchResults
        properties={searchResults}
        onSelectProperty={
          handleSelectProperty
        }
      />

      {selectedProperty && (
        <PropertyTaxDetails
          property={selectedProperty}
        />
      )}
    </>
  );
}
