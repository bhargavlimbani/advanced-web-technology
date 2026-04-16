const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // add your password
  database: "myapp"
});

db.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("MySQL Connected ");
});

// 🔹 GET USERS
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// 🔹 ADD USER
app.post("/users", (req, res) => {
  const { name, email, number } = req.body;

  db.query(
    "INSERT INTO users (name, email, number) VALUES (?, ?, ?)",
    [name, email, number],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User Added " });
    }
  );
});

// 🔹 UPDATE USER
app.put("/users/:id", (req, res) => {
  const { name, email, number } = req.body;
  const id = req.params.id;

  db.query(
    "UPDATE users SET name=?, email=?, number=? WHERE id=?",
    [name, email, number, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "User Updated " });
    }
  );
});

// 🔹 DELETE USER (FIXED)
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM users WHERE id=?", [id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({ message: "User Deleted ✅" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 ");
});