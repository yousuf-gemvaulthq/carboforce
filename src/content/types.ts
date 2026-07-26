export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export interface Layer {
  name: string;
  desc: string;
}

export interface Application {
  name: string;
  desc: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    process: string;
    about: string;
    contact: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  partners: {
    eyebrow: string;
    title: string;
    names: string[];
  };
  home: {
    hero: {
      headline1: string;
      headline2: string;
      brandLine: string;
      scrollHint: string;
    };
    stats: Stat[];
    problemSolver: {
      eyebrow: string;
      title: string;
      body: string;
    };
    cta: {
      title: string;
      seeProcess: string;
      aboutUs: string;
      arrangeMeeting: string;
    };
  };
  process: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    intake: {
      eyebrow: string;
      title: string;
      body: string;
      chips: string[];
    };
    exploded: {
      eyebrow: string;
      title: string;
      layers: Layer[];
      selfSufficiency: string;
    };
    dualOutput: {
      biochar: {
        eyebrow: string;
        title: string;
        body: string;
        stat: string;
      };
      energy: {
        eyebrow: string;
        title: string;
        body: string;
        heat: string;
        electricity: string;
      };
    };
    data: {
      tempCurve: {
        title: string;
        caption: string;
      };
      energyBalance: {
        title: string;
        conventionalLabel: string;
        capTecLabel: string;
        conventionalValue: string;
        capTecValue: string;
      };
    };
    applications: {
      title: string;
      items: Application[];
    };
    cta: {
      title: string;
      talkToEngineers: string;
      requestBiochar: string;
    };
  };
  about: {
    hero: {
      eyebrow: string;
    };
    opening: string;
    unique: {
      title: string;
      items: Layer[];
    };
    cta: {
      title: string;
      button: string;
    };
  };
  contact: {
    hero: {
      line: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
    };
    details: {
      companyName: string;
      addressLines: string[];
      email: string;
      phone: string;
    };
  };
}
