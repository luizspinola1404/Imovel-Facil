import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Configuração da conexão com o banco Postgres
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Cria a instância do Drizzle ORM
export const db = drizzle(pool, { schema });
