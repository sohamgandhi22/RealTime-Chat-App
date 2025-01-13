import express  from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json({ limit: '10mb' })); // Increase limit to 10MB

// Middleware to parse URL-encoded data (if needed)
app.use(express.urlencoded({ limit: '10mb', extended: true })); // For URL-encoded payloads
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})
);

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

server.listen(PORT, ()=>{
    console.log("Server Started at PORT:"+PORT);
    connectDB();
})