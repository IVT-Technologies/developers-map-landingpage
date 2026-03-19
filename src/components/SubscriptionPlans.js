"use client";

import { useEffect, useState } from "react";
import { SUBSCRIPTION_PLANS } from "@/constants/landingPageConstants";

async function submitSubscriptionRequest(payload) {
  const response = await fetch("/api/subscription-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let result = null;

  try {
    result = await response.json();
  } catch {
    result = null;
  }

  if (!response.ok) {
    throw new Error(result?.message || "Failed to submit request.");
  }

  return result;
}

export default function SubscriptionPlans() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  useEffect(() => {
    if (!isDialogOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsDialogOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDialogOpen]);

  useEffect(() => {
    if (!isDialogOpen) {
      setSubscriberName("");
      setSubscriberEmail("");
      setPhoneNumber("");
      setSubmitError("");
      setSubmitSuccess("");
      setIsSubmitting(false);
    }
  }, [isDialogOpen]);

  const handleOpenDialog = (planTitle) => {
    setSelectedPlan(planTitle);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/[^\d+]/g, "");
    const hasLeadingPlus = sanitizedValue.startsWith("+");
    const digitsOnly = sanitizedValue.replace(/\+/g, "");

    setPhoneNumber(hasLeadingPlus ? `+${digitsOnly}` : digitsOnly);
  };

  const handleSubmitRequest = async (event) => {
    event.preventDefault();

    if (!selectedPlan) {
      setSubmitError("Please select a subscription plan first.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      await submitSubscriptionRequest({
        name: subscriberName,
        email: subscriberEmail,
        phone: phoneNumber,
        plan: selectedPlan,
      });

      setSubmitSuccess("Request submitted successfully. We will contact you shortly.");

      setTimeout(() => {
        setIsDialogOpen(false);
      }, 1000);
    } catch (error) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="pricing"
        className="bg-linear-to-b from-[#F6F7F9] to-[#FFFFFF] py-20 sm:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-transparent">
              Flexible Subscription Plans
            </h2>
            <p className="mt-3 mx-auto text-lg md:text-xl max-w-3xl text-[#64748B]">
              Choose the plan that fits your business needs. All plans require
              admin approval and payment confirmation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {SUBSCRIPTION_PLANS.map((plan, index) => {
              const isLastCard = index === SUBSCRIPTION_PLANS.length - 1;

              return (
                <article
                  key={plan.title}
                  className={`relative h-full rounded-2xl border bg-white p-6 transition md:p-7 lg:origin-bottom ${plan.cardClass} ${
                    plan.featured ? "lg:-translate-y-2 lg:scale-[1.02]" : ""
                  } ${isLastCard ? "md:col-span-2 md:mx-auto md:w-full md:max-w-130 lg:col-span-1 lg:max-w-none" : ""}`}
                >
                  {plan.badge ? (
                    <span
                      className={`absolute right-0 top-0 rounded-bl-lg rounded-tr-xl px-4 py-1 text-xs font-semibold text-white ${plan.badgeClass}`}
                    >
                      {plan.badge}
                    </span>
                  ) : null}
                  <h3 className="font-heading text-2xl font-semibold leading-tight text-[#1E293B]">
                    {plan.title}
                  </h3>
                  <p className="mt-3 text-base text-[#64748B]">
                    {plan.subtitle}
                  </p>
                  <p className="mt-6 font-heading text-4xl font-bold leading-tight text-[#1E293B]">
                    {plan.contact}
                  </p>
                  <p className="text-sm text-[#64748B]">{plan.period}</p>
                  <button
                    type="button"
                    onClick={() => handleOpenDialog(plan.title)}
                    className={`mt-6 w-full rounded-lg hover:cursor-pointer px-4 py-2.5 text-sm font-semibold transition ${plan.buttonClass}`}
                  >
                    {plan.cta}
                  </button>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-[#64748B]"
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-[11px] font-bold text-white">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {isDialogOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-xs"
          onClick={handleCloseDialog}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="subscription-dialog-title"
            className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-linear-to-b from-[#FFFFFF] to-[#F8FAFC] p-6 shadow-[0_25px_70px_rgba(15,23,42,0.22)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3
                  id="subscription-dialog-title"
                  className="font-heading text-2xl font-bold text-[#1E293B]"
                >
                  Get Started with {selectedPlan}
                </h3>
                <p className="mt-2 text-sm text-[#64748B]">
                  Please share your details and our team will contact you
                  shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseDialog}
                aria-label="Close dialog"
                className="rounded-md border border-[#E2E8F0] px-2 py-1 text-sm font-semibold text-[#475569] transition hover:border-[#CBD5E1] hover:bg-[#F1F5F9] hover:cursor-pointer"
              >
                X
              </button>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmitRequest}>
              <div>
                <label
                  htmlFor="subscriber-name"
                  className="mb-1.5 block text-sm font-semibold text-[#334155]"
                >
                  Name
                </label>
                <input
                  id="subscriber-name"
                  type="text"
                  required
                  value={subscriberName}
                  onChange={(event) => setSubscriberName(event.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition focus:border-[#38BDF8] focus:ring-2 focus:ring-[#BAE6FD]"
                />
              </div>
              <div>
                <label
                  htmlFor="subscriber-email"
                  className="mb-1.5 block text-sm font-semibold text-[#334155]"
                >
                  Email
                </label>
                <input
                  id="subscriber-email"
                  type="email"
                  required
                  value={subscriberEmail}
                  onChange={(event) => setSubscriberEmail(event.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition focus:border-[#38BDF8] focus:ring-2 focus:ring-[#BAE6FD]"
                />
              </div>
              <div>
                <label
                  htmlFor="subscriber-phone"
                  className="mb-1.5 block text-sm font-semibold text-[#334155]"
                >
                  Phone
                </label>
                <input
                  id="subscriber-phone"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  inputMode="tel"
                  pattern="^\+?\d+$"
                  placeholder="+92 300 1234567"
                  className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] outline-none transition focus:border-[#38BDF8] focus:ring-2 focus:ring-[#BAE6FD]"
                />
              </div>

              {submitError ? (
                <p className="rounded-lg border border-[#FCA5A5] bg-[#FEF2F2] px-3 py-2 text-sm text-[#B91C1C]">
                  {submitError}
                </p>
              ) : null}

              {submitSuccess ? (
                <p className="rounded-lg border border-[#86EFAC] bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
                  {submitSuccess}
                </p>
              ) : null}

              <div className="mt-1 flex gap-3">
                <button
                  type="button"
                  onClick={handleCloseDialog}
                  disabled={isSubmitting}
                  className="w-1/2 rounded-lg border border-[#CBD5E1] bg-white px-4 py-2.5 text-sm font-semibold text-[#334155] transition hover:bg-[#F8FAFC] hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 rounded-lg bg-linear-to-r from-[#0EA5E9] to-[#6366F1] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(14,165,233,0.28)] transition hover:brightness-105 hover:cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
