import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "user-testimonials.json");

function getTestimonials() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(fileData);
    }
  } catch (err) {
    console.error("Error reading testimonials:", err);
  }
  return [];
}

function saveTestimonials(testimonials: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(testimonials, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving testimonials:", err);
  }
}

export async function GET() {
  const testimonials = getTestimonials();
  return NextResponse.json(testimonials);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { author, role, studentName, gradeOrExam, rating, highlight, content, phone } = body;

    if (!author || !content || !gradeOrExam) {
      return NextResponse.json(
        { success: false, message: "Please provide your name, class/exam, and feedback." },
        { status: 400 }
      );
    }

    const defaultAvatars = [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    ];

    const randomAvatar = defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];

    const newReview = {
      id: "rev-" + Date.now(),
      author,
      role: role || "Parent",
      studentName: studentName || "",
      gradeOrExam,
      rating: Number(rating) || 5,
      highlight: highlight || "Great learning experience at Apex",
      content,
      image: randomAvatar,
      createdAt: "Just now",
      verified: true,
      phone: phone || "",
    };

    const currentList = getTestimonials();
    // Add new review at the very top
    const updatedList = [newReview, ...currentList];
    saveTestimonials(updatedList);

    console.log("[New Review Submitted on Website]:", {
      author,
      gradeOrExam,
      rating,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your review has been submitted and posted successfully.",
      testimonial: newReview,
    });
  } catch (error) {
    console.error("Testimonial API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to post review. Please try again." },
      { status: 500 }
    );
  }
}
