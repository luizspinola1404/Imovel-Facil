import { UserAuth } from "../../../compartilhado/models/auth.js";
import db from "../../db.js";

export async function salvarAuth(user: UserAuth) {
  await db.insert(user);
}

export async function buscarAuth(id: string): Promise<UserAuth | null> {
  return await db.findById(id);
}
