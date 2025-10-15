import type { Metadata } from "next";
import { Lato, Fira_Code, Sarabun } from "next/font/google";
import "./globals.css";

// SEO Configuration
import { siteMetadata } from "@/config/seo/site.metadata";
import { organizationSchema } from "@/config/seo/organization.schema";
import SchemaScript from "@/config/seo/SchemaScript";

// UI Component

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

const latoSans = Lato({
	weight: ["300", "400", "700", "900"],
	subsets: ["latin"],
	variable: "--font-sans-latin",
	display: "swap",
});

const firaCode = Fira_Code({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
});

const sarabun = Sarabun({
	weight: ["400", "500", "700"],
	subsets: ["thai"],
	variable: "--font-sans-thai",
	display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${latoSans.variable} ${sarabun.variable} ${firaCode.variable}`}
		>
			<head>
				<SchemaScript schema={organizationSchema} />
			</head>

			<body className="flex flex-col min-h-screen antialiased bg-neutral-50 text-neutral-800">
				<Header />

				<main className="flex-grow w-full  mx-auto p-4 md:p-8">
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
