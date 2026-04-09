import { Router, Request, Response } from "express";
import { sendInquiryEmail } from "../mailer";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  console.log("=== FORM SUBMISSION RECEIVED ===");
  console.log("Body:", JSON.stringify(req.body, null, 2));
  
  const {
    firstName,
    lastName,
    company,
    companyAddress,
    position,
    email,
    confirmEmail,
    phone,
    serviceOfInterest,
    message,
  } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !company || !position || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }

  // Validate email match
  if (email !== confirmEmail) {
    return res.status(400).json({
      success: false,
      message: "Email addresses do not match.",
    });
  }

  try {
    console.log("=== SENDING EMAIL ===");
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD);
    
    await sendInquiryEmail({
      firstName,
      lastName,
      company,
      companyAddress,
      position,
      email,
      phone,
      serviceOfInterest,
      message,
    });

    console.log("=== EMAIL SENT SUCCESSFULLY ===");
    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully!",
    });

  } catch (error: any) {
    console.error("=== EMAIL ERROR ===");
    console.error("Error:", error.message);
    console.error("Code:", error.code);
    console.error("Full error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
