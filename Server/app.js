const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", require("./routes"));

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://arpitdhaduk:937299@arpit.6njihpv.mongodb.net/?retryWrites=true&w=majority&appName=arpit",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
