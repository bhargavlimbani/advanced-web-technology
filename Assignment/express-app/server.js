
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdb"
});

db.connect(err => {
    if (err) throw err;
    console.log("Database Connected");
});

// Insert

app.post("/addUser", (req, res) => {
    const { name, email } = req.body;

    db.query("INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("User Added");
    });
});

// Read
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

// Update
app.put("/updateUser/:id", (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;

    db.query("UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, id],
    (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("User Updated");
    });
});

// Delete
app.delete("/deleteUser/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM users WHERE id=?",
    [id],
    (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("User Deleted");
    });
});

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});