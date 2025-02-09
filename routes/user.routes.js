import { Router } from "express";
const userRouter = Router();

userRouter.get("/", (req, res) => {
	res.send({ title: "Get all users" });
});

userRouter.get("/", (req, res) => {
	res.send({ title: "Get all users" });
});

userRouter.get("/:id", (req, res) => {
	res.send({ title: "Get user details" });
});

userRouter.post("/", (req, res) => {
	res.send({ title: "create new user" });
});

userRouter.put("/:id", (req, res) => {
	res.send({ title: "update user details" });
});

userRouter.delete("/:id", (req, res) => {
	res.send({ title: "delete user details" });
});

export default userRouter;
