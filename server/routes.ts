import { Server } from "http";
import { Express } from "express";

export async function registerRoutes(_server: Server, app: Express) {
  app.get("/", (_req, res) => {
    res.send("API Imóvel Fácil online 🚀");
  });
}
