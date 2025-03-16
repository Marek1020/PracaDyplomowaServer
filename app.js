const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Import routerów
const indexRouterV1 = require("./routes/v1/index.js");

// Użycie routerów
app.use("/v1", indexRouterV1);

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
