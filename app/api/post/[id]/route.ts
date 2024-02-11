import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

interface Params {
  id: string;
}

export async function DELETE(req: Request, { params }: { params: Params }) {
  const id = params.id;
  console.log(id);
  const post = await prisma.post.delete({
    where: { id },
  });
  return NextResponse.json(post);
}
