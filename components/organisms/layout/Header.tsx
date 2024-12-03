import { FC, memo } from "react";

export const Header:FC = memo(() => {

    return (
        <header>
            <div className="px-8 py-4">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="font-bold text-xl">Mochiken.tech</h1>
                </div>
            </div>
        </header>
    )
});

Header.displayName = 'Header';