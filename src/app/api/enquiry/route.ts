import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, grade, courseId, message, type } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    // In a production setup, you can easily save to Supabase / Prisma / MongoDB
    // or trigger an email via Resend/SendGrid or push to a Google Sheet / CRM webhook:
    // await db.enquiry.create({ data: { name, phone, email, grade, message } });

    console.log("[Admissions Lead Captured]:", {
      timestamp: new Date().toISOString(),
      type: type || "General Enquiry",
      name,
      phone,
      email,
      grade,
      courseId,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! Our academic counselor will call you within 2 hours.",
      leadId: "LEAD-" + Math.floor(100000 + Math.random() * 900000),
    });
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
