export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "Middle School (6-8)" | "High School (9-10)" | "Senior Secondary (11-12)" | "Competitive Prep";
  targetGrade: string;
  badge?: string;
  tagline: string;
  description: string;
  highlights: string[];
  subjects: string[];
  batchSize: number;
  duration: string;
  schedule: string;
  mode: "Classroom (Offline)" | "Hybrid (Classroom + Online)" | "Live Interactive Online";
  feeTier: {
    monthly?: string;
    annual: string;
    discountNote?: string;
  };
  syllabusOverview: {
    title: string;
    topics: string[];
  }[];
  features: string[];
  nextBatchDate: string;
  popular?: boolean;
}

export const courses: Course[] = [
  {
    id: "cls-10-board-booster",
    slug: "class-10-board-excellence",
    title: "Class 10 Board Excellence & Foundation Program",
    category: "High School (9-10)",
    targetGrade: "Grade 10 (CBSE / ICSE)",
    badge: "Most Popular",
    popular: true,
    tagline: "Master Board Exams with 95%+ precision and lay rock-solid roots for Grade 11 STEM.",
    description:
      "A comprehensive curriculum specifically calibrated to conquer Board Exams. Includes chapter-by-chapter mastery, NCERT line-by-line breakdowns, past 10 years solved question papers, and weekly timed board simulation tests.",
    highlights: [
      "Daily 1-on-1 doubt clearing clinic",
      "Comprehensive color-coded formula books & summary notes",
      "15 Full-length Mock Board Exams with individual answer sheet audit",
      "Regular parent-teacher feedback reports on portal & SMS",
    ],
    subjects: ["Mathematics", "Science (Physics, Chem, Bio)", "Social Science", "English"],
    batchSize: 15,
    duration: "Full Academic Year (10 Months)",
    schedule: "Mon, Wed, Fri (4:30 PM - 7:30 PM)",
    mode: "Hybrid (Classroom + Online)",
    feeTier: {
      monthly: "$120 / mo",
      annual: "$1,100 / year",
      discountNote: "Early bird: 15% scholarship on registration before 30th",
    },
    syllabusOverview: [
      {
        title: "Term 1 Mastery: Core Foundations",
        topics: [
          "Real Numbers, Polynomials & Linear Equations",
          "Chemical Reactions, Acids, Bases & Salts",
          "Light: Reflection & Refraction, Human Eye",
          "Life Processes, Control & Coordination",
        ],
      },
      {
        title: "Term 2 Mastery: Advanced Concepts & Board Drills",
        topics: [
          "Quadratic Equations, AP & Coordinate Geometry",
          "Metals & Non-Metals, Carbon & its Compounds",
          "Electricity & Magnetic Effects of Current",
          "Heredity, Our Environment & Sustainable Living",
        ],
      },
      {
        title: "Sprint Revision & Pre-Board Simulation (Jan - Mar)",
        topics: [
          "10 Years Previous Year Question (PYQ) Mastery",
          "Step-marking tactics & presentation polishing",
          "Timed 3-hour mock board tests with detailed teacher feedback",
        ],
      },
    ],
    features: [
      "Physical printed study material delivered home",
      "Unlimited access to recorded class video lectures",
      "Bi-weekly performance review calls with parents",
      "Exam anxiety counseling & time management workshops",
    ],
    nextBatchDate: "Starting Next Monday",
  },
  {
    id: "cls-11-12-pcm-jee",
    slug: "class-11-12-jee-advanced-engineering",
    title: "JEE (Main & Advanced) + Board Mastery (PCM)",
    category: "Senior Secondary (11-12)",
    targetGrade: "Grade 11 & 12 (Engineering Aspirants)",
    badge: "Flagship Program",
    popular: true,
    tagline: "Intensive 2-Year Integrated Coaching to crack IIT-JEE with Top 1,000 All-India Ranks.",
    description:
      "Taught exclusively by Senior IITian faculty and national olympiad trainers. Seamlessly balances CBSE/State board preparation with rigorous problem-solving needed for JEE Advanced.",
    highlights: [
      "Faculty with 15+ years of teaching at premier national institutes",
      "Over 12,000+ curated high-difficulty multi-concept problem bank",
      "Computer-Based Test (CBT) portal mirroring actual NTA interface",
      "Dedicated personal mentor for study planning & psychological pacing",
    ],
    subjects: ["Physics", "Chemistry (Physical, Organic, Inorganic)", "Higher Mathematics"],
    batchSize: 18,
    duration: "2-Year Integrated (24 Months)",
    schedule: "Tuesday, Thursday, Saturday (4:00 PM - 8:30 PM) + Sunday Tests",
    mode: "Classroom (Offline)",
    feeTier: {
      monthly: "$190 / mo",
      annual: "$1,850 / year",
      discountNote: "Merit scholarship up to 50% via Apex Diagnostic Test",
    },
    syllabusOverview: [
      {
        title: "Class 11 Fundamentals (Mechanics, Calculus, Structure)",
        topics: [
          "Kinematics, Newton's Laws, Work-Energy-Power, Rotational Motion",
          "Atomic Structure, Chemical Bonding, Thermodynamics, Equilibrium",
          "Trigonometry, Coordinate Geometry, Complex Numbers, Permutations",
        ],
      },
      {
        title: "Class 12 Advanced Topics & Electrodynamics",
        topics: [
          "Electrostatics, Current, Magnetism, Optics & Modern Physics",
          "Organic Chemistry Reaction Mechanisms, Coordination Compounds",
          "Differential & Integral Calculus, Vectors & 3D Geometry",
        ],
      },
      {
        title: "National Ranker Test Series (Nov - May)",
        topics: [
          "40+ All-India Level CBT Mocks with AI Error Analysis",
          "Speed improvement drills & negative marking reduction strategies",
        ],
      },
    ],
    features: [
      "Offline AC Smart Classrooms with acoustic sound systems",
      "Daily practice papers (DPPs) with video explanations",
      "Night library access during exam season",
      "1-on-1 mentor check-in every Saturday",
    ],
    nextBatchDate: "Batches open for Enrollment",
  },
  {
    id: "cls-11-12-pcb-neet",
    slug: "class-11-12-neet-medical-excellence",
    title: "NEET Medical Achievers Batch (PCB)",
    category: "Senior Secondary (11-12)",
    targetGrade: "Grade 11 & 12 (Medical Aspirants)",
    badge: "High Success Rate",
    popular: false,
    tagline: "Aiming for 680+ in NEET. Comprehensive NCERT Line-by-Line Decryption & Speed Mastery.",
    description:
      "Engineered specifically for future doctors. Deep dive into Biology diagrams, Chemistry equation patterns, and Physics conceptual problem shortcuts without memorization fatigue.",
    highlights: [
      "Biology NCERT line-by-line mindmaps & memory mnemonics",
      "Daily 45-minute rapid-fire quizzes to hit sub-1-minute question speed",
      "Weekly diagnostic tests with All-India percentile rank calculation",
      "Taught by experienced Med-school trainers & Doctor guest lecturers",
    ],
    subjects: ["Biology (Botany & Zoology)", "Physics", "Chemistry"],
    batchSize: 16,
    duration: "2-Year Integrated (24 Months)",
    schedule: "Monday, Wednesday, Friday (4:00 PM - 8:30 PM) + Sunday Mocks",
    mode: "Hybrid (Classroom + Online)",
    feeTier: {
      monthly: "$180 / mo",
      annual: "$1,750 / year",
      discountNote: "Installment options available",
    },
    syllabusOverview: [
      {
        title: "Class 11 Core Medical Foundations",
        topics: [
          "Diversity in Living World, Cell Structure, Plant & Human Physiology",
          "Physical World, Units, Motion, Gravitation, Bulk Matter Properties",
          "Basic Chemical Concepts, Periodic Trends, Hydrocarbons",
        ],
      },
      {
        title: "Class 12 Advanced Medical Syllabi",
        topics: [
          "Genetics & Evolution, Biotechnology, Ecology & Environment",
          "Electromagnetism, Wave Optics, Dual Nature, Atoms & Nuclei",
          "Electrochemistry, Kinetics, Biomolecules, Polymers",
        ],
      },
      {
        title: "650+ Target Test Marathon",
        topics: [
          "Full syllabus 720-mark OMR simulation tests under strict exam conditions",
          "Dedicated error journal audit with senior instructors",
        ],
      },
    ],
    features: [
      "Full physical NCERT highlight book sets provided",
      "Digital flashcard mobile app included",
      "Doctor-led motivational mentorship monthly sessions",
    ],
    nextBatchDate: "New batch starting in 5 days",
  },
  {
    id: "cls-9-foundation",
    slug: "class-9-ste-olympiad-foundation",
    title: "Class 9 STEM & Olympiad Foundation",
    category: "High School (9-10)",
    targetGrade: "Grade 9 (CBSE / ICSE / Cambridge)",
    badge: "Skill Builder",
    popular: false,
    tagline: "Bridge the leap between middle school and advanced science & math thinking.",
    description:
      "Grade 9 is where students often struggle with increased syllabus depth. We foster critical reasoning, mathematical logic, and scientific inquiry to make learning thrilling.",
    highlights: [
      "Hands-on scientific demonstrations and interactive simulations",
      "Focus on concept visualization rather than rote learning",
      "Coverage for NTSE, IJSO, and Regional Olympiad competitions",
      "Homework support and school syllabus sync",
    ],
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    batchSize: 14,
    duration: "Full Academic Year (10 Months)",
    schedule: "Tuesday, Thursday, Saturday (5:00 PM - 7:30 PM)",
    mode: "Classroom (Offline)",
    feeTier: {
      monthly: "$110 / mo",
      annual: "$990 / year",
    },
    syllabusOverview: [
      {
        title: "Core Mathematics & Analytical Thinking",
        topics: [
          "Number Systems, Polynomials, Linear Equations in Two Variables",
          "Coordinate Geometry, Lines & Angles, Triangles, Circles",
          "Quadrilaterals, Surface Areas & Volumes, Statistics",
        ],
      },
      {
        title: "Physics & Chemistry Fundamentals",
        topics: [
          "Motion, Force and Laws of Motion, Gravitation, Work & Energy, Sound",
          "Matter in Our Surroundings, Is Matter Around Us Pure?",
          "Atoms and Molecules, Structure of the Atom",
        ],
      },
      {
        title: "Biological Foundations & Olympiad Spark",
        topics: [
          "Fundamental Unit of Life (Cell), Tissues, Improvement in Food Resources",
          "Mental Ability Test (MAT) & reasoning puzzles",
        ],
      },
    ],
    features: [
      "Fun weekly math and science quizzes with prizes",
      "Personalized feedback notes on every assignment",
      "Parent-friendly progress tracking dashboard",
    ],
    nextBatchDate: "Immediate Admissions Open",
  },
  {
    id: "cls-6-8-junior-genius",
    slug: "junior-genius-classes-6-to-8",
    title: "Junior Genius: Classes 6 to 8 Young Achievers",
    category: "Middle School (6-8)",
    targetGrade: "Grades 6, 7 & 8",
    badge: "Foundation",
    popular: false,
    tagline: "Build curiosity, fearless mental math, and strong scientific curiosity early.",
    description:
      "Transform young learners from passive listeners into active thinkers. Small friendly batches ensure each child develops genuine confidence in numbers and facts.",
    highlights: [
      "Speed Vedic math techniques for rapid mental calculations",
      "Interactive digital whiteboard sessions and storytelling science",
      "Gentle habit-forming homework routines without stress",
      "Public speaking & science project presentation days",
    ],
    subjects: ["Mathematics", "Science & Technology", "English Communication"],
    batchSize: 12,
    duration: "Full Academic Year",
    schedule: "Monday, Wednesday, Friday (4:00 PM - 6:00 PM)",
    mode: "Hybrid (Classroom + Online)",
    feeTier: {
      monthly: "$95 / mo",
      annual: "$850 / year",
    },
    syllabusOverview: [
      {
        title: "Mental Math & Problem Solving",
        topics: [
          "Fractions, Decimals, Integers, Algebra basics",
          "Ratio, Proportion, Percentage & Geometry fundamentals",
        ],
      },
      {
        title: "Science In Everyday Life",
        topics: [
          "Nutrition in Plants & Animals, Heat, Acids & Bases",
          "Physical & Chemical Changes, Weather, Motion & Time, Electric Current",
        ],
      },
    ],
    features: [
      "Gamified learning modules",
      "Friendly mentors who know how to engage kids",
      "Monthly parent consultation meetings",
    ],
    nextBatchDate: "New batch starting this week",
  },
  {
    id: "cls-crash-board-fastrack",
    slug: "fastrack-board-exam-crash-course",
    title: "FastTrack 90-Day Board Exam Crash Course",
    category: "Competitive Prep",
    targetGrade: "Grade 10 & 12 Board Candidates",
    badge: "Last-Minute Booster",
    popular: false,
    tagline: "High-yield revision to convert average grades into 90%+ distinctions in 90 days.",
    description:
      "Designed for students seeking an aggressive, focused revision regime prior to the board exams. We filter out the noise and drill the highest-probability exam questions.",
    highlights: [
      "Super-concentrated 90 hours of high-yield lectures",
      "100 'Sure-Shot' exam questions per subject predicted by our veteran faculty",
      "Strict answer writing drill sessions with red-pen marking",
      "Formula cheat sheets and ready-to-memorize flowcharts",
    ],
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    batchSize: 20,
    duration: "90 Days Intensive",
    schedule: "Daily Monday through Saturday (6:00 PM - 8:30 PM)",
    mode: "Hybrid (Classroom + Online)",
    feeTier: {
      annual: "$490 total",
      discountNote: "One-time all-inclusive fee including test series",
    },
    syllabusOverview: [
      {
        title: "Phase 1 (Days 1 - 30): Rapid Concept Recall",
        topics: [
          "Complete syllabus rapid recap with emphasis on 80/20 high-weightage chapters",
          "Concept error traps and commonly lost marks analysis",
        ],
      },
      {
        title: "Phase 2 (Days 31 - 60): Question-Answer Drilling",
        topics: [
          "Past 10 years board paper solutions live on board",
          "Assertion-Reason & Case-Based Question masterclasses",
        ],
      },
      {
        title: "Phase 3 (Days 61 - 90): Full Board Simulation",
        topics: [
          "8 Full-length mock board exams evaluated with official marking schemes",
        ],
      },
    ],
    features: [
      "Dedicated doubt desk active until exam morning",
      "Printable PDF summaries for rapid last-day revision",
    ],
    nextBatchDate: "Registrations closing soon",
  },
];
