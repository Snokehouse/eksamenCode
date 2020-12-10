# eksamen

## sette opp prosjektet og starte prosjektet
npm i (eller yarn) for både app og server i terminal, deretter npm run dev for app (starte webpack), og npm run start for å starte server(backend, node)

om server ikke starter husk å sjekke .env filene og at de er riktige.

## .env filer
for app/client:

BASE_URL=http://localhost:5000
API_VERSION=/api/v1

for server:
NODE_ENV=development
PORT=5000
BASEURL=/api/v1
DATABASE_LOCAL=mongodb://localhost:27017/eksamen
JWT_SECRET=verysecretqwerty
JWT_EXPIRES_TIME=7d
COOKIE_EPIRE_TIME=7d
EMAIL_HOST= smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=2b8e61cd41c1e8
EMAIL_PASSWORD=d2c84a58c73519
EMAIL_FROM=noreply@eksamen-web.no
EMAIL_FROM_NAME=Eksamen-Web

## sette opp mail
mailtrap.io finner settings for host,port og auth(user, pass) på nettsiden til mailtrap når du velger nodemailer fra nedtrekkslisten i smtp settings (dette må settes inn i .env filen for server for å få mail)

## Kode hentet fra forelesning/obliger etc.
vi har gjenbrukt en god del kode fra Marius da vi fant ut at vi ikke hadde nok tid til å implementere dette selv. vi har prøvd så godt vi kan å tilpasse Marius sin kode til vårt "prosjekt" så godt som mulig. derimot så vi oss nødt til å ty til hjelp fra Marius sin kode.

en del kode gjenbrukt på frontend, men langt mindre enn hva som er gjenbrukt på backend.

hashing/kryptering av passord ( linje: 49, server/Modell/User.js, https://github.com/eXtremeXR/APIAuthenticationWithNode/blob/Part_%238/models/user.js)

## Lage admin bruker
- For å lage admin bruker trenger du følgende link til postman: http://localhost:5000/api/v1/register
- Så må du bruke følgende struktur i body får å få laget en bruker:
- {
    "name": " ",
    "email": " ",
    "password": " ", (minst 3 tegn som må inneholde minst 1 tall, 1 bokstav og 1 spesialtegn)
    "role": "admin"
  }

## NB
bør nevnes at jeg hadde problemer med eslint og kompatibelhet fra mac til windows. så om det er problemer med dette https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier, det skjer pga feil med linjeskift, fordi det er forskjellig fra mac til windows


Hadde ett lite problem med å autofylle verdier for kontaktskjema, skrevet mer detaljert hva og hvorfor i koden(linje: 34, app/src/Components/Struktur/Kontakt/Index.jsx)
