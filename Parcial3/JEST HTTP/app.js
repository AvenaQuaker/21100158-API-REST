import express from "express";

const app = express();
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.status(200).json({ message: "Hello, world!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
