export interface Tier2CenterData {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  timings: string;
  stats: {
    value: string;
    label: string;
  }[];
  teachers: {
    name: string;
    subject: string;
    qualifications: string;
    experience: string;
    image: string;
  }[];
  batches: {
    id: string;
    grade: string;
    stream: string;
    subjects: string[];
    timing: string;
    days: string;
    batchLimit: number;
    seatsLeft: number;
    fee: string;
  }[];
  results: {
    student: string;
    score: string;
    exam: string;
    school: string;
    badge: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  facilities: {
    title: string;
    description: string;
    image: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    quote: string;
    rating: number;
    studentAchievement: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const tier2Data: Tier2CenterData = {
  name: "Zenith Tutorials",
  tagline: "Quality Neighborhood Coaching for School Excellence & Boards",
  description:
    "A dedicated 3-mentor coaching center focused on Grades 8 to 12. Small batches, weekly diagnostic tests, and dedicated doubt desks to help local students top their school exams.",
  phone: "123456789",
  whatsapp: "123456789",
  email: "contact@zenithtutorials.in",
  address: "Shop 12-14, 1st Floor, City Center Plaza, Sector 15",
  timings: "Mon - Sat: 3:00 PM - 8:30 PM | Sun: 9:00 AM - 1:00 PM (Tests)",
  stats: [
    { value: "12+ Years", label: "Academic Legacy in Sector 15" },
    { value: "3,500+", label: "Students Guided to Merit" },
    { value: "94.8%", label: "Scored 1st Class & Distinctions" },
    { value: "Max 14", label: "Strict Student Batch Limit" },
  ],
  teachers: [
    {
      name: "Er. Vivek Joshi",
      subject: "Head of Mathematics",
      qualifications: "B.Tech, 12 Yrs Teaching Experience",
      experience: "Ex-Faculty FIITJEE, Specialist in CBSE & ICSE Boards with 100/100 student track record.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mrs. Shalini Saxena",
      subject: "Head of Science & Biology",
      qualifications: "M.Sc. Zoology, B.Ed (Gold Medalist)",
      experience: "10 Yrs Experience, Expert in Diagram mastery, NCERT line-by-line decoding and Class 10 Boards.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mr. Gaurav Pant",
      subject: "Head of Physics & Chemistry",
      qualifications: "M.Sc. Chemistry, 9 Yrs Teaching Experience",
      experience: "Known for step-by-step problem-solving shortcuts, numerical confidence, and practical demos.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ],
  batches: [
    {
      id: "b-1",
      grade: "Class 10",
      stream: "CBSE / ICSE Board Sprint",
      subjects: ["Maths", "Science", "English"],
      timing: "4:00 PM - 6:30 PM",
      days: "Mon, Wed, Fri",
      batchLimit: 14,
      seatsLeft: 3,
      fee: "₹4,200 / month",
    },
    {
      id: "b-2",
      grade: "Class 9",
      stream: "Foundations & School Merit",
      subjects: ["Maths", "Science"],
      timing: "4:00 PM - 6:00 PM",
      days: "Tue, Thu, Sat",
      batchLimit: 14,
      seatsLeft: 4,
      fee: "₹3,800 / month",
    },
    {
      id: "b-3",
      grade: "Class 11 & 12",
      stream: "Senior Science (PCM / PCB)",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      timing: "6:30 PM - 8:30 PM",
      days: "Mon to Sat",
      batchLimit: 16,
      seatsLeft: 2,
      fee: "₹6,500 / month",
    },
    {
      id: "b-4",
      grade: "Class 11 & 12",
      stream: "Commerce & Applied Maths",
      subjects: ["Accountancy", "Applied Maths", "Economics"],
      timing: "5:00 PM - 7:00 PM",
      days: "Tue, Thu, Sat",
      batchLimit: 12,
      seatsLeft: 3,
      fee: "₹5,000 / month",
    },
    {
      id: "b-5",
      grade: "Class 8",
      stream: "Middle School Foundation",
      subjects: ["Maths", "Science", "English"],
      timing: "3:00 PM - 4:30 PM",
      days: "Mon, Wed, Fri",
      batchLimit: 12,
      seatsLeft: 5,
      fee: "₹2,800 / month",
    },
  ],
  results: [
    {
      student: "Ishaan Mittal",
      score: "98.2%",
      exam: "Class 10 CBSE 2024",
      school: "Bal Bharati Public School",
      badge: "School 1st Rank",
    },
    {
      student: "Navya Rawat",
      score: "97.4%",
      exam: "Class 12 Boards 2024",
      school: "DPS Noida",
      badge: "100/100 in Maths",
    },
    {
      student: "Arjun Bhardwaj",
      score: "96.8%",
      exam: "Class 10 ICSE 2024",
      school: "St. Thomas School",
      badge: "Board High Scorer",
    },
    {
      student: "Kritika Roy",
      score: "95.6%",
      exam: "Class 12 Commerce",
      school: "Amity International",
      badge: "Distinction in Accounts",
    },
  ],
  features: [
    {
      title: "Strict 14-Student Batch Limit",
      description: "Unlike commercial coaching factories with 80+ students, every teacher knows each student's name, speed, and exact mistakes.",
      icon: "Users",
    },
    {
      title: "Same 3 Full-Time Subject Experts",
      description: "100% of lectures are handled by Vivek Sir, Shalini Ma'am, and Gaurav Sir. Zero junior or substitute teachers.",
      icon: "Award",
    },
    {
      title: "Weekly Sunday Board Mock Tests",
      description: "Rigorous timed tests every Sunday simulating official CBSE & ICSE board patterns with step-wise marks distribution.",
      icon: "FileCheck",
    },
    {
      title: "Dedicated 1-on-1 Doubt Counters",
      description: "Mentors are available 30 minutes before and after every class to personally solve individual school homework and tricky doubts.",
      icon: "HelpCircle",
    },
    {
      title: "Comprehensive Printed Question Banks",
      description: "Curated chapter-wise booklets including last 10 years' solved board questions and NCERT Exemplar solutions.",
      icon: "BookOpen",
    },
    {
      title: "Real-Time Parent Attendance & Test Reports",
      description: "Instant WhatsApp notifications for attendance and detailed test analysis reports delivered after every Sunday exam.",
      icon: "CheckCircle2",
    },
  ],
  facilities: [
    {
      title: "Air-Conditioned Smart Classrooms",
      description: "Soundproof, well-lit classrooms equipped with interactive display screens and ergonomic student seating.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Quiet Self-Study & Doubt Lounge",
      description: "A calm library-style environment where students can stay back after class to complete their homework.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Physical Science Demonstration Lab",
      description: "Hands-on apparatus for optics, circuit experiments, and chemistry reactions to visualize abstract concepts.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Safe CCTV-Monitored Campus",
      description: "24/7 security surveillance with safe drinking water dispensers and clean student washrooms.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    },
  ],
  testimonials: [
    {
      name: "Mrs. Anjali Malhotra",
      role: "Parent of Ishaan (Class 10, 98.2%)",
      quote: "Enrolling Ishaan at Zenith was the best decision we made. Vivek Sir and Shalini Ma'am gave him the individual attention that large coaching centers simply couldn't provide. His marks jumped from 76% in Class 9 to 98.2% in CBSE Boards!",
      rating: 5,
      studentAchievement: "School 1st Rank (Bal Bharati)",
    },
    {
      name: "Dr. Sandeep Rawat",
      role: "Parent of Navya (Class 12, 97.4%)",
      quote: "The discipline at Zenith is unmatched. The weekly Sunday test series trained my daughter to handle board exam pressure with complete composure. She scored a perfect 100 in Mathematics thanks to Vivek Sir's rigorous drills.",
      rating: 5,
      studentAchievement: "100/100 in Board Mathematics",
    },
    {
      name: "Rajesh Bhardwaj",
      role: "Parent of Arjun (Class 10 ICSE, 96.8%)",
      quote: "What impressed me most was that the teachers genuinely care. Gaurav Sir personally called me whenever Arjun missed a numerical step. It's rare to find such devoted mentors in today's commercialized tuition industry.",
      rating: 5,
      studentAchievement: "ICSE 96.8% Top Scorer",
    },
  ],
  faqs: [
    {
      question: "How does Zenith Tutorials differ from large commercial coaching institutes?",
      answer: "Large coaching centers seat 70–100 students in large lecture halls where individual questions are impossible. At Zenith, we cap every batch strictly at 14 students. 100% of classes are taught by our three founders, and every student's homework notebook is checked regularly.",
    },
    {
      question: "Are demo classes available before enrollment?",
      answer: "Yes! We encourage every student to attend 2 complimentary demo lectures and take a free baseline diagnostic assessment. This allows both the student and parents to experience our teaching methodology firsthand.",
    },
    {
      question: "How do parents track student progress and attendance?",
      answer: "We send immediate WhatsApp check-in alerts when your child enters the classroom. Following every Sunday test, parents receive a graded answer sheet with a detailed step-wise marks analysis and teacher remarks.",
    },
    {
      question: "What is your fee structure and payment mode?",
      answer: "We offer transparent monthly or quarterly fee options with zero hidden charges. All printed booklets, weekly test papers, and doubt clearing sessions are fully included in the tuition fee.",
    },
  ],
};
