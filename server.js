// Instantiate enviroment variables
require("dotenv").config();

// These are Next.js dependencies required to run both the front_end and back_end on the same PORT
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Express dependency
const express = require("express");

// MongoDB modelling tool
const mongoose = require("mongoose");

app.prepare().then(() => {
  // Instantiate express
  const server = express();

  // Connect to your database
  const MONGO_URI = process.env.MONGO_URI; // Get MongoDB database URI from your enviroment variables
  mongoose.connect(
    MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log("Database connected successfully!")
  );

  // Apply middlewares
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // API Routes - Backend Routes

  // FOR EXAMPLE
  // GET req to http://localhost:3000/api/mockdata and expects a json response from the server
  // This route handles the request and sends back a response (JSON)
  server.get("/api/mockdata", async (req, res, next) => {
    const mockData = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };

    // Send response back to the client
    res.json({ mockData });
  });

  // You can also reference a request handler from a seperate file
  // Catch and Handle Consumer Requests
  // /api/customer/
  server.use("/api/consumer", require("./BackendFiles/Routes/consumer"));

  // Catch and Handle Farmer Requests
  // /api/farmer/
  server.use("/api/farmer", require("./BackendFiles/Routes/farmer"));

  // Client_side route
  // Catches all client side GET request and renders Views appropriately
  // Note that this route should not be mutated for any reason... It is meant to remain like this always
  // Any code for client_side is written inside the "client_side"folders in the root dir.
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Asisgn a PORT to lisen to incoming requests
  const PORT = parseInt(process.env.PORT, 10) || 3000;

  // Start your server
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(` Ready on http://localhost:${PORT}`);
  });
});
