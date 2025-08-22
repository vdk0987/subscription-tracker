import { Router } from "express";

const subRouter = Router();

subRouter.get("/", (req, res) => res.send({ title: "GET all subscriptions" }));
subRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscriptions details" })
);
subRouter.post("/", (req, res) =>
  res.send({ title: "CREATE new subscriptions" })
);
subRouter.put("/:id", (req, res) => res.send("UPDATE subscription"));
subRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE susbcription" })
);
subRouter.get("/user/:id", (req, res) =>
  res.send({ title: "GET all user subscriptions" })
);
subRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);
subRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subRouter;
