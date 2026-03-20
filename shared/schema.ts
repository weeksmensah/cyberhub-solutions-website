import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  org: z.string().min(1, "Organization is required"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
