import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacybeleid",
  description:
    "Privacybeleid van AGNAU. Welke gegevens we verzamelen, waarvoor, hoe lang en welke rechten je hebt.",
  path: "/privacy",
});

const lastUpdated = "6 mei 2026";

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Privacybeleid", url: "/privacy" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Hero
        eyebrow="Juridisch"
        title="Privacybeleid"
        subtitle="Hoe AGNAU omgaat met je persoonsgegevens — kort en zonder juridisch jargon waar mogelijk."
      />

      <article className="container-page max-w-3xl py-16 md:py-20">
        <Breadcrumbs items={breadcrumbs} />

        <p className="text-sm text-brand-ink-soft">
          Laatst bijgewerkt: {lastUpdated}
        </p>

        <div className="prose-agnau mt-8 max-w-none">
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
          <p>
            Verantwoordelijke voor de verwerking van je persoonsgegevens is:
          </p>
          <ul>
            <li>
              <strong>AGNAU</strong>
            </li>
            <li>
              {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.postalCode}{" "}
              {siteConfig.contact.address.city},{" "}
              {siteConfig.contact.address.country}
            </li>
            <li>
              E-mail:{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              Telefoon:{" "}
              <a href={siteConfig.contact.phoneHref}>
                {siteConfig.contact.phone}
              </a>
            </li>
            {siteConfig.contact.kbo.startsWith("TODO") ? null : (
              <li>Ondernemingsnummer: {siteConfig.contact.kbo}</li>
            )}
          </ul>
          <p>
            Voor alle vragen over je persoonsgegevens of dit privacybeleid kun
            je ons contacteren via{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>

          <h2>2. Welke gegevens verzamelen we?</h2>
          <p>
            We verzamelen enkel gegevens die je zelf aan ons bezorgt of die
            strikt noodzakelijk zijn voor de werking van onze website en onze
            dienstverlening:
          </p>
          <ul>
            <li>
              <strong>Contact- en offerteformulier:</strong> naam, e-mailadres,
              telefoonnummer, plaats/postcode, type woning, gewenste diensten,
              berichttekst en eventueel een door jou geüploade bijlage (foto,
              plan, PDF).
            </li>
            <li>
              <strong>E-mail of telefonisch contact:</strong> alles wat je ons
              spontaan bezorgt om je vraag of project te kunnen behandelen.
            </li>
            <li>
              <strong>Werfgegevens (bestaande klanten):</strong> adres van de
              werf, technische gegevens van de woning, attesten en facturen.
            </li>
            <li>
              <strong>Technische gegevens:</strong> IP-adres en
              browser-informatie wanneer je een formulier verstuurt — uitsluitend
              gebruikt om misbruik (spam, automatische bots) te voorkomen via
              een tijdelijke beveiligingsmaatregel (rate-limiting).
            </li>
            <li>
              <strong>Statistieken:</strong> geanonimiseerde bezoekersgegevens
              via Plausible Analytics (zie sectie 6).
            </li>
          </ul>
          <p>
            We verzamelen <em>geen</em> gevoelige gegevens (gezondheid, geloof,
            politieke voorkeur, …) en we kopen geen gegevens aan via derden.
          </p>

          <h2>3. Waarvoor gebruiken we deze gegevens?</h2>
          <p>
            We gebruiken je gegevens enkel voor de doelen waarvoor je ze
            bezorgt:
          </p>
          <ul>
            <li>
              Beantwoorden van je contactvraag of opmaken van een offerte;
            </li>
            <li>
              Plannen van een plaatsbezoek of werf en bijhouden van het
              dossier;
            </li>
            <li>
              Uitvoeren van de overeenkomst (planning, facturatie, garantie en
              nazorg);
            </li>
            <li>
              Voldoen aan onze wettelijke verplichtingen (boekhouding,
              fiscaliteit, EPB, RESCert, F-gas-registratie, enz.);
            </li>
            <li>
              Verbeteren van onze website en dienstverlening op basis van
              geanonimiseerde statistieken.
            </li>
          </ul>

          <h2>4. Op welke rechtsgrond?</h2>
          <p>
            Naargelang het doel verwerken we je gegevens op basis van:
          </p>
          <ul>
            <li>
              <strong>Uitvoering van een overeenkomst</strong> of stappen op
              jouw verzoek vóór het sluiten van een overeenkomst (bv.
              offerteaanvraag);
            </li>
            <li>
              <strong>Wettelijke verplichting</strong> (bv. bewaarplicht
              boekhouding, EPB-attesten);
            </li>
            <li>
              <strong>Gerechtvaardigd belang</strong>, bv. om misbruik van onze
              formulieren tegen te gaan of om onze dienstverlening
              kwaliteitsvol te blijven leveren;
            </li>
            <li>
              <strong>Toestemming</strong>, wanneer dat wettelijk vereist is
              (bv. voor niet-essentiële cookies, indien van toepassing). Je
              kunt je toestemming op elk moment intrekken.
            </li>
          </ul>

          <h2>5. Hoe lang bewaren we je gegevens?</h2>
          <p>
            We bewaren je persoonsgegevens niet langer dan nodig voor het doel
            waarvoor ze werden verzameld:
          </p>
          <ul>
            <li>
              <strong>Niet-omgezette aanvragen:</strong> maximum 24 maanden,
              voor het geval je ons later opnieuw contacteert;
            </li>
            <li>
              <strong>Klantendossiers:</strong> 10 jaar na de laatste prestatie,
              in lijn met de wettelijke garantietermijnen op bouwwerken
              (artikel 1792 BW &ldquo;tienjarige aansprakelijkheid&rdquo;);
            </li>
            <li>
              <strong>Boekhoudkundige stukken:</strong> 7 jaar conform fiscale
              wetgeving;
            </li>
            <li>
              <strong>Technische logs &amp; statistieken:</strong> maximaal 12
              maanden, geanonimiseerd waar mogelijk.
            </li>
          </ul>

          <h2>6. Cookies en analytics</h2>
          <p>
            Onze website werkt met een minimum aan cookies:
          </p>
          <ul>
            <li>
              <strong>Functionele cookies:</strong> strikt noodzakelijk voor de
              werking van de site (bv. CSRF-bescherming bij formulieren). Geen
              toestemming vereist.
            </li>
            <li>
              <strong>Plausible Analytics:</strong> we gebruiken Plausible voor
              geanonimiseerde bezoekersstatistieken. Plausible plaatst{" "}
              <em>geen</em> cookies, traceert geen individuele bezoekers en
              werkt zonder verzamelen van persoonsgegevens. De gegevens worden
              binnen de EU verwerkt.
            </li>
            <li>
              <strong>Vercel Analytics:</strong> voor performance- en
              page-view-statistieken. Werkt zonder persistente cookies en
              respecteert de Do-Not-Track-instelling van je browser.
            </li>
          </ul>
          <p>
            We gebruiken geen marketing- of trackingcookies van derden.
          </p>

          <h2>7. Met wie delen we je gegevens?</h2>
          <p>
            We verkopen je gegevens nooit. We delen ze enkel met partijen die
            we strikt nodig hebben voor de uitvoering van onze diensten:
          </p>
          <ul>
            <li>
              <strong>Hosting:</strong> Vercel Inc. (servers in de EU).
            </li>
            <li>
              <strong>E-mailverwerking:</strong> Resend (voor transactionele
              e-mails na het invullen van een formulier).
            </li>
            <li>
              <strong>Statistieken:</strong> Plausible Analytics (EU,
              cookieloos en anoniem).
            </li>
            <li>
              <strong>Onderaannemers en leveranciers:</strong> uitsluitend
              wanneer noodzakelijk voor de uitvoering van werken (bv.
              tegelzetter, leverancier warmtepomp), en steeds met de nodige
              vertrouwelijkheid.
            </li>
            <li>
              <strong>Overheidsinstanties:</strong> wanneer wettelijk verplicht
              (bv. Mijn VerbouwPremie, F-gas-registratie, fiscus).
            </li>
          </ul>
          <p>
            Met al onze verwerkers zijn afspraken gemaakt over
            gegevensbescherming, conform artikel 28 AVG.
          </p>

          <h2>8. Beveiliging</h2>
          <p>
            We treffen redelijke technische en organisatorische maatregelen om
            je gegevens te beschermen tegen verlies, onbevoegde toegang en
            misbruik: HTTPS-verbindingen, beperkte toegang tot dossiers,
            regelmatige updates van software, en beveiligde
            wachtwoordpolicies.
          </p>

          <h2>9. Welke rechten heb je?</h2>
          <p>
            Onder de AVG heb je de volgende rechten met betrekking tot je
            persoonsgegevens:
          </p>
          <ul>
            <li>
              <strong>Recht op inzage:</strong> je kunt opvragen welke
              gegevens we van jou bewaren.
            </li>
            <li>
              <strong>Recht op correctie:</strong> je kunt onjuiste of
              onvolledige gegevens laten aanpassen.
            </li>
            <li>
              <strong>Recht op verwijdering:</strong> je kunt vragen je
              gegevens te wissen, behalve waar we wettelijk verplicht zijn ze
              te bewaren.
            </li>
            <li>
              <strong>Recht op beperking:</strong> je kunt vragen de
              verwerking tijdelijk stop te zetten.
            </li>
            <li>
              <strong>Recht op overdraagbaarheid:</strong> je kunt je
              gegevens in een gestructureerd formaat ontvangen.
            </li>
            <li>
              <strong>Recht op bezwaar:</strong> je kunt bezwaar maken tegen
              verwerking op basis van gerechtvaardigd belang.
            </li>
            <li>
              <strong>Recht om toestemming in te trekken</strong>, indien de
              verwerking daarop gebaseerd is.
            </li>
          </ul>
          <p>
            Je kunt deze rechten uitoefenen door een mail te sturen naar{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            . We reageren binnen één maand. Om misbruik te voorkomen kunnen we
            je vragen je identiteit te bevestigen.
          </p>

          <h2>10. Klacht indienen</h2>
          <p>
            Ben je niet tevreden over hoe we met je gegevens omgaan? Laat het
            ons eerst zelf weten — we lossen het graag samen op. Lukt dat
            niet, dan kun je een klacht indienen bij de Belgische
            Gegevensbeschermingsautoriteit:
          </p>
          <ul>
            <li>Drukpersstraat 35, 1000 Brussel</li>
            <li>
              <a
                href="https://www.gegevensbeschermingsautoriteit.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.gegevensbeschermingsautoriteit.be
              </a>
            </li>
            <li>
              <a href="mailto:contact@apd-gba.be">contact@apd-gba.be</a>
            </li>
          </ul>

          <h2>11. Wijzigingen aan dit beleid</h2>
          <p>
            We kunnen dit privacybeleid bijwerken wanneer onze diensten,
            wetgeving of werkmethoden wijzigen. De meest recente versie is
            altijd terug te vinden op deze pagina, met datum van laatste
            wijziging bovenaan.
          </p>

          <p className="mt-12 text-sm text-brand-ink-soft">
            Heb je nog vragen?{" "}
            <Link href="/contact" className="text-brand-primary hover:underline">
              Neem gerust contact op
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
