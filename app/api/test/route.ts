import { getInstance } from "@/Singleton";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  let instance = getInstance();
  instance.shared += 1;
  console.log(instance);
  return NextResponse.json(getInstance());
}
