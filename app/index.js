import express from "express";
// We don't destructure because it's a default export
import router from "./routes/characters.js";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Star Wars API</h1>");
});

// Any requests coming to /api will be handled by the router
app.use("/api", router);

app.listen(PORT, () => {
    console.log("server running");
});

// Todo: Use 'fs' to read in our database file
