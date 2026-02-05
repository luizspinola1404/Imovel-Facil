import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export async function insert(user: any) {
  const query = "INSERT INTO usuarios (id, email, senha_hash, ativo) VALUES ($1, $2, $3, $4)";
  const values = [user.id, user.email, user.senhaHash, user.ativo];
  await pool.query(query, values);
}

export async function findById(id: string) {
  const query = "SELECT * FROM usuarios WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0] || null;
}

export default { insert, findById };
