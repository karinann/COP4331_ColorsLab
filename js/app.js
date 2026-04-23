// For testing purposes, we export the Express app instance. In production, you would typically start the server separately.
import express, { json } from "express";
const app = express();
app.use(json());

app.get("/colors", (req, res) => {
  res.json({ results: ["red", "blue", "green"] });
});

export default app;