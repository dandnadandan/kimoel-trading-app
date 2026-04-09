# Backend Email Submission + Quote Request Form Setup Guide

## 🎯 What We've Implemented

### ✅ **Backend Server (Express + Nodemailer)**
- **File:** `server/index.ts` - Main Express server
- **File:** `server/mailer.ts` - Gmail SMTP configuration
- **File:** `server/routes/inquire.ts` - API endpoint for form submissions
- **Endpoint:** `POST /api/inquire` - Handles quote request submissions

### ✅ **Updated Quote Request Form Modal**
- **File:** `src/components/QuoteRequestForm.tsx` - Complete form with validation
- **Features:** React Hook Form + Zod validation, loading states, error handling
- **Integration:** Connected to backend API instead of EmailJS

### ✅ **Service Detail Page Integration**
- **File:** `src/pages/ServiceDetail.tsx` - Added "Request a Quote" button
- **Features:** Dual button approach (Quote Form + Quick Email)

---

## 🚀 **QUICK START**

### **Step 1: Set up Gmail App Password**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. **Enable 2-Step Verification** (required for App Passwords)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" as the app
5. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### **Step 2: Configure Environment**
Edit `.env` file:
```env
# Replace with your actual Gmail and app password
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### **Step 3: Start Both Servers**
```bash
# Start both frontend and backend together
npm run dev:all

# OR start them separately:
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend  
npm run server
```

### **Step 4: Test the Implementation**
1. Visit: http://localhost:8080
2. Click any service card → Service Detail page
3. Click "Request a Quote" → Fill out the form
4. Submit → Check your company email: `kimoel_leotagle@yahoo.com`

---

## 📋 **FORM FIELDS & VALIDATION**

### **Required Fields (*)**
- ✅ First Name & Last Name (side-by-side)
- ✅ Company / Organization  
- ✅ Position & Department (combined field)
- ✅ Email Address & Confirm Email (must match)
- ✅ Phone Number

### **Optional Fields**
- ⭕ Company / Organization Address
- ⭕ Service of Interest (pre-filled if coming from service page)
- ⭕ Message / Special Requirements

### **Validation Rules**
- Names: Minimum 2 characters
- Email: Valid email format + must match confirmation
- Phone: Minimum 10 characters
- Real-time validation with inline error messages

---

## 🎨 **UI/UX Features**

### **Modal Design**
- ✅ Clean white modal, max-width: 600px
- ✅ Framer Motion fade + slide-up animation
- ✅ Scrollable if content overflows
- ✅ Professional styling with brand colors

### **Form Behavior**
- ✅ Loading spinner during submission
- ✅ Success message: "Thank you! Your inquiry has been sent. We'll get back to you within 24 hours."
- ✅ Error message: "Something went wrong. Please try again or contact us directly."
- ✅ Auto-close and reset after 3 seconds on success
- ✅ Required field indicators with red asterisks (*)

### **Email Template**
- ✅ Professional HTML email design
- ✅ KIMOEL branding (blue gradient header)
- ✅ All form data formatted in clean table
- ✅ Company logo and contact info
- ✅ Timestamp and submission source

---

## 🔧 **TECHNICAL DETAILS**

### **Backend API**
- **Port:** 3001 (configurable via PORT env var)
- **CORS:** Enabled for localhost:5173 and localhost:8080
- **Health Check:** http://localhost:3001/health

### **Frontend Integration**
- **API Call:** `fetch('http://localhost:3001/api/inquire')`
- **Error Handling:** Try/catch with user-friendly messages
- **Form State:** Loading, success, error states

### **Dependencies Added**
```json
{
  "express": "^4.18.2",
  "nodemailer": "^6.9.7", 
  "dotenv": "^16.3.1",
  "cors": "^2.8.5",
  "@types/express": "^4.17.21",
  "@types/nodemailer": "^6.4.14",
  "@types/cors": "^2.8.17",
  "ts-node": "^10.9.1",
  "tsx": "^4.6.2",
  "concurrently": "^8.2.2"
}
```

---

## 🚨 **TROUBLESHOOTING**

### **Common Issues**

#### **"EAUTH" Authentication Error**
- **Cause:** Invalid Gmail credentials
- **Fix:** 
  1. Ensure 2-Step Verification is enabled
  2. Generate a new App Password
  3. Copy the 16-character password exactly (no spaces)
  4. Update `.env` file

#### **CORS Errors**
- **Cause:** Frontend trying to connect from different port
- **Fix:** Backend already configured for localhost:5173 and localhost:8080

#### **Form Not Submitting**
- **Cause:** Backend server not running
- **Fix:** Run `npm run server` or `npm run dev:all`

#### **Email Not Received**
- **Cause:** 
  1. Check spam folder
  2. Verify Gmail credentials
  3. Check server logs for errors

---

## 📱 **MOBILE RESPONSIVENESS**

- ✅ Responsive grid layouts (1 column on mobile, 2 on tablet, 3+ on desktop)
- ✅ Touch-friendly form inputs
- ✅ Proper modal sizing on small screens
- ✅ Accessible form labels and ARIA attributes

---

## 🔄 **DUAL APPROACH BENEFITS**

### **Quote Request Form (Backend)**
- ✅ Professional data collection
- ✅ Structured information capture
- ✅ Internal email notifications
- ✅ Better lead qualification

### **Quick Email (Gmail Compose)**
- ✅ Immediate access to email client
- ✅ Familiar user experience
- ✅ No form validation barriers
- ✅ Works even if backend is down

---

## 🎯 **NEXT STEPS**

1. **Set up Gmail App Password** (most important!)
2. **Test the complete flow** on your local machine
3. **Check email delivery** to kimoel_leotagle@yahoo.com
4. **Deploy backend** when ready for production
5. **Monitor email deliverability** and spam filters

---

## 📞 **SUPPORT**

If you encounter any issues:

1. **Check console logs** in browser dev tools
2. **Check server logs** in terminal running backend
3. **Verify Gmail credentials** are correct
4. **Test health endpoint:** http://localhost:3001/health

The implementation is complete and ready for testing! 🚀
