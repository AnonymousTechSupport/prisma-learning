import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const response = await req.json();
  const { title, content } = response;
  console.log({ response });
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: true,
      author: {
        create: {
          name: "John Doe (Hardcoded For Now)",
        },
      },
    },
  });
  return NextResponse.json({ result });
}
