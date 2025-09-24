import express from "express";
import session from "express-session";
import cookie from "cookie-parser";

import pool from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
    res.send('<h1>Welcome to MERN Stack!</h1>');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
