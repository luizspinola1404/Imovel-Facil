import { UserAuth } from "../../../compartilhado/models/auth.js";

export async function replitAuth(data: any): Promise<UserAuth> {
  return {
    id: data.id || "replit-user",
    email: data.email || "user@replit.com",
    senhaHash: "hash-fake",
    criadoEm: new Date(),
    ativo: true
  };
}
