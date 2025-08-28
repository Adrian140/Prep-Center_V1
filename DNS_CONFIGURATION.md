++ b/DNS_CONFIGURATION.md
# Configurație DNS Corectă pentru prep-center.eu

## Configurația Actuală - Probleme Identificate:
 
### ✅ CONFIGURAȚIA CORECTĂ PENTRU CLOUDFLARE:
 
### Pentru Vercel Hosting (setați pe "DNS only" - cloud gri):
``
CNAME  www  cname.vercel-dns.com  (DNS only)
```

**De ce ai nevoie de www:**
- Utilizatorii pot accesa www.prep-center.eu
- Vercel va face redirect automat către prep-center.eu
-- SEO mai bun (Google indexează ambele variante)
 
### Recorduri CNAME pentru Vercel:
 ```
 CNAME  prep-center.eu     cname.vercel-dns.com     (DNS only)
 CNAME  www               cname.vercel-dns.com     (DNS only)
 ```
 
### Recorduri de Email (PĂSTREAZĂ-LE EXACT AȘA):
``
MX     prep-center.eu     prepcenter-eu01b.mail.protection.outlook.com  (Priority: 0)
TXT    prep-center.eu     "v=spf1 include:spf.protection.outlook.com -all"
TXT    prep-center.eu     "NETORGFT1882120.onmicrosoft.com"
TXT    _dmarc            "v=DMARC1; p=none; rua=mailto:admin@prep-center.eu; ruf=mailto:admin@prep-center.eu; fo=1"
```

# �� CONFIGURAȚIA FINALĂ RECOMANDATĂ:

