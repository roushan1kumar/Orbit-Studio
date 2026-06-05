import React, { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";

function ProjectCard({ title, description, position }) {
    const ref = useRef();

    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.y =
                Math.sin(clock.getElapsedTime()) * 0.15;
        }
    });

    return (
        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <mesh ref={ref} position={position}>
                <boxGeometry args={[2.5, 3, 0.2]} />

                <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.15}
                />

                <Html center>
                    <div
                        className="
              w-64
              p-6
              rounded-3xl
              backdrop-blur-xl
              border border-white/20
              bg-black/60
              text-white
              text-center
            "
                    >
                        <h3 className="text-2xl font-bold mb-3">
                            {title}
                        </h3>

                        <p className="text-sm text-white/70">
                            {description}
                        </p>
                    </div>
                </Html>
            </mesh>
        </Float>
    );
}
function CameraAnimation() {
    const { camera } = useThree();

    useFrame(() => {
        camera.position.z +=
            (8 - camera.position.z) * 0.03;
    });

    return null;
}

function WorkShowcase3D({ onClose }) {
    return (
        <div
            className="
    absolute
    inset-0
    z-[999]
    bg-black/80
    backdrop-blur-xl
  "
        >
            <div
                className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-cyan-500/20
        blur-[180px]
        rounded-full
      "
            />
            <button
                onClick={onClose}
                className="
    absolute
    bottom-10
    left-1/2
    -translate-x-1/2
    z-[10000]
    px-8
    py-4
    rounded-full
    bg-white
    text-black
    font-semibold
    tracking-wider
    hover:scale-105
    transition-all
    duration-300
  "
            >
                ← Back To Home
            </button>

            <Canvas
                style={{
                    width: "100%",
                    height: "100vh",
                }}
                camera={{ position: [0, 0, 20], fov: 50 }}
            >
                <ambientLight intensity={2} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={3}
                />

                <ProjectCard
                    title="UrbanNook"
                    description="Social Media & Branding"
                    position={[-4, 0, 0]}
                />

                <ProjectCard
                    title="Sweet Heart Hotel"
                    description="Website Development"
                    position={[0, 0, 0]}
                />

                <ProjectCard
                    title="Shopify Store"
                    description="E-Commerce Experience"
                    position={[4, 0, 0]}
                />
                <CameraAnimation />
            </Canvas>
        </div>
    );
}

export default WorkShowcase3D;