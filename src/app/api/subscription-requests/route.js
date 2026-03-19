import { NextResponse } from "next/server";
import Mongo_Connect from "@/lib/db";
import { createSubscriptionRequest } from "@/services/subscriptionRequestService";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?\d+$/;

function normalizeAndValidatePayload(payload) {
  const normalizedPayload = {
    name: payload?.name?.trim(),
    email: payload?.email?.trim().toLowerCase(),
    phone: payload?.phone?.trim(),
    plan: payload?.plan?.trim(),
  };

  const { name, email, phone, plan } = normalizedPayload;

  if (!name || !email || !phone || !plan) {
    return { message: "Name, email, phone and plan are required.", statusCode: 400 };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { message: "Please provide a valid email address.", statusCode: 400 };
  }

  if (!PHONE_REGEX.test(phone)) {
    return {
      message: "Phone can only contain digits and an optional leading +.",
      statusCode: 400,
    };
  }

  return { normalizedPayload };
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const validationResult = normalizeAndValidatePayload(payload);

    if (validationResult.message) {
      return NextResponse.json(
        { message: validationResult.message },
        { status: validationResult.statusCode }
      );
    }

    await Mongo_Connect();
    const createdRequest = await createSubscriptionRequest(
      validationResult.normalizedPayload
    );

    const result = {
      message: "Subscription request submitted successfully.",
      data: createdRequest,
    };

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error creating subscription request:", error);

    return NextResponse.json(
      { message: "Unable to submit subscription request right now." },
      { status: 500 }
    );
  }
}
