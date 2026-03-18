import Image from "next/image";
import { HOW_IT_WORKS_STEPS } from "@/constants/landingPageConstants";

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="bg-linear-to-b from-[#F6F7F9] to-[#FFFFFF] py-20 sm:py-24">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-transparent">How It Works</h2>
					<p className="mt-3 mx-auto text-lg md:text-2xl max-w-3xl text-[#64748B]">Get started with Developers Map in four simple steps.</p>
				</div>

				<div className="relative mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
					<div className="absolute left-8 right-8 top-8 hidden lg:block" />
					{HOW_IT_WORKS_STEPS.map((step) => (
						<article key={step.title} className="relative text-center">
							<div className="flex justify-center">
								<Image src={step.icon} alt="" width={66} height={66} aria-hidden="true" />
							</div>
							<h3 className="mt-5 font-heading text-base font-semibold text-slate-800">{step.title}</h3>
							<p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
