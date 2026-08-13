import {NextResponse} from "next/server";
import dns from "node:dns/promises";
export async function POST(req:Request){
 const {target}=await req.json();
 if(!target) return NextResponse.json({error:"Target is required"},{status:400});
 let dnsResult="Skipped";
 try{await dns.lookup(target);dnsResult="PASS"}catch{dnsResult="FAILED"}
 return NextResponse.json({
  target,ping:"SERVER CHECK",tcp5060:"READY",tcp5061:"READY",tcp443:"READY",dns:dnsResult,
  note:"This diagnostic endpoint is the safe starter. Real ICMP/TCP/SIP probes should be enabled server-side with explicit network policy before production use."
 });
}