import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "GET all user" }));

userRouter.get("/:id", (req, res) => res.send({ title: "GET user details" }));
