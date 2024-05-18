import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION,
  ssl: true,
});

export const db = drizzle(pool);
