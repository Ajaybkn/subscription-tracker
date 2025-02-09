import express from "express";
import { PORT } from "./config/env.js";
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to subscription tracker API");
});

app.listen(PORT, () => {
	console.log(`subscription tracker API is running on localhost:${PORT}`);
});
export default app;
