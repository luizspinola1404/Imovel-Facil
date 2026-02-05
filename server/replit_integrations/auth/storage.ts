import { UserAuth } from "../../../compartilhado/models/auth.js"; // corrigido para raiz
import db from "../../db.js"; // corrigido com extensão .js

export async function salvarAuth(user: UserAuth) {
  try {
    await db.insert(user);
    console.log("Auth salvo com sucesso:", user);
  } catch (error) {
    console.error("Erro ao salvar auth:", error);
    throw error;
  }
}

export async function buscarAuth(id: string): Promise<UserAuth | null> {
  try {
    const result = await db.findById(id);
    return result || null;
  } catch (error) {
    console.error("Erro ao buscar auth:", error);
    return null;
  }
}
