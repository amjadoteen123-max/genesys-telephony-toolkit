# Genesys Telephony & Network Toolkit

A production-oriented starter for Genesys Cloud telephony administration and network troubleshooting.

## Modules
- Connect Genesys Cloud (OAuth-ready)
- Sites
- Edges
- External Trunks
- Edge Groups
- Number Plans
- Outbound Routes
- Troubleshooting Center
- Backup
- Audit Log

## Security
Do not put Genesys Client Secrets in GitHub or browser JavaScript. Use Vercel server-side environment variables and an OAuth callback.

## Run
npm install
npm run dev

## Next integration
Configure Genesys OAuth Authorization Code + PKCE, then connect the server routes to the official Genesys Cloud APIs.
