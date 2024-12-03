import { FC, memo } from "react";

const Home:FC = memo(() => {
    return (
        <>
        <main className="flex flex-1 flex-col justify-center">
            <div className="mx-auto max-w-7xl space-y-32 px-8 py-16">
                <div className="mx-auto flex justify-center gap-16 max-lg:flex-col max-lg:items-center">
                    <p>aaaa</p>
                    <p>bbb</p>
                </div>
                <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1">
                    <p>ccc</p>
                    <p>ddd</p>
                    <p>eee</p>
                </div>
            </div>
        </main>
        </>
    );
});

Home.displayName = "Home";
export default Home;