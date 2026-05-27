import React from "react";

function StarBackground() {

    const stars = Array.from({ length: 150 });

    return (

        <div className="stars-container">

            {stars.map((_, index) => {

                const size = Math.random() * 3 + 1;

                return (

                    <span
                        key={index}
                        className="star"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}
                    ></span>

                );
            })}

        </div>
    );
}

export default StarBackground;