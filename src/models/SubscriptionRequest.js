import mongoose from "mongoose";

const subscriptionRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^\+?\d+$/,
      minlength: 7,
      maxlength: 16,
    },
    plan: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "SubscriptionRequests",
  }
);

subscriptionRequestSchema.index({ createdAt: -1 });

const SubscriptionRequest =
  mongoose.models.SubscriptionRequest ||
  mongoose.model("SubscriptionRequest", subscriptionRequestSchema);

export default SubscriptionRequest;
