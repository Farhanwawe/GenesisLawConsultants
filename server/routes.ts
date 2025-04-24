import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp to the submission
      const submission = {
        ...contactData,
        createdAt: new Date().toISOString(),
      };
      
      // Store the contact submission
      const result = await storage.createContactSubmission(submission);
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        id: result.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
