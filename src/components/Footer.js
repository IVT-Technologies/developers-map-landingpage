import Image from "next/image";
import {
	FOOTER_COLUMNS,
	FOOTER_CONTACT_ITEMS,
	FOOTER_LANGUAGES,
	FOOTER_SOCIAL_ICONS,
} from "@/constants/landingPageConstants";

export default function Footer() {
	return (
		<footer className="bg-[#0F172A] text-slate-200">
			<div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_2fr] lg:px-8">
				<div>
					<h3 className="font-heading text-2xl font-bold text-white">Developers Map</h3>
					<p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
						The comprehensive real estate brochure generation platform supporting multilingual workflows and role-based
						management.
					</p>
					<div className="mt-6 space-y-2 text-sm text-slate-400">
						{FOOTER_CONTACT_ITEMS.map((item) => (
							<p key={item.text} className="flex items-center gap-2.5">
								<Image src={item.icon} alt={item.alt} width={16} height={16} className="h-4 w-4" />
								<span>{item.text}</span>
							</p>
						))}
					</div>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{FOOTER_COLUMNS.map((column) => (
						<div key={column.title}>
							<h4 className="font-heading text-sm font-semibold tracking-wide">{column.title}</h4>
							<ul className="mt-4 space-y-2.5">
								{column.links.map((link) => (
									<li key={link}>
										<a href="#" className="text-sm text-slate-400 transition hover:text-white">
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="border-t border-slate-800">
				<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
					<p className="text-xs text-slate-500">© 2026 Developers Map. All rights reserved.</p>
					<div className="flex flex-wrap items-center gap-2">
						<span className="text-xs text-slate-500">Available in:</span>
						{FOOTER_LANGUAGES.map((language) => (
							<span key={language} className="rounded-md border border-slate-700 bg-[#1E2939] px-2 py-1 text-[11px] text-slate-300">
								{language}
							</span>
						))}
					</div>
					<div className="flex items-center gap-2.5">
						{FOOTER_SOCIAL_ICONS.map((social) => (
							<button
								key={social.alt}
								type="button"
								className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-[#1E2939] text-[11px] font-semibold text-slate-300 transition hover:cursor-pointer hover:border-slate-500 hover:text-white"
								aria-label={social.alt}
							>
								<Image src={social.icon} alt="" width={14} height={14} aria-hidden="true" className="h-3.5 w-3.5" />
							</button>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
