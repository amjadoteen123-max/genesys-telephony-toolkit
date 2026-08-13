import {NextResponse} from "next/server";
export async function POST(){
 return NextResponse.json({ok:false,message:"OAuth backend not configured yet. Add Genesys OAuth credentials as Vercel server-side environment variables."},{status:501});
}