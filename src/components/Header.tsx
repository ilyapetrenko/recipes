import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="p-4 text-xl justify-between text-gray-300 flex text-center bg-black md:p-6">
            Let's Cook Together!
            <div className="flex gap-5">
                <Link to="/" className="underline hover:no-underline">
                    Home
                </Link>
                <Link to="/favourites" className="underline hover:no-underline">
                    Favourites
                </Link>
            </div>
        </header>
    );
};
