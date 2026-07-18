import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Stylized connector + cable harness — built from primitives so no
// external model assets are required. Kept low-poly for performance.
function CableStrand({ curve, color, radius = 0.045, offset = 0 }) {
  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 64, radius, 8, false)
  }, [curve])

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
    </mesh>
  )
}

export default function ConnectorObject({ reduceMotion = false }) {
  const group = useRef()

  const curves = useMemo(() => {
    const make = (yOffset, zOffset) =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.6, yOffset, zOffset),
        new THREE.Vector3(-1.2, yOffset * 1.4, zOffset * 0.6),
        new THREE.Vector3(0, yOffset * 0.6, 0),
        new THREE.Vector3(1.2, -yOffset * 0.8, -zOffset * 0.4),
        new THREE.Vector3(2.4, yOffset * 0.3, -zOffset),
      ])
    return [
      { curve: make(0.5, 0.3), color: '#2563EB' },
      { curve: make(-0.2, -0.4), color: '#0F766E' },
      { curve: make(0.15, 0.6), color: '#94A3B8' },
      { curve: make(-0.45, 0.1), color: '#D4A017' },
    ]
  }, [])

  useFrame((state, delta) => {
    if (!group.current || reduceMotion) return
    group.current.rotation.y += delta * 0.18
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
  })

  return (
    <group ref={group}>
      {curves.map((c, i) => (
        <CableStrand key={i} curve={c.curve} color={c.color} />
      ))}

      {/* Connector housing — left */}
      <mesh position={[-2.6, 0, 0]}>
        <boxGeometry args={[0.7, 1.1, 0.9]} />
        <meshStandardMaterial color="#0F172A" roughness={0.35} metalness={0.3} />
      </mesh>
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[-2.95, 0.4 - i * 0.16, 0.2]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.035, 0.035, 0.3, 8]} />
          <meshStandardMaterial color="#D4A017" roughness={0.2} metalness={0.7} />
        </mesh>
      ))}

      {/* Connector housing — right */}
      <mesh position={[2.6, 0, -0.2]}>
        <boxGeometry args={[0.7, 1.1, 0.9]} />
        <meshStandardMaterial color="#0F172A" roughness={0.35} metalness={0.3} />
      </mesh>
    </group>
  )
}
