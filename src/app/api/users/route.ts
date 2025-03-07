import { NextResponse } from "next/server";

const users=[{user:"user"},{user:"not user"}]

export async function GET(req: any, res: JSON) {
  return NextResponse.json(users)
}

export async function PATCH (req:any,res:any){
  const data = await req.json();

  return NextResponse.json(data)

}
