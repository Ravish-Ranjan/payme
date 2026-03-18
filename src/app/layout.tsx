import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "PayMe - Generate UPI Payment Links",
	icons: [
		{
			rel: "icon",
			url: "/icons/payme.svg",
			type: "image/svg",
		},
	],
	description:
		"Create and share UPI payment links instantly. Generate dynamic payment pages with custom amounts and notes for seamless transactions.",
	keywords: [
		"UPI payment",
		"payment link",
		"digital payment",
		"India",
		"money transfer",
	],
	authors: [{ name: "PayMe" }],
	creator: "PayMe",
	metadataBase: new URL("https://payme.ravishdev.org"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://payme.ravishdev.org",
		siteName: "PayMe",
		title: "PayMe - Generate UPI Payment Links",
		description:
			"Create and share UPI payment links instantly. Generate dynamic payment pages with custom amounts and notes for seamless transactions.",
		images: [
			{
				url: "https://payme.ravishdev.org/icons/payme.svg",
				width: 64,
				height: 64,
				alt: "PayMe - UPI Payment Links",
				type: "image/svg+xml",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://payme.ravishdev.org",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link rel="icon" href="/icons/payme.svg" type="image/svg+xml" />
			</head>
			<body className="grid scroll-smooth">{children}</body>
		</html>
	);
}
