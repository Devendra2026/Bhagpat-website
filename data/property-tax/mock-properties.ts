import {
  FATHER_NAMES,
  LANDMARKS,
  LOCALITIES,
  OWNER_NAMES,
  PROPERTY_TAX_WARDS,
  PROPERTY_TYPES,
} from "@/constants/property-tax";

import type { PropertyRecord } from "@/types/property-tax";

export const MOCK_PROPERTIES: PropertyRecord[] =
  PROPERTY_TAX_WARDS.flatMap((ward, wardIndex) =>
    Array.from({ length: 3 }, (_, propertyIndex) => {
      const serialNumber =
        wardIndex * 3 + propertyIndex + 1;

      const ownerName =
        OWNER_NAMES[serialNumber % OWNER_NAMES.length];

      const fatherName =
        FATHER_NAMES[serialNumber % FATHER_NAMES.length];

      const locality =
        LOCALITIES[serialNumber % LOCALITIES.length];

      const landmark =
        LANDMARKS[serialNumber % LANDMARKS.length];

      const propertyTax =
        850 + wardIndex * 25 + propertyIndex * 110;

      const waterTax = 180 + propertyIndex * 30;

      const drainageTax =
        120 + propertyIndex * 20;

      return {
        id: String(serialNumber),

        propertyId: `TPASB-${String(
          wardIndex + 1
        ).padStart(2, "0")}-${String(
          propertyIndex + 1
        ).padStart(4, "0")}`,

        parcelNo: `PAR-${String(
          wardIndex + 1
        ).padStart(2, "0")}-${1001 + propertyIndex}`,

        ward,

        ownerName,
        fatherName,

        mobile: `9${String(
          100000000 + serialNumber * 731
        ).slice(-9)}`,

        buildingNo: `${wardIndex + 1}/${
          propertyIndex + 101
        }`,

        propertyType:
          PROPERTY_TYPES[
            propertyIndex % PROPERTY_TYPES.length
          ],

        usageType:
          propertyIndex === 1
            ? "Self Occupied"
            : "Individual",

        locality,

        address: `${ward}, ${locality}, Etah, Uttar Pradesh`,

        landmark,

        rateZone:
          propertyIndex === 0 ? "Zone A" : "Zone B",

        constructionYear:
          1998 + propertyIndex * 6,

        plotArea:
          950 + wardIndex * 15 + propertyIndex * 120,

        builtUpArea:
          680 + wardIndex * 10 + propertyIndex * 90,

        tax: {
          propertyTax,
          waterTax,
          drainageTax,
          lightingTax: 80,

          otherTax:
            propertyIndex === 2 ? 50 : 0,

          arrears:
            propertyIndex === 0
              ? 0
              : 250 + wardIndex * 10,

          penalty:
            propertyIndex === 2 ? 75 : 0,

          rebate:
            propertyIndex === 0 ? 100 : 0,

          paidAmount: 0,
        },
      };
    })
  );
