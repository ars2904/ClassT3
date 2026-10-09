export interface StudyMaterial {
  id: string;
  title: string;
  category: "Class 10" | "Class 12" | "JEE Prep" | "NEET Prep" | "Foundation (6-9)";
  subject: string;
  fileType: "PDF" | "Formula Sheet" | "Question Bank" | "Mindmap";
  fileSize: string;
  downloadsCount: number;
  description: string;
  badge?: string;
}

export const studyMaterials: StudyMaterial[] = [
  {
    id: "mat-1",
    title: "Class 10 Physics: Complete Electricity & Light Formula Sheet",
    category: "Class 10",
    subject: "Science / Physics",
    fileType: "Formula Sheet",
    fileSize: "2.4 MB",
    downloadsCount: 14200,
    description: "All ray diagrams, sign conventions, mirror/lens formulas, and circuit rules in a crisp 4-page printable color cheat sheet.",
    badge: "Most Downloaded",
  },
  {
    id: "mat-2",
    title: "Class 12 Calculus: High-Yield Integration & Differential Cheatbook",
    category: "Class 12",
    subject: "Mathematics",
    fileType: "Formula Sheet",
    fileSize: "3.1 MB",
    downloadsCount: 9800,
    description: "Standard substitution tricks, definite integral properties, and 25 must-solve board questions with step marking.",
    badge: "Board Essential",
  },
  {
    id: "mat-3",
    title: "NEET Biology: 100 High-Frequency NCERT Diagrams & Labellings",
    category: "NEET Prep",
    subject: "Biology",
    fileType: "Mindmap",
    fileSize: "5.6 MB",
    downloadsCount: 18400,
    description: "Every diagram from NCERT Botany & Zoology from which questions have appeared in the last 15 years.",
    badge: "NEET Booster",
  },
  {
    id: "mat-4",
    title: "JEE Main 2025: Physics Mechanics 50 Sure-Shot Question Bank",
    category: "JEE Prep",
    subject: "Physics",
    fileType: "Question Bank",
    fileSize: "4.8 MB",
    downloadsCount: 11200,
    description: "Curated multi-concept problems covering Newton's Laws, Rotational Motion, and Work-Energy with detailed step-by-step video solutions link.",
    badge: "IITian Curated",
  },
  {
    id: "mat-5",
    title: "Class 10 Mathematics: 10-Year Solved Board Papers (Chapter-Wise)",
    category: "Class 10",
    subject: "Mathematics",
    fileType: "Question Bank",
    fileSize: "7.2 MB",
    downloadsCount: 16500,
    description: "Chapter-wise sorted questions from 2014 to 2024 with official CBSE answer-key marking scheme explanations.",
    badge: "Top Rated",
  },
  {
    id: "mat-6",
    title: "Foundation Class 9: Science Laws & Chemical Reaction Flashcards",
    category: "Foundation (6-9)",
    subject: "Science",
    fileType: "Mindmap",
    fileSize: "2.1 MB",
    downloadsCount: 6700,
    description: "Quick revision mindmaps for Atoms, Molecules, Motion laws, and Cell structures for Olympiads and school finals.",
  },
];
