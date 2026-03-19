import { SUBSCRIPTION_PLANS } from "@/constants/landingPageConstants";

export default function SubscriptionPlans() {
	return (
		<section id="pricing" className="bg-linear-to-b from-[#F6F7F9] to-[#FFFFFF] py-20 sm:py-24">
			<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-transparent">Flexible Subscription Plans</h2>
					<p className="mt-3 mx-auto text-lg md:text-xl max-w-3xl text-[#64748B]">
						Choose the plan that fits your business needs. All plans require admin approval and payment confirmation.
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
							<h3 className="font-heading text-2xl font-semibold leading-tight text-[#1E293B]">{plan.title}</h3>
							<p className="mt-3 text-base text-[#64748B]">{plan.subtitle}</p>
							<p className="mt-6 font-heading text-4xl font-bold leading-tight text-[#1E293B]">{plan.contact}</p>
							<p className="text-sm text-[#64748B]">{plan.period}</p>
							<button
								type="button"
								className={`mt-6 w-full rounded-lg hover:cursor-pointer px-4 py-2.5 text-sm font-semibold transition ${plan.buttonClass}`}
							>
								{plan.cta}
							</button>
							<ul className="mt-6 space-y-3">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center gap-2.5 text-sm text-[#64748B]">
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
	);
}
