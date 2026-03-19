import SubscriptionRequest from "@/models/SubscriptionRequest";

export async function createSubscriptionRequest(data) {
  const payload = {
    name: data.name?.trim(),
    email: data.email?.trim().toLowerCase(),
    phone: data.phone?.trim(),
    plan: data.plan?.trim(),
  };

  const subscriptionRequest = await SubscriptionRequest.create(payload);

  return {
    id: subscriptionRequest._id.toString(),
    name: subscriptionRequest.name,
    email: subscriptionRequest.email,
    phone: subscriptionRequest.phone,
    plan: subscriptionRequest.plan,
    createdAt: subscriptionRequest.createdAt,
  };
}
