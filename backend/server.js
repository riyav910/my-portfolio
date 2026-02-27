import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors({
  origin: "*", // later you can restrict to your frontend domain
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // temporary sender
            to: ["riya.verma7202@gmail.com"], // your email
            subject: `New message from ${name}`,
            reply_to: email,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
    <h2 style="color:#06b6d4;">New Portfolio Message</h2>
    
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <div style="margin-top: 10px; padding: 10px; background:#f1f5f9; border-radius:8px;">
      ${message}
    </div>
  </div>
      `,
        });

        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error sending message",
        });
    }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});