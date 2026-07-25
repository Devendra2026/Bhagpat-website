export const PROPERTY_TAX_WARDS = Array.from(
  { length: 14 },
  (_, index) => `Ward No. ${index + 1}`
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

export const LOCALITIES = [
  "Railway Road",
  "Shanti Nagar",
  "Civil Lines",
  "GT Road",
  "Nai Basti",
  "Aruna Nagar",
  "Kachahari Road",
  "Agra Road",
];

export const LANDMARKS = [
  "Near Railway Crossing",
  "Near Shiv Temple",
  "Near Nagar Palika Office",
  "Near Main Market",
  "Near Government School",
  "Near Water Tank",
];

export const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Mixed Use",
] as const;
