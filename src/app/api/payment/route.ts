import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST (req:NextRequest) {
  let data = await req.json()
  let priceId = data.priceId
  
  try{
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000'
    })
    return NextResponse.json(session.url)
    
  } catch(error) {
      return new NextResponse("POST Error", { status: 500 });
    }
  }
