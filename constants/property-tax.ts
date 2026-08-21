export const WARD_NAMES = [
  "जाटव बस्ती",
  "तेलीवाडा",
  "नई बस्ती",
  "अहिरान ब्राह्मनान",
  "मौहल्ला बाढियान",
  "इन्द्रा मार्किट",
  "मुख्य बाजार",
  "मंडी बापू गंज",
  "देवी गंज",
  "माता वाला",
  "दक्षिण इन्द्रा मार्किट",
];

export const PROPERTY_TAX_WARDS = Array.from(
  { length: 11 },
  (_, index) => `Ward No. ${index + 1} (${WARD_NAMES[index]})`
);

export const OWNER_NAMES = [
  "Amit Kumar",
  "Rajesh Sharma",
  "Sunil Gupta",
  "Omkar Singh",
  "Radheshyam Verma",
  "Nandan Singh",
  "Pooja Agarwal",
  "Neeraj Kumar",
  "Vikas Yadav",
  "Anil Saxena",
];

export const FATHER_NAMES = [
  "Ramesh Chandra",
  "Mahesh Kumar",
  "Anokhe Lal",
  "Janki Prasad",
  "Ram Prakash",
  "Suresh Chand",
];

export const LANDMARKS = [
  "Near Railway Crossing",
  "Near Shiv Temple",
  "Near Nagar Panachayat Office",
  "Near Main Market",
  "Near Government School",
  "Near Water Tank",
];

export const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Mixed Use",
] as const;
