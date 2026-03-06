'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

function OrbMesh({ color, hovered }: { color: string; hovered: boolean }) {
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
        const speed = hovered ? 1.2 : 0.35
        meshRef.current.rotation.y = clock.getElapsedTime() * speed
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
    const [isMac, setIsMac] = useState(true)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        setMounted(true)
        setIsMac(/mac|iphone|ipad|ipod/i.test(navigator.platform))
    }, [])

    function openPalette() {
        document.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'k',
                metaKey: isMac,
                ctrlKey: !isMac,
                bubbles: true,
            })
        )
    }

    if (!mounted) return <div style={{ width: 80, height: 80 }} />

    // zinc-400 in dark, zinc-600 in light — brightens slightly on hover
    const color = resolvedTheme === 'dark'
        ? hovered ? '#d4d4d8' : '#a1a1aa'
        : hovered ? '#27272a' : '#52525b'

    const hint = isMac ? '⌘K' : 'Alt+K'

    return (
        <button
            onClick={openPalette}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative cursor-pointer"
            style={{ width: 80, height: 80 }}
            aria-label={`Open command palette (${hint})`}
            title={`Open command palette (${hint})`}
        >
            <Canvas
                camera={{ position: [0, 0, 2.8], fov: 38 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <OrbMesh color={color} hovered={hovered} />
            </Canvas>

            {/* Shortcut hint — centered inside the orb */}
            <span
                className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[11px] font-semibold transition-opacity duration-200"
                style={{
                    color: resolvedTheme === 'dark' ? '#f4f4f5' : '#18181b',
                    opacity: hovered ? 1 : 0.75,
                    letterSpacing: '0.02em',
                }}
            >
                {hint}
            </span>
        </button>
    )
}
