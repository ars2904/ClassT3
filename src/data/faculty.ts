export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subject: string;
  qualifications: string;
  experienceYears: number;
  bio: string;
  achievements: string[];
  image: string;
  quote: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Er. Rajesh Verma",
    role: "Founder & Head of Physics",
    subject: "Physics (Class 11, 12 & JEE/NEET)",
    qualifications: "B.Tech, IIT Delhi (Ex-Senior Faculty, Kota)",
    experienceYears: 18,
    bio: "Passionate about demystifying rotational dynamics and electromagnetism. Has mentored over 40+ Top 100 All-India rankers across his 18-year career.",
    achievements: [
      "Mentored AIR 4, AIR 17 in JEE Advanced",
      "Author of 'Conceptual Physics for High Schoolers'",
      "Guest speaker at National Physics Teachers Forum",
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    quote: "Physics is not math with words; it is the poetry of reality. Once you visualize the forces, solving the equation is effortless.",
  },
  {
    id: "fac-2",
    name: "Dr. Suniti Mukherjee",
    role: "Academic Dean & Head of Chemistry",
    subject: "Chemistry (Physical, Organic & Inorganic)",
    qualifications: "Ph.D. in Organic Chemistry, Delhi University",
    experienceYears: 15,
    bio: "Renowned for making reaction mechanisms intuitive through visual electron-flow diagrams. Believes organic chemistry is a logical language, not rote memorization.",
    achievements: [
      "Published 12 research papers in international journals",
      "Coached 100+ students scoring 98%+ in Chemistry Boards",
      "Recipient of National Science Educator Award 2021",
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    quote: "When students stop memorizing and start understanding why bonds break and form, chemistry becomes their highest-scoring subject.",
  },
  {
    id: "fac-3",
    name: "Prof. Arvind Ramanathan",
    role: "Head of Mathematics",
    subject: "Mathematics (Class 9 - 12 & Olympiads)",
    qualifications: "M.Sc. Applied Mathematics, Chennai Mathematical Institute",
    experienceYears: 14,
    bio: "Specializes in eliminating math anxiety. Known for his 5-second mental verification techniques and systematic proofs that turn struggling students into toppers.",
    achievements: [
      "Regional Math Olympiad (RMO) chief selector 2019-2022",
      "Over 92% of his students score above 90 in Board Mathematics",
      "Creator of the 'Visual Calculus & Coordinate Mastery' workbook series",
    ],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    quote: "Math is like a gym for the mind. Every tough problem you solve permanently expands your mental horsepower.",
  },
  {
    id: "fac-4",
    name: "Dr. Nivedita Sen",
    role: "Senior Faculty & Medical Mentor",
    subject: "Biology (Zoology & Botany for NEET)",
    qualifications: "MBBS, M.D. (Gold Medalist)",
    experienceYears: 11,
    bio: "Practicing medical specialist and passionate educator. Provides real clinical context to human physiology and genetics, giving students unmatched conceptual recall.",
    achievements: [
      "Mentored 60+ students currently studying in AIIMS & Top Gov Med Colleges",
      "Curator of the High-Yield 3,000 NCERT Biology Question Bank",
    ],
    image: "https://images.unsplash.com/photo-1594824813589-983350172909?auto=format&fit=crop&w=500&q=80",
    quote: "In NEET biology, precision is everything. 360/360 isn't a dream—it is an engineered outcome of structured NCERT drilling.",
  },
  {
    id: "fac-5",
    name: "Pooja Chawla",
    role: "Head of Foundation Programs (Grades 6-8)",
    subject: "Middle School Science & Math",
    qualifications: "B.Ed, M.Sc. Physics (Gold Medalist)",
    experienceYears: 10,
    bio: "Specialist in early teenage pedagogy. Creates enthusiastic, inquisitive learners through STEM hands-on experiments and gamified learning.",
    achievements: [
      "Certified Child Pedagogy & STEM Coach",
      "Trained 3,000+ middle schoolers into fearless math enthusiasts",
    ],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    quote: "If a child cannot learn the way we teach, maybe we should teach the way they learn.",
  },
];
