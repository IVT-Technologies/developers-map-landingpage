import Image from "next/image";
import Navbar from "@/components/Navbar";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { ABOUT_US_CONTENT, ABOUT_US_HIGHLIGHTS, ABOUT_US_METADATA } from "@/constants/landingPageConstants";

export const metadata = ABOUT_US_METADATA;

export default function AboutUsPage() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <main className="bg-linear-to-b from-[#F6F7F9] to-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

          <section className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.07)] sm:p-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
                {ABOUT_US_CONTENT.heading}
              </h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {ABOUT_US_CONTENT.paragraphs[0]}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {ABOUT_US_CONTENT.paragraphs[1]}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <Image
                src={ABOUT_US_CONTENT.image.src}
                alt={ABOUT_US_CONTENT.image.alt}
                width={ABOUT_US_CONTENT.image.width}
                height={ABOUT_US_CONTENT.image.height}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            {ABOUT_US_HIGHLIGHTS.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </section>
        </div>
      </main>

      <SubscriptionPlans />
      <CtaBanner />
      <Footer />
    </div>
  );
}
