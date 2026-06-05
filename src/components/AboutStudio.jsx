import React from "react";


function AboutStudio({ onClose }) {
    return (
        <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/95 backdrop-blur-xl">

            {/* Close */}
            <button
                onClick={onClose}
                className="
          fixed
          bottom-8
          left-1/2
          -translate-x-1/2
          px-8 py-4
          rounded-full
          bg-white
          text-black
          z-[10000]
        "
            >
                Back To Home
            </button>

            <div className="max-w-7xl mx-auto px-6 py-32">

                {/* Hero */}
                <h1 className="text-7xl md:text-9xl font-black mb-10">
                    Orbit Studio
                </h1>

                <p className="text-xl text-white/60 max-w-3xl">
                    We build cinematic digital experiences using
                    React, Three.js, motion design and immersive
                    storytelling.
                </p>

                {/* Video */}
                <div className="mt-24 rounded-[40px] overflow-hidden">
                    <iframe
                        width="100%"
                        height="600"
                        src="https://www.youtube.com/embed/ScMzIvxBSi4"
                        title="Studio Reel"
                        allowFullScreen
                        className="rounded-[40px]"
                    />
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-8 mt-24">

                    <div>
                        <h2 className="text-6xl font-black">25+</h2>
                        <p className="text-white/50">Projects</p>
                    </div>

                    <div>
                        <h2 className="text-6xl font-black">15+</h2>
                        <p className="text-white/50">Clients</p>
                    </div>

                    <div>
                        <h2 className="text-6xl font-black">3+</h2>
                        <p className="text-white/50">Years</p>
                    </div>

                    <div>
                        <h2 className="text-6xl font-black">100%</h2>
                        <p className="text-white/50">Satisfaction</p>
                    </div>

                </div>

                {/* Timeline */}
                <div className="mt-32">

                    <h2 className="text-5xl font-bold mb-10">
                        Journey
                    </h2>

                    <div className="space-y-8">

                        <div>
                            <h3 className="text-3xl">2023</h3>
                            <p className="text-white/50">
                                Started freelancing.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl">2024</h3>
                            <p className="text-white/50">
                                Built first business websites.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl">2025</h3>
                            <p className="text-white/50">
                                Expanded into branding & media.
                            </p>
                        </div>

                    </div>

                </div>

                {/* Tech Stack */}
                <div className="mt-32">

                    <h2 className="text-5xl font-bold mb-10">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-4">

                        {[
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Three.js",
                            "Tailwind",
                            "Framer Motion",
                        ].map((tech) => (
                            <div
                                key={tech}
                                className="
                  px-6 py-3
                  rounded-full
                  bg-white/10
                  border border-white/10
                "
                            >
                                {tech}
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    );
}

export default AboutStudio;