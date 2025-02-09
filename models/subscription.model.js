import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, "Subscription name is required"], minLength: 3, maxLength: 50, trim: true },
		price: {
			type: Number,
			required: [true, "Price is required"],
			min: [0, "Price must be greater than 0"],
		},
		currency: {
			type: String,
			enum: ["USD", "EUR", "RS"],
			default: "RS",
		},
		frequency: {
			type: String,
			enum: ["daily", "weekly", "monthly", "yearly"],
			default: "monthly",
		},
		category: {
			type: String,
			enum: ["sports", "news", "entertainment", "lifestyle", "technology"],
			default: "Basic",
			required: true,
		},
		paymentMethod: {
			type: String,
			required: true,
			required: true,
		},
		status: {
			type: String,
			enum: ["active", "cancelled", "expired"],
			default: "active",
			required: true,
		},
		startDate: {
			type: Date,
			required: true,
			validate: {
				validator: (value) => value <= new Date(),
				message: "start date must in the past",
			},
		},
		renewalDate: {
			type: Date,

			validate: {
				validator: function (value) {
					return value > this.startDate;
				},
				message: "Renewal date must be after start date",
			},
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true,
		},
	},
	{ timestamps: true }
);

subscriptionSchema.pre("save", function (next) {
	if (!this.renewalDate) {
		const renewalPeriods = {
			daily: 1,
			weekly: 7,
			monthly: 30,
			yearly: 365,
		};
		this.renewalDate = new Date(this.startDate);
		this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
	}
	if (this.renewalDate < new Date()) {
		this.status = "expired";
	}
	next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
