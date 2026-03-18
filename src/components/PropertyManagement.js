import { PROPERTY_MANAGEMENT_ITEMS } from "@/constants/landingPageConstants";

export default function PropertyManagement() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        
          <img
            src="/map.svg"
            alt="Map based project management interface"
            // width={700}
            // height={430}
            className="order-2 h-auto w-full rounded-xl lg:order-1"
          />
        
        {/* </div> */}

        <div className="order-1 lg:order-2">
		  <h2 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text text-center font-heading text-3xl font-bold text-transparent md:text-4xl lg:text-left lg:text-5xl">Comprehensive Property Management Platform</h2>
		  <p className="mt-3 mx-auto max-w-3xl text-center text-lg text-[#64748B] md:text-xl lg:mx-0 lg:text-left">
            Developers Map provides all the tools you need to showcase, manage, and sell real estate projects across
            multiple markets and languages.
          </p>
          <ul className="mt-7 space-y-3">
            {PROPERTY_MANAGEMENT_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}