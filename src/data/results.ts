export interface Achiever {
  id: string;
  name: string;
  score: string;
  rank?: string;
  exam: string;
  school?: string;
  year: string;
  image: string;
  quote: string;
  badge: string;
  improvement?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: "Student" | "Parent" | "Alumni";
  studentName?: string;
  gradeOrExam: string;
  content: string;
  rating: number;
  image: string;
  highlight: string;
}

export const achievers: Achiever[] = [
  {
    id: "ach-1",
    name: "Aarav Sharma",
    score: "99.2%",
    rank: "State Rank 4",
    exam: "CBSE Class 12 Boards",
    school: "DPS R.K. Puram",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "The personalized doubt clinics at Apex completely changed my approach to Physics and Math. I felt 100% in control during the board exam.",
    badge: "All-India Achiever",
    improvement: "From 78% in Prelims to 99.2% in Final Boards",
  },
  {
    id: "ach-2",
    name: "Rhea Sen",
    score: "AIR 284",
    rank: "NEET Top 300",
    exam: "NEET (Medical 2024)",
    school: "St. Xavier's Senior School",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    quote: "Biology NCERT line-by-line mastery and the Sunday OMR mocks made the actual exam feel like just another practice test at the institute.",
    badge: "AIIMS New Delhi Admit",
    improvement: "Score: 695 / 720",
  },
  {
    id: "ach-3",
    name: "Kabir Malhotra",
    score: "98.8%",
    rank: "School Topper",
    exam: "ICSE Class 10 Boards",
    school: "The Modern School",
    year: "2024",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    quote: "Small batch size was the biggest advantage. I never felt shy asking 'silly' questions because the teachers treat every question with respect.",
    badge: "100/100 in Math & Science",
    improvement: "Consistent 98%+ track record",
  },
  {
    id: "ach-4",
    name: "Ananya Deshmukh",
    score: "AIR 412",
    rank: "JEE Advanced 2024",
    exam: "JEE Advanced (IIT Bombay Admit)",
    school: "Cambridge School",
    year: "2024",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    quote: "The problem-solving frameworks taught by Sir made multi-concept mechanics problems feel intuitive. Best decision my parents made for me.",
    badge: "IIT Bombay CSE",
    improvement: "Physics: 99.8th percentile",
  },
  {
    id: "ach-5",
    name: "Devansh Patel",
    score: "97.6%",
    rank: "Distinction Holder",
    exam: "CBSE Class 10 Boards",
    school: "Ryan International School",
    year: "2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "I used to suffer from terrible exam anxiety. The regular timed tests and mentor counseling built my stamina and calm focus.",
    badge: "Math Olympiad Gold",
    improvement: "Jumped from Grade C to A* in 6 months",
  },
  {
    id: "ach-6",
    name: "Meera Nair",
    score: "98.4%",
    rank: "Commerce Topper",
    exam: "Class 12 Boards",
    school: "National Public School",
    year: "2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    quote: "Concept clarity, structured revision calendars, and teachers who genuinely check on your wellbeing. You won't find this anywhere else.",
    badge: "SRCC College Admit",
    improvement: "100/100 in Applied Mathematics",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    author: "Dr. Sandeep Malhotra",
    role: "Parent",
    studentName: "Kabir Malhotra (Class 10 - 98.8%)",
    gradeOrExam: "Parent of Class 10 Topper",
    content:
      "As a working parent, my biggest worry was whether Kabir was getting individual attention. The weekly progress updates, biometric attendance alerts, and dedicated doubt teachers gave us immense peace of mind. Truly exceptional faculty.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    highlight: "Exceptional individual attention and parent transparency",
  },
  {
    id: "t-2",
    author: "Pooja & Vikram Sharma",
    role: "Parent",
    studentName: "Aarav Sharma (Class 12 - 99.2%)",
    gradeOrExam: "Parents of Class 12 State Ranker",
    content:
      "Other commercial coaching factories put 100 students in one room where back-benchers are ignored. Here, the batch size was strictly 15 students. The teachers knew my son's exact weaknesses and worked on them weekly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    highlight: "Strict small batches unlike overcrowded mass coaching",
  },
  {
    id: "t-3",
    author: "Rhea Sen",
    role: "Student",
    gradeOrExam: "NEET AIR 284 (Now at AIIMS)",
    content:
      "The formula books and biology diagrams provided by Apex are gold. Whenever I was confused with tough physics mechanics problems, Sir would sit with me after class until I solved it on the board myself.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    highlight: "Dedicated doubt clearing that never leaves you behind",
  },
  {
    id: "t-4",
    author: "Sunita Deshmukh",
    role: "Parent",
    studentName: "Ananya Deshmukh (IIT Bombay)",
    gradeOrExam: "Parent of JEE Advanced Achiever",
    content:
      "The institute doesn't just teach syllabus, they build character and mental toughness. My daughter was always inspired by her mentors. I recommend them to every parent in our school circle.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    highlight: "Builds real confidence and mental resilience",
  },
];
