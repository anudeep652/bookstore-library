import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  likes: Number,
  payAmount: {
    type: Number,
    required: true,
  },
  rentAmount: {
    type: Number,
    required: true,
  },

  reviews: [
    {
      reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      reviewMessage: String,
    },
  ],
});

export default mongoose.model("Book", bookSchema);
