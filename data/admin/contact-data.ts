import { contactSchema } from "@/types/contact";
export const contactData = contactSchema.array().parse([
  {
    id: 1,
    name: "Harsh Pachauri",
    email: "paharsh33@gamil.com",
    phone: "7465931577",
    message: " Water Supply issue",
    subject: "water in not coming in the ward no 5",
  },
  {
    id: 2,
    name: "Gaurav Yadav",
    email: "gaurav33@gmail.com",
    phone: "6398499713",
    message: "property tax issue",
    subject: "Property tax reciept are not showing"
  },
  {
    id: 3,
    name: "Tarun Sikarwar",
    email: "tarunsikarwar@gamil.com",
    phone: '9536874564',
    message: "garbage collection issue",
    subject: "garbage is not collecting in my colony",
  },
]);
