const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "awtstudent_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// Home page - Show students
app.get("/", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) throw err;
    res.render("index", { students: results });
  });
});

// Add student page
app.get("/add", (req, res) => {
  res.render("add");
});

// Insert student
app.post("/add", (req, res) => {
  const { name, email, course } = req.body;
  db.query(
    "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
    [name, email, course],
    (err) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

// Delete student
app.get("/delete/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

// Edit page
app.get("/edit/:id", (req, res) => {
  db.query("SELECT * FROM students WHERE id = ?", [req.params.id], (err, results) => {
    if (err) throw err;
    res.render("edit", { student: results[0] });
  });
});

// Update student
app.post("/update/:id", (req, res) => {
  const { name, email, course } = req.body;
  db.query(
    "UPDATE students SET name=?, email=?, course=? WHERE id=?",
    [name, email, course, req.params.id],
    (err) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});