"use client";

import { usePathname } from "next/navigation";

export default function useSectionNavigation(extraOffset = 8) {
	const pathname = usePathname();

	const scrollToSection = (hash) => {
		const section = document.getElementById(hash);

		if (!section) {
			return;
		}

		const fixedHeader = document.querySelector("header");
		const headerHeight = fixedHeader ? fixedHeader.getBoundingClientRect().height : 0;
		const targetY = section.getBoundingClientRect().top + window.scrollY - (headerHeight + extraOffset);
		window.scrollTo({ top: Math.max(targetY, 0), behavior: "smooth" });
		window.history.replaceState(null, "", `/#${hash}`);
	};

	const handleSectionNavigation = (event, href, options = {}) => {
		if (typeof options.onBeforeNavigate === "function") {
			options.onBeforeNavigate();
		}

		if (!href || !href.includes("#")) {
			return;
		}

		const [targetPath, hashPart] = href.split("#");
		const hash = hashPart?.trim();

		if (!hash) {
			return;
		}

		const shouldHandleOnCurrentPage = (targetPath === "/" || targetPath === "") && pathname === "/";

		if (shouldHandleOnCurrentPage) {
			event.preventDefault();
			scrollToSection(hash);
		}
	};

	return { handleSectionNavigation };
}
