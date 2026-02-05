import express, { Request, Response } from "express";

const router = express.Router();

// Exemplo de rota estática corrigida
router.get("/static", (_req: Request, res: Response) => {
  res.send("Conteúdo estático funcionando!");
});

export default router;
