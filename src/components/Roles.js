import Image from "next/image";
import { ROLE_CARDS } from "@/constants/landingPageConstants";

export default function Roles() {
	return (
		<section id="user-roles" className="bg-white py-20 sm:py-24">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] bg-clip-text font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-transparent">Seven Specialized User Role</h2>
					<p className="mt-3 mx-auto text-lg md:text-2xl max-w-3xl text-[#64748B]">
						Tailored access and features for every stakeholder in the real estate ecosystem.
					</p>
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{ROLE_CARDS.map((role) => (
						<article
							key={role.title}
							className={`rounded-xl border border-slate-200 border-l-4 ${role.accent} bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.03),0_8px_20px_rgba(15,23,42,0.04)]`}
						>
							<div className={`flex h-12 w-12 items-center justify-center rounded-xl ${role.iconBg}`}>
								<Image src={role.icon} alt="" width={24} height={24} aria-hidden="true" />
							</div>
							<h3 className="mt-5 font-heading text-2xl font-semibold leading-tight text-[#1E293B]">
								{role.title}
							</h3>
							<p className="mt-6 text-base leading-7 text-[#64748B] md:text-base">{role.description}</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{role.badges.map((badge) => (
									<span key={badge} className="rounded-md bg-[#F1F2F4] px-2.5 py-1 text-xs font-medium text-slate-600">
										{badge}
									</span>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
