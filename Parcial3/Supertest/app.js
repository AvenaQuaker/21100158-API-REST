const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.status(200).json({ message: "Jest > Chai" });
});

const PORT = process.env.PORT || 0;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
