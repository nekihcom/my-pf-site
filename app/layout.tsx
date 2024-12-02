import type { Metadata } from "next";
import "./globals.css";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <head />
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}

export default RootLayout;