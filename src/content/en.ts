import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "CARBO-FORCE — Carbo-CAP-TEC Pyrolysis Plants",
    description:
      "Patented Carbo-CAP-TEC pyrolysis plants from Kassel, Germany, turn organic residues into stable biochar that permanently binds CO2 — while producing more energy than they consume.",
  },
  nav: {
    home: "Home",
    process: "Process",
    about: "About",
    contact: "Contact",
    cta: "Arrange a Meeting",
  },
  footer: {
    tagline: "More user-friendly. More efficient. Ready to use!",
    rights: "All rights reserved.",
  },
  partners: {
    eyebrow: "Trusted network",
    title: "Working alongside the institutions shaping biochar in Germany",
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
        "Every year, the world burns or buries the one material that could save it.",
      headline2: "What if that carbon never escaped again?",
      brandLine: "Carbo-CAP-TEC: More user-friendly. More efficient. Ready to use!",
      scrollHint: "Scroll to begin",
    },
    stats: [
      { value: 1000, prefix: "", suffix: "+ yrs", label: "carbon stability in finished biochar" },
      { value: 8000, suffix: " hrs/yr", label: "typical plant runtime" },
      { value: 0, suffix: " kWh", label: "external energy required in operation" },
    ],
    problemSolver: {
      eyebrow: "Problem solver: Biochar",
      title: "Organic waste is a climate liability. Biochar makes it a climate asset.",
      body:
        "Every tonne of waste wood, digestate, sewage sludge or manure left to rot or burn releases its carbon straight back into the atmosphere. Carbo-CAP-TEC pyrolysis locks that carbon into stable biochar instead — a solid material that resists decomposition for over a thousand years, while the process itself throws off more usable heat and electricity than it consumes.",
    },
    cta: {
      title: "See how it works, who we are, or talk to us directly.",
      seeProcess: "See the Process",
      aboutUs: "About",
      arrangeMeeting: "Arrange a Meeting",
    },
  },
  process: {
    hero: {
      eyebrow: "Carbo-CAP-TEC",
      title: "Garbage in, carbon locked, power out.",
      subtitle:
        "One patented plant. Four organic waste streams in. Stable biochar and surplus energy out.",
    },
    intake: {
      eyebrow: "01 — Intake",
      title: "Any organic residue, one intake",
      body:
        "Waste wood, digestate, sewage sludge and manure all travel the same feed line into the plant's hopper. No sorting theatrics, no exotic feedstock requirements — just the residues your operation already produces.",
      chips: ["Waste wood", "Digestate", "Sewage sludge", "Manure"],
    },
    exploded: {
      eyebrow: "02 — Inside the plant",
      title: "One housing, five working layers",
      layers: [
        { name: "Outer housing", desc: "Weatherproof brushed-steel container, ready to ship and site anywhere." },
        { name: "Feedstock intake", desc: "Continuous hopper and feed screw handle mixed organic residues without pre-drying." },
        { name: "Carbo-CAP-TEC core", desc: "The patented pyrolysis reactor: sealed, oxygen-free carbonization at controlled temperature." },
        { name: "Energy recovery", desc: "Waste heat from the reaction is captured and redirected before it ever leaves the housing." },
        { name: "Biochar output", desc: "Finished biochar is cooled and discharged, ready for storage or direct application." },
      ],
      selfSufficiency:
        "Energy is only needed to start the process — after that, it runs on itself.",
    },
    dualOutput: {
      biochar: {
        eyebrow: "Output 1 — Carbon",
        title: "Stable carbon for more than 1,000 years",
        body:
          "The biochar leaving the plant is a permanent carbon sink. It qualifies for carbon-removal credits and improves soil, concrete and filtration media wherever it's applied.",
        stat: "1,000+ year carbon stability",
      },
      energy: {
        eyebrow: "Output 2 — Better than self-sufficient",
        title: "Heat and electricity, not just heat for itself",
        body:
          "Once running, Carbo-CAP-TEC produces meaningfully more energy than it consumes. The surplus splits into two usable streams: a district-heating loop and grid electricity.",
        heat: "District heating",
        electricity: "Electricity",
      },
    },
    data: {
      tempCurve: {
        title: "Reactor temperature over a full cycle",
        caption: "Controlled ramp, sustained carbonization plateau, and a fast, safe cool-down.",
      },
      energyBalance: {
        title: "Energy balance: conventional disposal vs. Carbo-CAP-TEC",
        conventionalLabel: "Conventional disposal",
        capTecLabel: "Carbo-CAP-TEC",
        conventionalValue: "Net energy consumer",
        capTecValue: "Net energy producer",
      },
    },
    applications: {
      title: "Where the output goes to work",
      items: [
        { name: "Agriculture", desc: "Soil amendment that improves water retention and nutrient cycling." },
        { name: "Construction", desc: "Carbon-negative additive for concrete and building materials." },
        { name: "Water filtration", desc: "High-surface-area carbon for filtration media." },
        { name: "Carbon credits", desc: "Verified carbon removal, certified and tradable." },
      ],
    },
    cta: {
      title: "Ready to see Carbo-CAP-TEC on your site?",
      talkToEngineers: "Talk to our engineers",
      requestBiochar: "Request biochar",
    },
  },
  about: {
    hero: {
      eyebrow: "About CARBO-FORCE",
    },
    opening:
      "We don't just talk about climate change — we work actively to combat it.",
    unique: {
      title: "What makes us unique",
      items: [
        { name: "Patented method", desc: "Carbo-CAP-TEC is our own patented pyrolysis process, engineered and refined in Kassel." },
        { name: "Scalable plant", desc: "A container-format design that ships, installs and scales to fit operations of any size." },
        { name: "Holistic advice", desc: "We stay involved from initial design through commissioning and beyond, not just at the point of sale." },
      ],
    },
    cta: {
      title: "Want to talk about what Carbo-CAP-TEC could do for you?",
      button: "Contact us",
    },
  },
  contact: {
    hero: {
      line: "Let's meet in real life to talk about the potential of our systems for you.",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you — we'll be in touch shortly.",
    },
    details: {
      companyName: "Carbo-FORCE GmbH",
      addressLines: ["Wilhelmshöher Allee 273a", "34131 Kassel, Germany"],
      email: "info@carbo-force.de",
      phone: "+49 561 59861977",
    },
  },
};
