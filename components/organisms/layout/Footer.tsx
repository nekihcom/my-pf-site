import { FC, memo } from "react";

export const Footer:FC = memo(() => {

    return (
        <footer className="container mx-auto py-4">
            <p className="text-center text-sm">© 2024 mochiken.tech</p>
        </footer>
    )
});

Footer.displayName = 'Footer';