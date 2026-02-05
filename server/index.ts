import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (_req: Request, res: Response) => {
  res.send("Imóvel Fácil rodando com sucesso 🚀");
});

// Exemplo de rota de API
app.get("/api/imoveis", (_req: Request, res: Response) => {
  // Aqui você pode conectar ao banco (Supabase/PG) e retornar dados reais
  res.json([
    { id: 1, titulo: "Casa no centro", preco: 250000 },
    { id: 2, titulo: "Apartamento na praia", preco: 450000 }
  ]);
});

// Porta do Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
