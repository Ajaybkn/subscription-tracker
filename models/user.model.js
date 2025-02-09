import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, "User name is required"], minLength: 3, maxLength: 50, trim: true },
		email: {
			type: String,
			required: [true, "User email is required"],
			unique: true,
			trim: true,
			lowercase: true,
			match: [/\$+@\S+\.\S+/],
		},
		password: { type: String, required: [true, "Password is required"], minLength: 6 },
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
