import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {
            id: 1,
            name: 'Product A',
            price: 100
        },
        {
            id: 2,
            name: 'Product B',
            price: 200
        }
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.issues, { status: 400 });
    }

    return NextResponse.json( { id : 1, name: body.name, price: body.price }, { status: 201 } );
}