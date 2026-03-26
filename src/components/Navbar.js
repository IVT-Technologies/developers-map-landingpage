"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LOGIN_URL, NAV_ITEMS, NAV_LINK_HREFS, SIGNUP_URL } from "@/constants/landingPageConstants";
import useSectionNavigation from "@/hooks/useSectionNavigation";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { handleSectionNavigation } = useSectionNavigation(8);

	const handleMenuToggle = () => {
		setIsMenuOpen((previous) => !previous);
	};

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white">
			<div className="mx-auto flex w-full max-w-full items-center justify-between px-4 py-2.5 sm:px-6 lg:px-20">
				<Link href="/" className="flex items-center gap-2.5 font-heading text-[14px] font-extrabold tracking-tight text-slate-800">
					<Image src="/logo.svg" alt="Developers Map logo" width={172} height={42} className="h-8 w-auto rounded-full" priority />
                    <span className="text-lg font-bold">Developers Map</span>
				</Link>

				<nav className="hidden items-center gap-10 lg:flex">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item}
							href={NAV_LINK_HREFS[item] ?? "/"}
							onClick={(event) => handleSectionNavigation(event, NAV_LINK_HREFS[item] ?? "/")}
							className="text-base font-medium text-[rgba(54, 65, 83, 1)] transition hover:text-slate-600"
						>
							{item}
						</Link>
					))}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<Link
						href={LOGIN_URL}
						className="hidden text-[13px] font-bold rounded-lg text-slate-800 hover:bg-linear-to-b from-[#818181] hover:duration-200 via-[#282828] to-[#282828] hover:text-white  hover:cursor-pointer transition px-4 py-2 sm:block"
					>
						Sign In
					</Link>
					<Link
						href={SIGNUP_URL}
						className="rounded-lg bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] px-4 py-2 text-[13px] hover:cursor-pointer font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:from-slate-600 hover:to-slate-800"
					>
						Get Started
					</Link>
				</div>

				<button
					type="button"
					onClick={handleMenuToggle}
					className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-nav-menu"
					aria-label="Toggle navigation menu"
				>
					<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
						{isMenuOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
						)}
					</svg>
				</button>
			</div>

			{isMenuOpen && (
				<div
					id="mobile-nav-menu"
					className="absolute left-0 right-0 top-full z-70 border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden"
				>
					<nav className="flex flex-col gap-2">
						{NAV_ITEMS.map((item) => (
							<Link
								key={item}
								href={NAV_LINK_HREFS[item] ?? "/"}
								onClick={(event) =>
									handleSectionNavigation(event, NAV_LINK_HREFS[item] ?? "/", {
										onBeforeNavigate: handleMenuClose,
									})
								}
								className="rounded-md px-2 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
							>
								{item}
							</Link>
						))}
					</nav>
					<div className="mt-4 grid grid-cols-1 gap-2">
						<Link
							href={LOGIN_URL}
							onClick={handleMenuClose}
							className="w-full rounded-lg border border-slate-300 px-4 py-2 text-[13px] font-bold text-slate-800 text-center transition hover:bg-slate-100"
						>
							Sign In
						</Link>
						<Link
							href={SIGNUP_URL}
							onClick={handleMenuClose}
							className="w-full rounded-lg bg-linear-to-b from-[#818181] via-[#282828] to-[#282828] px-4 py-2 text-[13px] text-center font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:from-slate-600 hover:to-slate-800"
						>
							Get Started
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
