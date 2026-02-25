import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const todoData = [
  {
    description: "Configurar proyecto Next.js",
    complete: true,
  },
  {
    description: "Conectar Prisma a PostgreSQL",
    complete: false,
  },
  {
    description: "Crear seed inicial",
    complete: false,
  },
];

export async function main() {
  for (const todo of todoData) {
    await prisma.todo.create({ data: todo });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
