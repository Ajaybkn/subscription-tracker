import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to subscription tracker API");
});

app.listen(3000, () => {
	console.log("subscription tracker API is running on localhost:3000");
});
export default app;
