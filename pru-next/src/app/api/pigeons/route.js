import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const pigeons = await prisma.pigeons.findMany();
  return Response.json(pigeons);
}
