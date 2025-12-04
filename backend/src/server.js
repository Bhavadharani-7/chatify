// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authroutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
