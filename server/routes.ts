import { Server } from "http";
import { Express, Request, Response } from "express";

export async function registerRoutes(_server: Server, app: Express) {

  // Rota de teste
  app.get("/", (_req: Request, res: Response) => {
    res.send("API Imóvel Fácil online 🚀");
  });

  // Lista de imóveis (mock, simples)
  app.get("/api/imoveis", (_req: Request, res: Response) => {
    res.json([
      {
        id: 1,
        titulo: "Casa no Novo Encontro",
        cidade: "Juazeiro-BA",
        preco: 280000
      },
      {
        id: 2,
        titulo: "Terreno 10x30",
        cidade: "Juazeiro-BA",
        preco: 95000
      }
    ]);
  });
}
