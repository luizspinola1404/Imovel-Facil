import { Router } from "express";
import { salvarAuth, buscarAuth } from "./storage.js"; // corrigido: extensão .js
import { replitAuth } from "./replitAuth.js"; // corrigido: extensão .js

const router = Router();

// Rota para autenticação via Replit
router.post("/auth/replit", async (req, res) => {
  try {
    const user = await replitAuth(req.body);
    await salvarAuth(user);
    res.json(user);
  } catch (error) {
    console.error("Erro na autenticação Replit:", error);
    res.status(500).json({ erro: "Falha na autenticação" });
  }
});

// Rota para buscar usuário autenticado
router.get("/auth/:id", async (req, res) => {
  try {
    const user = await buscarAuth(req.params.id);
    if (!user) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ erro: "Falha ao buscar usuário" });
  }
});

export default router;
