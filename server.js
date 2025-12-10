const express = require("express");
const cors = require("cors");
const path = require("path");

const chatbot = require("./routes/chatbot");
const currency = require("./routes/currency");
const translate = require("./routes/translate");
const emergency = require("./routes/emergency");
const maps = require("./routes/maps");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/chatbot", chatbot);
app.use("/currency", currency);
app.use("/translate", translate);
app.use("/emergency", emergency);
app.use("/maps", maps);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => console.log("Server running on port 3000"));
