import type { Metadata } from "next";

// --- Next.js Metadata Export (Essential SEO & OpenGraph) ---
export const siteMetadata: Metadata = {
	// Primary Title and Description for Search Results
	title: "PyLanna",
	description:
		"PyLanna is Python User Group Community of Northern Thailand. A hub for learning, networking, and deepening Python skills, welcoming all developers—both Thai and international.",
	icons: {
		icon: "/favicon-32x32.png",
	},
	// Local SEO & Keywords targeting Chiang Mai
	keywords: [
		"Python User Group Community of Northern Thailand",
		"Python community Chiang Mai",
		"Python Chiang Mai",
		"Python Thailand",
		"Python Meetup",
		"Pythonista",
		"Coding Chiang Mai",
		"PyLanna",
		"Python Lanna",
		"Python User Group",
		"Python User Group Community",
	],
	metadataBase: new URL("https://www.pylanna.org"),
	applicationName: "PyLanna",

	// Open Graph (For Social/Messaging App Sharing like Facebook or Telegram)
	openGraph: {
		title: "PyLanna: Python User Group Community of Northern Thailand",
		description:
			"Connect with Thai and international Python enthusiasts in Chiang Mai and Northern Thailand. Learn, network, and evolve your coding skills with PyLanna.",
		url: "https://www.pylanna.org",
		siteName: "PyLanna",
		images: [
			{
				url: "https://www.pylanna.org/og-image.png",
				width: 1200,
				height: 630,
				alt: "PyLanna - Python User Group Community of Northern Thailand Logo",
			},
		],
		// Primary content language is English initially
		locale: "en_US",
		type: "website",
	},
};
