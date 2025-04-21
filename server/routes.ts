import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate form data
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      if (!email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      
      // In a production environment, this would send an email or store in database
      // For now, we'll just return success
      
      return res.status(200).json({ message: 'Message received! Thank you for contacting me.' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
