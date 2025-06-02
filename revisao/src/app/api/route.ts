import { Next Response } from "next/server";

export sync function GET() {
    return NextResponse.json ({"mensagem": "Testando!!!"});
}