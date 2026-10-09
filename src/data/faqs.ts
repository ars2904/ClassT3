export interface FAQ {
  question: string;
  answer: string;
  category: "Admissions & Demo" | "Teaching & Doubts" | "Tests & Reporting" | "Fees & Policies";
}

export const faqs: FAQ[] = [
  {
    category: "Admissions & Demo",
    question: "Can my child attend a Free Demo Class before enrolling?",
    answer:
      "Yes, absolutely! We encourage every prospective student and parent to attend 2 complimentary demo sessions. This lets the student experience our classroom environment, teacher pedagogy, and personal attention before any financial commitment is made.",
  },
  {
    category: "Teaching & Doubts",
    question: "What is your maximum batch size?",
    answer:
      "We strictly cap our classroom batches at 12 to 18 students depending on the grade level. Unlike mass coaching institutes with 80-100 students in an auditorium, our teachers know each student by name, monitor their notebooks, and address individual learning pace.",
  },
  {
    category: "Teaching & Doubts",
    question: "How do you handle doubt solving if a student is hesitant in class?",
    answer:
      "We run dedicated daily 1-on-1 Doubt Clinics for 45 minutes before and after regular lectures. Students can sit individually with subject teachers or senior teaching assistants to solve any question from school homework, board papers, or competitive materials.",
  },
  {
    category: "Teaching & Doubts",
    question: "What happens if a student misses a class due to illness or school events?",
    answer:
      "All classroom lectures are recorded in high-definition smart classrooms. Missed lectures are instantly made available in the student portal, accompanied by teacher lecture notes and practice worksheets. Makeup sessions are also arranged with teaching assistants.",
  },
  {
    category: "Tests & Reporting",
    question: "How often are tests conducted, and how do parents stay informed?",
    answer:
      "We conduct weekly topic tests every Saturday/Sunday and monthly cumulative mock examinations. Test reports, along with chapter-wise strength & weakness analysis, are sent via SMS and published to the Parent Portal within 24 hours of paper grading.",
  },
  {
    category: "Tests & Reporting",
    question: "Do you also prepare students for their school exams or only Board/Competitive tests?",
    answer:
      "Our curriculum runs completely in parallel with the school academic calendar. Prior to school unit tests, half-yearly exams, and prelims, we run focused revision modules to ensure students score top marks in their school report cards as well.",
  },
  {
    category: "Fees & Policies",
    question: "Are there installment payment options or merit scholarships?",
    answer:
      "Yes. We offer flexible quarterly and monthly installment options. In addition, students scoring 90%+ in their previous school exams or qualifying our Apex Diagnostic Scholarship Test are eligible for up to a 50% tuition fee waiver.",
  },
  {
    category: "Fees & Policies",
    question: "Do you offer offline classroom, online, or hybrid modes?",
    answer:
      "We offer all three. Students can attend physical classes in our tech-enabled AC classrooms, join live interactive streaming from home, or switch between both according to convenience.",
  },
];
