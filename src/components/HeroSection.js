import { SIGNUP_URL } from "@/constants/landingPageConstants";
import Link from "next/link";

const HERO_BACKGROUND_IMAGE = "/heroSection.webp";

export default function HeroSection({ children }) {
	return (
		<section
			id="home"
			className="relative isolate min-h-screen overflow-hidden"
			style={{
				backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundColor: "#141618",
			}}
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(15,23,42,0.2),transparent_55%)]" />
			<div className="relative">
				{children}
				<div className="mx-auto flex w-full max-w-7xl px-4 pb-16 pt-34 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
					<div className="max-w-3xl text-white">
						<div className="mb-4 inline-flex items-center gap-2 px-1 text-sm font-medium text-[#51A2FF] sm:mb-6 sm:px-3 sm:text-base">
                            <img src="/universe.svg" alt="Multilingual support icon" width={16} height={16} className="h-4 w-4" />
							Multilingual Platform
						</div>
						<h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl lg:leading-24">
							Developers Map
						</h1>
						<p className="mt-3 font-heading text-xl font-normal sm:mt-4 sm:text-2xl lg:text-3xl">
							Real Estate Brochure Generation Platform
						</p>
						<p className="mt-4 max-w-xl text-sm leading-6 text-[#94A3B8] sm:mt-5 sm:text-base sm:leading-7 lg:max-w-3xl lg:text-lg">
							Transform your real estate business with our comprehensive platform. Create
                            stunning brochures, manage properties, and connect with clients in multiple
                            languages.
						</p>
						<p className="mt-5 flex items-center gap-2 text-sm font-normal sm:mt-6 sm:text-base">
							<span><img src="/language.svg" alt="Multilingual support icon" width={16} height={16} className="h-4 w-4" /></span>
                            Available in English, Russian, Chinese &amp; Arabic
						</p>
						<Link
							href={SIGNUP_URL}
							className="mt-6 w-40 flex gap-2 rounded-md bg-linear-to-b from-[#13F58C] via-[#097347] to-[#282828] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:bg-emerald-400 sm:px-6 sm:py-3"
						>
							Get Started <span><img src="/arrow.svg" alt="Arrow icon" width={16} height={16} className="h-4 w-4 pt-1" /></span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
