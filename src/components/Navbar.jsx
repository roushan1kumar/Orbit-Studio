import React from "react";
import Logo3D from "./Logo3D";

function Navbar() {
<<<<<<< HEAD

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
=======
    return (
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%]">

            <div className="
                flex items-center justify-between
                px-8 py-4
                rounded-full
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            ">

                {/* LOGO */}
                <div className="w-36 h-14 flex items-center">
                    <Logo3D />
                </div>

                {/* NAV LINKS */}
                <nav className="flex items-center gap-8">

                    <a
                        href="#home"
                        className="
                            text-sm uppercase tracking-[0.2em]
                            text-white/80
                            hover:text-white
                            transition-all duration-300
                            hover:scale-110
                        "
                    >
                        Home
                    </a>

                    <a
                        href="#projects"
                        className="
                            text-sm uppercase tracking-[0.2em]
                            text-white/80
                            hover:text-white
                            transition-all duration-300
                            hover:scale-110
                        "
                    >
                        Projects
                    </a>

                    <a
                        href="#about"
                        className="
                            text-sm uppercase tracking-[0.2em]
                            text-white/80
                            hover:text-white
                            transition-all duration-300
                            hover:scale-110
                        "
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="
                            px-5 py-2
                            rounded-full
                            text-white/80
                            text-sm uppercase tracking-[0.15em]
                            hover:scale-105
                            transition-all duration-300
                        "
                    >
>>>>>>> 6d730ce (first commit)
                        Contact
                    </a>

                </nav>

            </div>

        </header>
    );
}

export default Navbar;