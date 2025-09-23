import express from "express";
import pool from "./config/db.js";

const app = express();

app.get("/", async (req, res) => {
    // res.writeHead(200, {'Content-Type':
'text/html'});
    res.send('<h1> Welcome to MERN Stack! </h1>');
});

/*
 app.get("/", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT NOW() AS now");
    res.json(rows[0]);
  } catch (err) {
    console.error("❌ Database error:", err);
    res.status(500).send("Database error");
  } finally {
    if (conn) conn.release(); // always release back to pool
  }
});
*/

app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
