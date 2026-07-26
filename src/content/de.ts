import type { Content } from "./types";

export const de: Content = {
  meta: {
    title: "CARBO-FORCE — Carbo-CAP-TEC Pyrolyseanlagen",
    description:
      "Die patentierten Carbo-CAP-TEC-Pyrolyseanlagen aus Kassel verwandeln organische Reststoffe in stabile Pflanzenkohle, die CO2 dauerhaft bindet — und dabei mehr Energie erzeugen, als sie verbrauchen.",
  },
  nav: {
    home: "Start",
    process: "Verfahren",
    about: "Über uns",
    contact: "Kontakt",
    cta: "Termin vereinbaren",
  },
  footer: {
    tagline: "Benutzerfreundlicher. Effizienter. Einsatzbereit!",
    rights: "Alle Rechte vorbehalten.",
  },
  partners: {
    eyebrow: "Vertrauensvolles Netzwerk",
    title: "An der Seite der Institutionen, die Pflanzenkohle in Deutschland prägen",
    names: [
      "BAUER Resources",
      "German Biochar e.V.",
      "Fraunhofer IKTS",
      "European Biochar Industry Consortium",
    ],
  },
  home: {
    hero: {
      headline1:
        "Jedes Jahr verbrennt oder vergräbt die Welt genau den Stoff, der sie retten könnte.",
      headline2: "Was, wenn dieser Kohlenstoff nie wieder entweicht?",
      brandLine: "Carbo-CAP-TEC: Benutzerfreundlicher. Effizienter. Einsatzbereit!",
      scrollHint: "Scrollen zum Start",
    },
    stats: [
      { value: 1000, prefix: "", suffix: "+ Jahre", label: "Kohlenstoffstabilität in fertiger Pflanzenkohle" },
      { value: 8000, suffix: " Std./Jahr", label: "typische Anlagenlaufzeit" },
      { value: 0, suffix: " kWh", label: "externe Energie im laufenden Betrieb" },
    ],
    problemSolver: {
      eyebrow: "Problemlöser: Pflanzenkohle",
      title: "Organische Abfälle sind eine Klimalast. Pflanzenkohle macht sie zum Klimavorteil.",
      body:
        "Jede Tonne Altholz, Gärrest, Klärschlamm oder Gülle, die verrottet oder verbrannt wird, gibt ihren Kohlenstoff direkt wieder an die Atmosphäre ab. Die Carbo-CAP-TEC-Pyrolyse bindet diesen Kohlenstoff stattdessen in stabiler Pflanzenkohle — einem festen Material, das über tausend Jahre der Zersetzung widersteht, während der Prozess selbst mehr nutzbare Wärme und Strom abgibt, als er verbraucht.",
    },
    cta: {
      title: "Sehen Sie, wie es funktioniert, wer wir sind, oder sprechen Sie direkt mit uns.",
      seeProcess: "Zum Verfahren",
      aboutUs: "Über uns",
      arrangeMeeting: "Termin vereinbaren",
    },
  },
  process: {
    hero: {
      eyebrow: "Carbo-CAP-TEC",
      title: "Abfall rein, Kohlenstoff gebunden, Energie raus.",
      subtitle:
        "Eine patentierte Anlage. Vier organische Reststoffströme hinein. Stabile Pflanzenkohle und überschüssige Energie heraus.",
    },
    intake: {
      eyebrow: "01 — Zufuhr",
      title: "Jeder organische Reststoff, eine Zufuhr",
      body:
        "Altholz, Gärreste, Klärschlamm und Gülle laufen über dieselbe Zufuhrlinie in den Trichter der Anlage. Keine aufwendige Sortierung, keine exotischen Anforderungen an das Einsatzmaterial — einfach die Reststoffe, die Ihr Betrieb ohnehin erzeugt.",
      chips: ["Altholz", "Gärrest", "Klärschlamm", "Gülle"],
    },
    exploded: {
      eyebrow: "02 — Im Inneren der Anlage",
      title: "Ein Gehäuse, fünf Funktionsebenen",
      layers: [
        { name: "Außengehäuse", desc: "Wetterfester Container aus gebürstetem Stahl, versandfertig und überall einsatzbereit." },
        { name: "Materialzufuhr", desc: "Kontinuierlicher Trichter mit Förderschnecke verarbeitet gemischte organische Reststoffe ohne Vortrocknung." },
        { name: "Carbo-CAP-TEC-Kern", desc: "Der patentierte Pyrolysereaktor: versiegelte, sauerstofffreie Karbonisierung bei geregelter Temperatur." },
        { name: "Energierückgewinnung", desc: "Abwärme aus der Reaktion wird aufgefangen und umgeleitet, bevor sie das Gehäuse verlässt." },
        { name: "Pflanzenkohle-Ausgabe", desc: "Fertige Pflanzenkohle wird gekühlt und ausgetragen, bereit zur Lagerung oder direkten Anwendung." },
      ],
      selfSufficiency:
        "Energie wird nur zum Starten des Prozesses benötigt — danach läuft die Anlage aus sich selbst heraus.",
    },
    dualOutput: {
      biochar: {
        eyebrow: "Ausgabe 1 — Kohlenstoff",
        title: "Stabiler Kohlenstoff für über 1.000 Jahre",
        body:
          "Die Pflanzenkohle, die die Anlage verlässt, ist eine dauerhafte Kohlenstoffsenke. Sie qualifiziert sich für CO2-Entnahmezertifikate und verbessert Boden, Beton und Filtermedien, wo immer sie eingesetzt wird.",
        stat: "Kohlenstoffstabilität über 1.000 Jahre",
      },
      energy: {
        eyebrow: "Ausgabe 2 — Mehr als nur autark",
        title: "Wärme und Strom, nicht nur Wärme für sich selbst",
        body:
          "Einmal in Betrieb, erzeugt Carbo-CAP-TEC spürbar mehr Energie, als sie verbraucht. Der Überschuss teilt sich in zwei nutzbare Ströme: ein Fernwärmenetz und Netzstrom.",
        heat: "Fernwärme",
        electricity: "Strom",
      },
    },
    data: {
      tempCurve: {
        title: "Reaktortemperatur über einen vollständigen Zyklus",
        caption: "Kontrollierter Anstieg, anhaltendes Karbonisierungsplateau und eine schnelle, sichere Abkühlung.",
      },
      energyBalance: {
        title: "Energiebilanz: konventionelle Entsorgung vs. Carbo-CAP-TEC",
        conventionalLabel: "Konventionelle Entsorgung",
        capTecLabel: "Carbo-CAP-TEC",
        conventionalValue: "Netto-Energieverbraucher",
        capTecValue: "Netto-Energieerzeuger",
      },
    },
    applications: {
      title: "Wo das Ergebnis zum Einsatz kommt",
      items: [
        { name: "Landwirtschaft", desc: "Bodenverbesserer, der Wasserspeicherung und Nährstoffkreislauf verbessert." },
        { name: "Bauwesen", desc: "Kohlenstoffnegativer Zusatzstoff für Beton und Baumaterialien." },
        { name: "Wasserfiltration", desc: "Kohlenstoff mit hoher Oberfläche für Filtermedien." },
        { name: "CO2-Zertifikate", desc: "Verifizierte Kohlenstoffentnahme, zertifiziert und handelbar." },
      ],
    },
    cta: {
      title: "Bereit, Carbo-CAP-TEC an Ihrem Standort zu sehen?",
      talkToEngineers: "Mit unseren Ingenieuren sprechen",
      requestBiochar: "Pflanzenkohle anfragen",
    },
  },
  about: {
    hero: {
      eyebrow: "Über CARBO-FORCE",
    },
    opening:
      "Wir reden nicht nur über den Klimawandel — wir bekämpfen ihn aktiv.",
    unique: {
      title: "Was uns einzigartig macht",
      items: [
        { name: "Patentiertes Verfahren", desc: "Carbo-CAP-TEC ist unser eigenes patentiertes Pyrolyseverfahren, entwickelt und verfeinert in Kassel." },
        { name: "Skalierbare Anlage", desc: "Ein Containerdesign, das sich versenden, installieren und an Betriebe jeder Größe anpassen lässt." },
        { name: "Ganzheitliche Beratung", desc: "Wir begleiten Sie von der ersten Planung über die Inbetriebnahme hinaus — nicht nur bis zum Verkaufsabschluss." },
      ],
    },
    cta: {
      title: "Möchten Sie besprechen, was Carbo-CAP-TEC für Sie leisten kann?",
      button: "Kontaktieren Sie uns",
    },
  },
  contact: {
    hero: {
      line: "Lassen Sie uns persönlich über das Potenzial unserer Systeme für Sie sprechen.",
    },
    form: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Vielen Dank — wir melden uns in Kürze.",
    },
    details: {
      companyName: "Carbo-FORCE GmbH",
      addressLines: ["Wilhelmshöher Allee 273a", "34131 Kassel, Deutschland"],
      email: "info@carbo-force.de",
      phone: "+49 561 59861977",
    },
  },
};
