import express, { Request, Response } from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Configuração do Supabase
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Rota principal
app.get("/", (_req: Request, res: Response) => {
  res.send("Imóvel Fácil rodando com sucesso 🚀");
});

// Rota de imóveis (dados vindos do Supabase)
app.get("/api/imoveis", async (_req: Request, res: Response) => {
  const { data, error } = await supabase
    .from("imoveis") // nome da tabela no Supabase
    .select("*");

  if (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao buscar imóveis" });
  }

  res.json(data);
});

// Porta do Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
