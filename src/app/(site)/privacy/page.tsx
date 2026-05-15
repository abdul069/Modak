import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacybeleid",
  description:
    "Privacybeleid van AGNAU. Welke gegevens we verzamelen, waarvoor, hoe lang en welke rechten je hebt.",
  path: "/privacy",
});

const lastUpdated = "15 mei 2026";

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Privacybeleid", url: "/privacy" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="bg-off-white py-16 md:py-24">
        <Container size="narrow">
          <p className="eyebrow">Juridisch</p>
          <h1 className="mt-3">Privacybeleid</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            Hoe AGNAU omgaat met je persoonsgegevens — kort en zonder
            juridisch jargon waar mogelijk.
          </p>
        </Container>
      </section>

      <article className="py-16 md:py-20">
        <Container size="narrow">
          <p className="text-sm text-mute">Laatst bijgewerkt: {lastUpdated}</p>

          <div className="prose-agnau mt-8 max-w-none [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1.5 [&_a]:text-accent [&_a]:underline">
            <p>
              AGNAU hecht veel belang aan de bescherming van je persoonsgegevens.
              In deze privacyverklaring leggen we duidelijk en transparant uit
              welke gegevens we verzamelen, waarvoor we ze gebruiken, hoe lang we
              ze bewaren en welke rechten je hebt.
            </p>
            <p>
              We houden ons aan de Algemene Verordening Gegevensbescherming
              (Verordening (EU) 2016/679 — &ldquo;AVG&rdquo; of &ldquo;GDPR&rdquo;)
              en de Belgische privacywetgeving.
            </p>

            <h2>1. Wie zijn wij?</h2>
            <p>Verantwoordelijke voor de verwerking is:</p>
            <ul>
              <li><strong>{siteConfig.legalName}</strong></li>
              <li>{siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}, {siteConfig.contact.address.country}</li>
              <li>E-mail: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
              <li>Telefoon: <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a></li>
              {siteConfig.contact.kbo.startsWith("TODO") ? null : <li>Ondernemingsnummer: {siteConfig.contact.kbo}</li>}
            </ul>

            <h2>2. Welke gegevens verzamelen we?</h2>
            <p>We verzamelen enkel gegevens die je zelf aan ons bezorgt of die strikt noodzakelijk zijn voor de werking van onze website en dienstverlening:</p>
            <ul>
              <li><strong>Offerte- en contactformulieren</strong>: naam, e-mail, telefoonnummer, postcode, type project, antwoorden op divisie-specifieke vragen en eventuele opmerkingen.</li>
              <li><strong>E-mail of telefonisch contact</strong>: alles wat je ons spontaan bezorgt om je vraag of project te kunnen behandelen.</li>
              <li><strong>Werfgegevens (bestaande klanten)</strong>: adres van de werf, technische gegevens van de woning, attesten en facturen.</li>
              <li><strong>Technische gegevens</strong>: IP-adres en browser-informatie wanneer je een formulier verstuurt — uitsluitend om misbruik te voorkomen.</li>
              <li><strong>Marketing-gegevens</strong>: UTM-parameters en herkomst-informatie via Meta Pixel en Google Tag Manager om de effectiviteit van onze advertenties te meten.</li>
            </ul>

            <h2>3. Waarvoor gebruiken we deze gegevens?</h2>
            <ul>
              <li>Beantwoorden van je vraag of opmaken van een offerte;</li>
              <li>Plannen van een plaatsbezoek of werf en bijhouden van het dossier;</li>
              <li>Uitvoeren van de overeenkomst (planning, facturatie, garantie en nazorg);</li>
              <li>Voldoen aan onze wettelijke verplichtingen;</li>
              <li>Verbeteren van onze website en advertentie-effectiviteit.</li>
            </ul>

            <h2>4. Op welke rechtsgrond?</h2>
            <ul>
              <li><strong>Uitvoering van een overeenkomst</strong> of stappen op jouw verzoek vóór het sluiten van een overeenkomst;</li>
              <li><strong>Wettelijke verplichting</strong> (boekhouding, EPB-attesten, RESCert);</li>
              <li><strong>Gerechtvaardigd belang</strong> om misbruik tegen te gaan en dienstverlening kwaliteitsvol te leveren;</li>
              <li><strong>Toestemming</strong>, voor marketing- en trackingcookies.</li>
            </ul>

            <h2>5. Hoe lang bewaren we je gegevens?</h2>
            <ul>
              <li>Niet-omgezette aanvragen: maximum 24 maanden;</li>
              <li>Klantendossiers: 10 jaar (wettelijke tienjarige aansprakelijkheid bouwwerken);</li>
              <li>Boekhoudkundige stukken: 7 jaar;</li>
              <li>Marketing- en analyticsgegevens: 12 maanden, geanonimiseerd waar mogelijk.</li>
            </ul>

            <h2>6. Cookies en analytics</h2>
            <ul>
              <li><strong>Functionele cookies</strong>: strikt noodzakelijk voor de werking van de site. Geen toestemming vereist.</li>
              <li><strong>Marketing-cookies</strong>: Meta Pixel (Facebook/Instagram-advertenties) en Google Tag Manager. Worden geplaatst voor het meten van advertentie-effectiviteit.</li>
              <li><strong>UTM-parameters</strong>: opgeslagen in een eigen cookie (30 dagen) om de herkomst van offerteaanvragen te koppelen aan campagnes.</li>
              <li><strong>Vercel Analytics</strong>: voor performance- en page-view-statistieken. Werkt zonder persistente cookies.</li>
            </ul>

            <h2>7. Met wie delen we je gegevens?</h2>
            <ul>
              <li><strong>Hosting</strong>: Vercel Inc. (servers in de EU).</li>
              <li><strong>E-mailverwerking</strong>: Resend (transactionele e-mails na het invullen van een formulier).</li>
              <li><strong>Advertentieplatformen</strong>: Meta (Facebook/Instagram) en Google voor geanonimiseerde conversie-tracking.</li>
              <li><strong>Onderaannemers en leveranciers</strong>: uitsluitend wanneer noodzakelijk voor de uitvoering van werken.</li>
              <li><strong>Overheidsinstanties</strong>: wanneer wettelijk verplicht.</li>
            </ul>

            <h2>8. Beveiliging</h2>
            <p>We treffen redelijke technische en organisatorische maatregelen om je gegevens te beschermen: HTTPS-verbindingen, beperkte toegang tot dossiers, regelmatige updates en beveiligde wachtwoordpolicies.</p>

            <h2>9. Welke rechten heb je?</h2>
            <ul>
              <li>Recht op inzage, correctie en verwijdering;</li>
              <li>Recht op beperking en bezwaar;</li>
              <li>Recht op overdraagbaarheid;</li>
              <li>Recht om toestemming in te trekken.</li>
            </ul>
            <p>Stuur een mail naar <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. We reageren binnen één maand.</p>

            <h2>10. Klacht indienen</h2>
            <p>Bij ontevredenheid kun je een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit:</p>
            <ul>
              <li>Drukpersstraat 35, 1000 Brussel</li>
              <li><a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">www.gegevensbeschermingsautoriteit.be</a></li>
            </ul>

            <h2>11. Wijzigingen aan dit beleid</h2>
            <p>We kunnen dit privacybeleid bijwerken. De meest recente versie staat altijd op deze pagina, met datum van laatste wijziging bovenaan.</p>

            <p className="mt-12 text-sm text-mute">
              Heb je nog vragen?{" "}
              <Link href="/contact" className="text-accent underline">
                Neem gerust contact op
              </Link>
              .
            </p>
          </div>
        </Container>
      </article>
    </>
  );
}
