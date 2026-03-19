const CTA_BACKGROUND_IMAGE = "/startjourney.png";

export default function CtaBanner() {
  return (
    <section
      id="cta-section"
      className="relative isolate overflow-hidden py-20 sm:py-24"
      style={{
        backgroundImage: `url(${CTA_BACKGROUND_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.16),transparent_45%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 text-center text-white sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl lg:text-6xl font-extrabold leading-tight">
          Ready to Transform Your Real Estate Business?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg lg:text-xl leading-7">
          Join thousands of professionals using Developers Map to create stunning
          brochures and manage properties efficiently
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-white flex gap-2 px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 hover:cursor-pointer"
          >
            Start Your Journey{" "}
            <span>
              <img
                src="/arrow-right.svg"
                alt="Arrow right"
                className=" w-4 h-4 pt-1"
              />
            </span>
          </button>
          <button
            type="button"
            className="rounded-md border border-white/50 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 hover:cursor-pointer"
          >
            Schedule a Demo
          </button>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-5 divide-x divide-gray-400 text-xs text-blue-100">
          <div className="flex items-center pr-5">
            <img src="/email.svg" alt="Email" className="mr-2" />
            <span>info@developersmap.net</span>
          </div>

          <div className="flex items-center pr-7">
            <img src="/phone.svg" alt="Phone" className="mr-2" />
            <span>Contact Sales</span>
          </div>
        </div>
      </div>
    </section>
  );
}