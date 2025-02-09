import { Router } from "express";
const authRouter = Router();

authRouter.post("/sign-up", (req, res) => res.send({ title: "sign Up" }));
authRouter.post("/sign-in", (req, res) => res.send({ title: "sign In" }));
authRouter.post("/sign-out", (req, res) => res.send({ title: "sign out" }));

export default authRouter;
