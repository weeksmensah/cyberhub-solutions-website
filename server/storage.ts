import { type ContactFormData } from "@shared/schema";

export interface IStorage {
  saveContactSubmission(data: ContactFormData): Promise<void>;
}

export class MemStorage implements IStorage {
  async saveContactSubmission(data: ContactFormData): Promise<void> {
    console.log("[Contact Form Submission]", JSON.stringify(data, null, 2));
  }
}

export const storage = new MemStorage();
