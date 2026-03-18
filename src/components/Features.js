import Image from "next/image";
import { FEATURES } from "@/constants/landingPageConstants";

export default function Features() {
	return (
		<section id="features" className="bg-[#F1F5F9] py-20 sm:py-24">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto text-center">
					<h2 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-transparent">
						Powerful Features for Real Estate Professional
					</h2>
					<p className="mt-3 mx-auto text-lg md:text-2xl max-w-3xl text-[#64748B]">
						Everything you need to manage, market, and sell properties efficiently in one comprehensive platform
					</p>
				</div>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{FEATURES.map((feature) => (
						<article
							key={feature.title}
							className="rounded-xl bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03),0_12px_22px_rgba(15,23,42,0.04)]"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F1F2F4]">
								<Image src={feature.icon} alt="" width={20} height={20} aria-hidden="true" />
							</div>
							<h3 className="mt-4 font-heading text-lg font-semibold text-[#1E293B]">{feature.title}</h3>
							<p className="mt-2 text-sm leading-6 text-[#64748B]">{feature.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
