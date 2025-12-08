import mongoose from "mongoose";

const residencySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: Number,
    address: { type: String, required: true },
    city: String,
    country: String,
    image: String,
    facilities: Object,
    userEmail: { type: String, required: true, ref: "User" },
    startTime: String, // Add this line
    endTime: String, // Add this line
    expiresAt: {
      type: Date,
      index: { expireAfterSeconds: 0 },
    },
  },
  { timestamps: true }
);

residencySchema.pre("save", function (next) {
  if (this.endTime && this.isNew) {
    // Parse the endTime string (format: "HH:MM") and set it to today's date
    const [hours, minutes] = this.endTime.split(":").map(Number);
    const expiresAt = new Date();
    expiresAt.setHours(hours, minutes, 0, 0);

    // If the end time has already passed today, set it for tomorrow
    if (expiresAt < new Date()) {
      expiresAt.setDate(expiresAt.getDate() + 1);
    }

    this.expiresAt = expiresAt;
  }
  next();
});

const Residency = mongoose.model("Residency", residencySchema);
export default Residency;
