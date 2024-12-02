import { FC, memo } from "react";

const Home:FC = memo(() => {
    return (
        <>
        <main className="container mx-auto py-4">
            <div className="text-center">
                <h1>⚠️Under maintanance⚠️</h1>
                <br />
                <p><a href="https://x.com/nekihcom" className="underline text-teal-600">X</a></p>
                <br />
                <p><a href="https://github.com/nekihcom" className="underline text-teal-600">GitHub</a></p>
            </div>
            
        </main>
        </>
    );
});

Home.displayName = "Home";
export default Home;