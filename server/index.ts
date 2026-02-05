import express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "./replit_integrations/auth/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (_req: Request, res: Response) => {
  res.send("Imóvel Fácil rodando com sucesso 🚀");
});

// Rotas de autenticação
app.use("/api", authRoutes);

// Porta do Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
