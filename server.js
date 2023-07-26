const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to Database
connectDB();

// Initialize Middleware
app.use(express.json({ strict: false }));

// Define Routes
app.use("/api/submissions", require("./routes/api/submissions"));

// Serve Static assets in production
if (process.env.NODE_ENV === "production") {
  // Set Static Folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
