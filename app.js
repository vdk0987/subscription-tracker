import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/subscriptions", subRouter);

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(PORT, async () => {
  console.log(`server running at port ${PORT}`);
  await connectToDatabase();
});

export default app;
