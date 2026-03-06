'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

function OrbMesh({ color }: { color: string }) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const targetX = useRef(0)
    const targetZ = useRef(0)

    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            targetX.current = (e.clientY / window.innerHeight - 0.5) * 0.6
            targetZ.current = (e.clientX / window.innerWidth - 0.5) * 0.3
        }
        window.addEventListener('mousemove', onMouseMove)
        return () => window.removeEventListener('mousemove', onMouseMove)
    }, [])

    useFrame(({ clock }) => {
        if (!meshRef.current) return
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.35
        meshRef.current.rotation.x +=
            (targetX.current - meshRef.current.rotation.x) * 0.04
        meshRef.current.rotation.z +=
            (targetZ.current - meshRef.current.rotation.z) * 0.04
    })

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color={color} wireframe />
        </mesh>
    )
}

export function WireframeOrb() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return <div style={{ width: 80, height: 80 }} />

    // zinc-400 in dark, zinc-600 in light
    const color = resolvedTheme === 'dark' ? '#a1a1aa' : '#52525b'

    return (
        <div style={{ width: 80, height: 80 }}>
            <Canvas
                camera={{ position: [0, 0, 2.8], fov: 38 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <OrbMesh color={color} />
            </Canvas>
        </div>
    )
}
