import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    email: {
      require: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    reviewsMade: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
    boughtBooks: [String],
    rentedBooks: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
