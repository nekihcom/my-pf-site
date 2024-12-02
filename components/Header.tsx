import { FC, memo } from "react";

export const Header:FC = memo(() => {

    return (
        <header className="container mx-auto py-4">
            <h1 className="text-center font-bold text-xl">Mochiken&apos;s Portfolio</h1>
        </header>
    )
});

Header.displayName = 'Header';