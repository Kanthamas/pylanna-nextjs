import type { Metadata } from "next";

// --- Next.js Metadata Export (Essential SEO & OpenGraph) ---
export const siteMetadata: Metadata = {
	// Primary Title and Description for Search Results
	title: "PyLanna: Chiang Mai Python Community | Evolution, Not Just Survival",
	description:
		"PyLanna is Chiang Mai's open and diverse Python community. A hub for learning, networking, and deepening Python skills, welcoming all developers—both Thai and international.",

	// Local SEO & Keywords targeting Chiang Mai
	keywords: [
		"Python community Chiang Mai",
		"Python Thailand",
		"Python Meetup",
		"Pythonista",
		"Coding Chiang Mai",
		"PyLanna",
		"Python Lanna",
	],
	metadataBase: new URL("https://www.pylanna.org"),
	applicationName: "PyLanna",

	// Open Graph (For Social/Messaging App Sharing like Facebook or Telegram)
	openGraph: {
		title: "PyLanna: The Python Community of Chiang Mai, Thailand",
		description:
			"Connect with Thai and international Python enthusiasts in Chiang Mai. Learn, network, and evolve your coding skills with PyLanna.",
		url: "https://www.pylanna.org",
		siteName: "PyLanna",
		images: [
			{
				url: "https://www.pylanna.org/og-image.png", // Ensure this image is also in public/
				width: 1200,
				height: 630,
				alt: "PyLanna - Chiang Mai Python Community Logo",
			},
		],
		// Primary content language is English initially
		locale: "en_US",
		type: "website",
	},
};
