import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const pigeons = await prisma.pigeons.findMany();
  return Response.json(pigeons);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newPigeon = await prisma.pigeons.create({
      data: {
        pigeon_name: data.pigeon_name,
        name: data.name,
        price: parseFloat(data.price),
        description: data.description,
        image_path: data.image_path,
      },
    });

    return NextResponse.json(newPigeon, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add pigeon" },
      { status: 500 },
    );
  }
}
