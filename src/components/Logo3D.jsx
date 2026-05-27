import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";

function AnimatedLogo() {

    const logoRef = useRef();

    // Rotation Animation
    useFrame(() => {

        if (logoRef.current) {
            logoRef.current.rotation.y += 0.01;
        }

    });

    return (

        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
        >

            <Center>

                <mesh ref={logoRef}>

                    {/* 3D Text */}
                    <Text3D
                        font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
                        size={1}
                        height={0.3}
                        curveSegments={12}
                    >

                        Flux Studio

                        {/* Material */}
                        <meshStandardMaterial color="white" />

                    </Text3D>

                </mesh>

            </Center>

        </Float>
    );
}

function Logo3D() {

    return (

        <Canvas camera={{ position: [0, 0, 5] }}>

            {/* Lights */}
            <ambientLight intensity={2} />

            <directionalLight position={[2, 2, 5]} />

            {/* Logo */}
            <AnimatedLogo />

        </Canvas>
    );
}

export default Logo3D;