import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingCube() {

    const meshRef = useRef();

    // Animation
    useFrame(() => {

        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;

    });

    return (

        <mesh ref={meshRef}>

            {/* Shape */}
            <boxGeometry args={[2, 2, 2]} />

            {/* Material */}
            <meshStandardMaterial color="white" />

        </mesh>
    );
}

function Scene() {

    return (

        <Canvas>

            {/* Light */}
            <ambientLight intensity={1} />

            <directionalLight position={[2, 2, 5]} />

            {/* 3D Object */}
            <RotatingCube />

        </Canvas>
    );
}

export default Scene;