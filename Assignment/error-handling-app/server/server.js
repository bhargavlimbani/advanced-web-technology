const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* Normal API */
app.get("/api/data", (req, res) => {
    res.json({
        success: true,
        message: "API is working"
    });
});

/* Error API */
app.get("/api/error", (req, res, next) => {
    try {
        throw new Error("This is a test error from server");
    } catch (err) {
        next(err);
    }
});

/* Global Error Handler */
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});