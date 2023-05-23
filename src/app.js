// Import required modules
const express = require("express");
const routesList = require("../routes/routesList");

// Create an instance of the Express application
const app = express();

// Set up middleware to parse JSON bodies
app.use(express.json());

// Define the request handlers
app.use("/", routesList);

// Define a default handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Start the server
app.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
