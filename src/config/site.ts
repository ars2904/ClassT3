export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  foundedYear: number;
  phone: string;
  altPhone: string;
  email: string;
  whatsapp: string; // international format with no + or spaces, e.g. 919876543210
  whatsappMessage: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
    mapUrl: string;
  };
  branches: {
    name: string;
    address: string;
    phone: string;
    timings: string;
  }[];
  officeHours: string;
  social: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
    linkedin?: string;
    telegram?: string;
  };
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  badges: string[];
}

export const siteConfig: SiteConfig = {
  name: "Apex Academy of Excellence",
  shortName: "Apex Academy",
  tagline: "Empowering Minds, Delivering Ranks & Academic Mastery",
  description:
    "Premier coaching institute for CBSE, ICSE, State Boards & Competitive Prep (NEET, JEE, Foundation). Proven track record of 98.4% top scorers, personalized 1-on-1 mentoring, and small batch sizes.",
  foundedYear: 2012,
  phone: "+91 98765 43210",
  altPhone: "+91 98765 43211",
  email: "admissions@apexacademy.edu",
  whatsapp: "919876543210",
  whatsappMessage: "Hi Apex Academy, I want to book a Free Demo Class and know about available batches.",
  address: {
    street: "Plot 42, Education Hub, Knowledge Park III",
    city: "New Delhi",
    state: "Delhi NCR",
    zip: "110001",
    full: "Plot 42, Education Hub, Knowledge Park III, New Delhi 110001",
    mapUrl: "https://maps.google.com/?q=New+Delhi+Education+Hub",
  },
  branches: [
    {
      name: "Main Campus (North Wing)",
      address: "Plot 42, Education Hub, Knowledge Park III, New Delhi",
      phone: "+91 98765 43210",
      timings: "Mon - Sat: 8:00 AM - 8:30 PM | Sun: 9:00 AM - 4:00 PM",
    },
    {
      name: "South Extension Centre",
      address: "2nd Floor, Imperial Towers, Ring Road, South Ext-II, New Delhi",
      phone: "+91 98765 43212",
      timings: "Mon - Sat: 9:00 AM - 8:00 PM | Sun: 9:00 AM - 2:00 PM",
    },
  ],
  officeHours: "Monday to Saturday: 8:00 AM - 8:30 PM | Sunday: 9:00 AM - 4:00 PM",
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    telegram: "https://telegram.org",
  },
  stats: [
    { value: "12,500+", label: "Students Mentored", sublabel: "Since 2012" },
    { value: "98.4%", label: "Scored Above 90%", sublabel: "In Board Exams 2024" },
    { value: "1:12", label: "Teacher-Student Ratio", sublabel: "Guaranteed personal attention" },
    { value: "350+", label: "Selections in Top Colleges", sublabel: "IITs, NITs, AIIMS & Top Unis" },
  ],
  badges: [
    "ISO 9001:2015 Certified",
    "Awarded Best Coaching Institute 2023",
    "100% Concept-First Pedagogy",
    "Weekly Biometric & SMS Attendance",
  ],
};
