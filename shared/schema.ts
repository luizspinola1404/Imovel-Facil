import { z } from "zod";

export const usuarioSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  senhaHash: z.string(),
  ativo: z.boolean()
});
