import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Developers Map.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline-offset-4 hover:underline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
        </div>
        <h1 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          Last updated: March 19, 2026
        </p>

        <div className="mt-8 space-y-7 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              We collect account information, contact details, usage analytics, and operational data needed to provide
              platform features such as brochure generation, project management, and role-based access control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. How We Use Information</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              Your information is used to operate and improve the service, communicate updates, secure accounts,
              process support requests, and maintain legal and compliance obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Data Sharing</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              We do not sell personal information. Data may be shared with trusted service providers who support
              hosting, analytics, and customer support under contractual confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Data Security</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              We implement reasonable technical and organizational safeguards, including access control and monitoring,
              to protect your information from unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Your Rights</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              Depending on your location, you may request access, correction, deletion, or restriction of your personal
              data. To exercise these rights, contact us at info@developersmap.net.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Contact</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              If you have any privacy-related questions, contact us at info@developersmap.net.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
