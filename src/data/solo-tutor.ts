export interface SoloTutorData {
  tutorName: string;
  tuitionName: string;
  tagline: string;
  experienceYears: number;
  qualifications: string;
  subjects: string[];
  gradesTaught: string;
  phone: string;
  whatsapp: string;
  address: string;
  landmark: string;
  googleMapEmbedUrl?: string;
  batchSizeLimit: number;
  bio: string;
  personalPromise: string;
  batches: {
    grade: string;
    subject: string;
    days: string;
    time: string;
    seatsLeft: number;
    feeMonthly: string;
  }[];
  whySoloMentor: {
    title: string;
    desc: string;
  }[];
  methodology: {
    step: string;
    title: string;
    desc: string;
  }[];
  comparison: {
    feature: string;
    sharmaSir: string;
    commercial: string;
  }[];
  toppers: {
    student: string;
    score: string;
    exam: string;
    school: string;
    improvement: string;
  }[];
  reviews: {
    studentOrParent: string;
    grade: string;
    quote: string;
    score: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const soloTutorData: SoloTutorData = {
  tutorName: "Er. Amit Sharma",
  tuitionName: "Sharma Sir's Maths & Science Academy",
  tagline: "Personalized Home Coaching Where Every Doubt is Solved Patiently",
  experienceYears: 14,
  qualifications: "B.Tech (Honours), M.Sc. Applied Mathematics",
  subjects: ["Mathematics", "Physics", "Chemistry"],
  gradesTaught: "Classes 8th, 9th, 10th, 11th & 12th (CBSE / ICSE)",
  phone: "+91 98112 34567",
  whatsapp: "919811234567",
  address: "House 24, Block C, Green Park Extension, Near Mother Dairy",
  landmark: "2 mins walk from Green Park Metro Station (Gate 3)",
  batchSizeLimit: 10,
  bio: "Teaching mathematics and science since 2010. Former Senior Lecturer who chose to teach small personal batches because big commercial institutes ignore back-benchers. Every child learns at their own pace.",
  personalPromise:
    "I personally teach every class and mark every test paper myself. No junior teaching assistants, no substitute lectures, no compromises on your child's fundamentals.",
  batches: [
    {
      grade: "Class 10 (CBSE/ICSE)",
      subject: "Maths + Science Complete",
      days: "Mon, Wed, Fri",
      time: "4:30 PM - 6:30 PM",
      seatsLeft: 3,
      feeMonthly: "₹3,500 / mo",
    },
    {
      grade: "Class 9 (CBSE/ICSE)",
      subject: "Maths & Science Foundations",
      days: "Tue, Thu, Sat",
      time: "4:30 PM - 6:30 PM",
      seatsLeft: 2,
      feeMonthly: "₹3,000 / mo",
    },
    {
      grade: "Class 11 (PCM)",
      subject: "Calculus & Mechanics Mastery",
      days: "Mon, Wed, Fri",
      time: "6:45 PM - 8:30 PM",
      seatsLeft: 4,
      feeMonthly: "₹4,200 / mo",
    },
    {
      grade: "Class 12 (Board Prep)",
      subject: "Class 12 Board Sprint & Past Papers",
      days: "Tue, Thu, Sat",
      time: "6:45 PM - 8:30 PM",
      seatsLeft: 2,
      feeMonthly: "₹4,500 / mo",
    },
    {
      grade: "Class 8 (Junior Batch)",
      subject: "Speed Mental Maths & Science Basics",
      days: "Tue, Thu, Sat",
      time: "3:15 PM - 4:15 PM",
      seatsLeft: 5,
      feeMonthly: "₹2,200 / mo",
    },
  ],
  whySoloMentor: [
    {
      title: "100% Personal Attention (Max 10 Students)",
      desc: "In an overcrowded 80-student batch, quiet kids get ignored. Here, I look at every student's notebook daily to check how they solve steps.",
    },
    {
      title: "Direct Homework & School Exam Sync",
      desc: "We solve school NCERT questions, chapter worksheets, and prepare specifically for upcoming school unit tests and prelims.",
    },
    {
      title: "Weekly Sunday Tests & Direct Parent Calls",
      desc: "Every Sunday is a 1-hour written test. I personally call parents monthly to discuss actual progress—not generic automated SMS reports.",
    },
    {
      title: "Safe, Peaceful Neighborhood Study Room",
      desc: "Air-conditioned, CCTV-monitored home classroom right next to the metro station, equipped with whiteboards and clean drinking water.",
    },
  ],
  methodology: [
    {
      step: "01",
      title: "Root-Level Concept Breakdown",
      desc: "Every theorem and formula is derived from scratch using real-life examples before jumping into problem solving.",
    },
    {
      step: "02",
      title: "Step-by-Step Notebook Checking",
      desc: "Students solve problems live on their notebooks in front of Sir. Formatting errors that cost board marks are corrected instantly.",
    },
    {
      step: "03",
      title: "Weekly Sunday Board Mock Tests",
      desc: "Every weekend features a timed exam formatted exactly according to CBSE/ICSE board marking rubrics.",
    },
    {
      step: "04",
      title: "Direct Monthly Parent Review",
      desc: "Sir directly speaks with parents once a month to review answer sheets, study discipline, and target areas for improvement.",
    },
  ],
  comparison: [
    {
      feature: "Batch Size",
      sharmaSir: "Strictly Capped at 10 Students",
      commercial: "60 to 120 Students Packed in a Hall",
    },
    {
      feature: "Who Teaches?",
      sharmaSir: "Er. Amit Sharma Personally in 100% Classes",
      commercial: "Often Rotated Between Junior Tutors & TAs",
    },
    {
      feature: "Doubt Resolution",
      sharmaSir: "Instant In-Person Clarification During Class",
      commercial: "Submit via App or Wait in Queues for 48 Hours",
    },
    {
      feature: "Notebook Checking",
      sharmaSir: "Checked Daily Page-by-Page With Red Pen",
      commercial: "Only Machine-Graded OMR / Rarely Checked",
    },
    {
      feature: "Parent Communication",
      sharmaSir: "Direct Phone Call From Sir Every Month",
      commercial: "Automated Bulk SMS / Front-Desk Staff Only",
    },
    {
      feature: "Fee Terms",
      sharmaSir: "Monthly Flexible Fee (Zero Annual Lock-in)",
      commercial: "Huge Upfront Annual Non-Refundable Fee",
    },
  ],
  toppers: [
    {
      student: "Rohan Malhotra",
      score: "98.4%",
      exam: "Class 10 CBSE 2024",
      school: "Bal Bharati Public School",
      improvement: "Jumped from 64% in Class 9 to 98% in Boards",
    },
    {
      student: "Sneha Mukherjee",
      score: "97.6%",
      exam: "Class 12 CBSE (PCM)",
      school: "DPS R.K. Puram",
      improvement: "Scored 100/100 in Mathematics",
    },
    {
      student: "Aniket Deshmukh",
      score: "96.2%",
      exam: "Class 10 ICSE 2024",
      school: "St. Xavier's High School",
      improvement: "From struggling with algebra to School Subject Topper",
    },
    {
      student: "Rhea Chawla",
      score: "95.8%",
      exam: "Class 11 Science",
      school: "Modern School Barakhamba",
      improvement: "Consistent 95%+ across all school unit tests",
    },
  ],
  reviews: [
    {
      studentOrParent: "Mrs. Meenakshi Gupta (Parent)",
      grade: "Mother of Rohan (Class 10)",
      quote:
        "Rohan was failing in Maths with 38 marks in Term 1. After 4 months with Sharma Sir, he scored 94/100 in CBSE Boards! Sir gave him confidence when he had none.",
      score: "94/100 in Maths",
    },
    {
      studentOrParent: "Harsh Vardhan (Student)",
      grade: "Class 12 CBSE Topper",
      quote:
        "The best thing about Sir is that he never gets angry when you ask a basic question 5 times. He uses real-life examples that stick in your brain.",
      score: "98% in Science Stream",
    },
    {
      studentOrParent: "Dr. R.K. Singhal (Parent)",
      grade: "Father of Priya (Class 9)",
      quote:
        "Small batch of 8 students made all the difference. Sir treats students like his own family. Highly recommended to all parents in our colony.",
      score: "Class Rank 2",
    },
  ],
  faqs: [
    {
      question: "Can my child attend trial classes before paying fees?",
      answer:
        "Yes, absolutely. We offer 2 complimentary trial classes with zero obligation. We want the student and parent to experience Sir's teaching style and comfort firsthand before making any decision.",
    },
    {
      question: "Which boards and textbooks are covered?",
      answer:
        "We specialize in CBSE and ICSE curricula. We thoroughly solve NCERT line-by-line, NCERT Exemplar, RD Sharma, RS Aggarwal, and previous 10 years' solved board question banks.",
    },
    {
      question: "What happens if a student misses a lecture due to school illness?",
      answer:
        "Sir personally conducts a 30-minute backup doubt session on Saturday mornings or provides direct revision during doubt hours so no child falls behind.",
    },
    {
      question: "Are fees collected monthly or for the full year in advance?",
      answer:
        "Fees are collected strictly on a monthly basis. We do not demand full-year advance lock-ins. You pay as long as you are 100% satisfied with your child's progress.",
    },
    {
      question: "Where is the study room located and what are visiting hours?",
      answer:
        "The classroom is located at House 24, Block C, Green Park Extension (2 minutes walk from Metro Gate 3). Parents can walk in between 3:00 PM and 4:15 PM on weekdays or call ahead to book an evening visit.",
    },
  ],
};
