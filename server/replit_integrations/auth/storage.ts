import { UserAuth } from "../../shared/models/auth.js"; // corrigido: caminho relativo + extensão .js
import db from "../../db.js"; // corrigido: extensão .js

// Função para salvar autenticação no banco
export async function salvarAuth(user: UserAuth) {
  try {
    await db.insert(user);
    console.log("Auth salvo com sucesso:", user);
  } catch (error) {
    console.error("Erro ao salvar auth:", error);
    throw error;
  }
}

// Função para buscar autenticação
export async function buscarAuth(id: string): Promise<UserAuth | null> {
  try {
    const result = await db.findById(id);
    return result || null;
  } catch (error) {
    console.error("Erro ao buscar auth:", error);
    return null;
  }
}
