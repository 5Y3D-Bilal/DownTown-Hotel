import { getUserData } from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      "Authentication is Required  To Perform These Tasks",
      { status: 500, statusText: "Authentication Required" }
    );
  }

  const userId = session.user.id;
  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200 , statusText:"Successfully got user Data"});
  } catch (error) {
    return new NextResponse("Unable to Fetch", {
      status: 400,
      statusText: "Check Your Internet or Try SomeTime Later",
    });
  }
}
