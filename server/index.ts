import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// ROTAS
app.get("/api/imoveis", (req, res) => {
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

// START
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
