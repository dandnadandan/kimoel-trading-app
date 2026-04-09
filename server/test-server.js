import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:8080", "http://localhost:8081", "http://localhost:3000"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept"],
  credentials: true
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.post("/api/inquire", (req, res) => {
  console.log("=== FORM SUBMISSION RECEIVED ===");
  console.log("Body:", JSON.stringify(req.body, null, 2));
  
  res.status(200).json({
    success: true,
    message: "Test server received the form!",
  });
});

const server = app.listen(PORT, () => {
  console.log(`✅ Test server running on port ${PORT}`);
});

// Keep the server running
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
