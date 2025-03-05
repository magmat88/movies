import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Movies",
	description: "Immerse yourself in the fascinating world of movies"
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<head>
			{/* Icon sourced from Iconfinder: https://www.iconfinder.com */}
			<link rel="icon" href="/9055454_bxs_movie_play_icon.svg" type="image/svg+xml"/>
		</head>
		<body
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
		>
		{children}
		</body>
		</html>
	);
}
