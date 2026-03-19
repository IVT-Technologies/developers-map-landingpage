import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Developers Map.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
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
          Terms & Conditions
        </h1>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          Last updated: March 19, 2026
        </p>

        <div className="mt-8 space-y-7 text-slate-700">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              By accessing or using Developers Map, you agree to comply with these Terms & Conditions and all
              applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Use of Service</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              You agree to use the platform only for legitimate business activities related to real estate operations,
              marketing, and collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Account Responsibilities</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              You are responsible for maintaining account confidentiality and all activities performed under your
              credentials. Notify us immediately about unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Intellectual Property</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              Platform content, trademarks, and software are owned by Developers Map or its licensors. Unauthorized
              copying, distribution, or reverse engineering is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Limitation of Liability</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              To the maximum extent permitted by law, Developers Map is not liable for indirect, incidental, or
              consequential damages resulting from use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Changes to Terms</h2>
            <p className="mt-2 text-sm leading-7 sm:text-base">
              We may update these terms from time to time. Continued use of the platform after updates indicates your
              acceptance of the revised terms.
            </p>
          </section>
        </div>

      </div>
    </main>
  );
}
