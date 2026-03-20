import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      await storage.saveContactSubmission(data);
      res.json({ success: true, message: "Thank you for your inquiry. We will respond within one business day." });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, message: "Validation failed", errors: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: "An error occurred. Please try again." });
      }
    }
  });

  return httpServer;
}
