import type { Metadata } from "next";
import { FC, memo, ReactNode } from "react";

import "./globals.css";
import { siteConfig } from "../config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    }
};

type Props = {
    children: ReactNode;
}

const RootLayout:FC<Props> = memo((props) => {
    const {children} = props;

    return (
        <html lang="en">
            <head />
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
});

RootLayout.displayName = "RootLayout";
export default RootLayout;