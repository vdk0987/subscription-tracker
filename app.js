import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(PORT, () => {
  console.log(`server running at port $(PORT)`);
});

export default app;
