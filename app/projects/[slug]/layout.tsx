import type { Metadata } from "next";
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "Project Details | Portfolio",
    description: "Detailed view of portfolio projects",
};

export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
        </div>
    );
}