// const express = require("express");
import express from "express";

import path from "path";

import authroutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser())
const PORT = ENV.PORT || 3000;
const __dirname = path.resolve();

app.use("/api/auth", authroutes);
app.use("/api/message", messageRoutes);

//make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);
 connectDB()})
