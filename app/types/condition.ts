export type InfoCardItem = {
  icon: string;
  title: string;
  description: string;
  bullets: { text: string; positive?: boolean }[];
};

export type StepItem = {
  title: string;
  description: string;
};

export type ProsConsItem = {
  pros: string[];
  cons: string[];
};


export interface ConditionPageData {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  heroImage: string;
  researchCitations: {
    text: string;
    source: string;
    year: string;
 }[];
  metaDescription: string;
  keywords: string[];

    heroDescription: string;
  heroStats: {
    stat: string;
    label: string;
  }[];

    conditionDescription: string;
  symptoms: string[];
  causes: string[];
  riskFactors: string[];

    treatmentOptions: TreatmentOption[];
  treatmentProcess: {
    step: number;
    title: string;

    description: string;
    duration?: string;
  }[];

    costInfo: {
    consultationCost: string;
    prescriptionCost?: string;
    insuranceCoverage: string;
    availability: string;
  };

    indications: string[];
  contraindications: string[];

    faqs: ConditionFAQ[];

    statistics: {
    value: string;
    description: string;
  }[];


      relatedConditions: string[];
}




export interface ConditionFAQ {
  question: string;
  answer: string;
}

export interface TreatmentOption {
  name: string;
  description: string;
  pros: string[];
  type: string;
  cons: string[];
}
