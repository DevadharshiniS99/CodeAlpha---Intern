const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

console.log("******** MY SERVER ********");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const translateRoutes = require("./routes/translate");
app.use("/translate", translateRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Server Working"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

setInterval(() => {
    console.log("Server Alive...");
}, 5000);