import nodemailer from "nodemailer";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendInquiryEmail = async (data: {
  firstName: string;
  lastName: string;
  company: string;
  companyAddress?: string;
  position: string;
  email: string;
  phone: string;
  serviceOfInterest?: string;
  message?: string;
}) => {
  const mailOptions = {
    from: `"KIMOEL Website Inquiry" <${process.env.GMAIL_USER}>`,
    to: "kimoel_leotagle@yahoo.com",
    replyTo: data.email,
    subject: `New Inquiry from ${data.firstName} ${data.lastName} - KIMOEL Website`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1a3a5c; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Quote Request</h1>
          <p style="color: #ccc; margin: 5px 0 0;">KIMOEL Trading and Construction Website</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 40%; border-bottom: 1px solid #eee;">Full Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Company</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Address</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.companyAddress || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Position</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.position}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Service of Interest</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.serviceOfInterest || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Message</td>
              <td style="padding: 10px;">${data.message || "No message provided"}</td>
            </tr>
          </table>
        </div>
        <div style="background: #eee; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          Submitted on ${new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" })} (Philippine Time)
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};
