import React from "react";
import Logo3D from "./Logo3D";

function Navbar() {

    return (

        <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

                {/* 3D Logo */}
                <div className="w-40 h-20">
                    <Logo3D />
                </div>

                {/* Navigation */}
                <nav className="flex gap-10 uppercase text-sm font-medium">

                    <a href="#home" className="hover:text-gray-400 transition">
                        Home
                    </a>

                    <a href="#projects" className="hover:text-gray-400 transition">
                        Projects
                    </a>

                    <a href="#about" className="hover:text-gray-400 transition">
                        About
                    </a>

                    <a href="#contact" className="hover:text-gray-400 transition">
                        Contact
                    </a>

                </nav>

            </div>

        </header>
    );
}

export default Navbar;