import { NextResponse } from "next/server";
import Stripe from "stripe";

const chechout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    return new NextResponse(`WebHook Error ${error.message}`, { status: 400 });
  }

  //   load our events
  switch (event.type) {
    case chechout_session_completed:
      const session = event.data.object;
      console.log(session);

      //Create a booking
      return NextResponse.json("Booking success", {
        status: 200,
        statusText: "Booking Successful",
      });

    default:
      console.log(`unHandle Event Type ${event.type}`);
  }
  return NextResponse.json("Booking success", {
    status: 200,
    statusText: "Booking Successful",
  });
}
