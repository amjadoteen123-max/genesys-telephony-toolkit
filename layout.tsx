import "./globals.css";
import type { ReactNode } from "react";
export const metadata={title:"Genesys Telephony & Network Toolkit",description:"Genesys Cloud telephony administration and network diagnostics"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}