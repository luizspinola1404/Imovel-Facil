import { Router, Request, Response } from "express";
import { salvarAuth, buscarAuth } from "./storage.js";
import { replitAuth } from "./replitAuth.js";

const router = Router();

router.post("/auth/replit", async (req: Request, res: Response) => {
  try {
    const user = await replitAuth(req.body);
    await salvarAuth(user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ erro: "Falha na autenticação" });
  }
});

router.get("/auth/:id", async (req: Request, res: Response) => {
  try {
    const user = await buscarAuth(req.params.id);
    if (!user) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ erro: "Falha ao buscar usuário" });
  }
});

export default router;
