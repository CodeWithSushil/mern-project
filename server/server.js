import express from "express";
import session from "express-session";
import cookie from "cookie-parser";

import pool from "./config/db.js";
import router from "./routes/auth.route.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
