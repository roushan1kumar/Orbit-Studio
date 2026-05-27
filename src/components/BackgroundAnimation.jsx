import React from "react";

function BackgroundAnimation() {

    return (

        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

            {/* Gradient Glow 1 */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-30 animate-blob top-[-100px] left-[-100px]"></div>

            {/* Gradient Glow 2 */}
            <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full blur-[150px] opacity-30 animate-blob animation-delay-2000 top-[200px] right-[-100px]"></div>

            {/* Gradient Glow 3 */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px] opacity-30 animate-blob animation-delay-4000 bottom-[-100px] left-[30%]"></div>

        </div>
    );
}
export default BackgroundAnimation;