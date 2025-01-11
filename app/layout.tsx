import React from "react";
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from "next/font/google";
import {Footer, TopNavigation} from "@/components/components";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "StraySoulSavior",
    description: "StraySoulSavior is a platform that connects animal lovers with stray dogs in need of a loving home.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full">
        <body
            className={`flex flex-col min-h-full bg-pageBackground ${inter.className} ${geistMono.variable} ${geistSans.variable} antialiased`}>
        <TopNavigation/>
        <main className="flex flex-grow items-center justify-center">
            <div>
                {children}
            </div>
        </main>
        <Footer/>
        </body>
        </html>
    )
}