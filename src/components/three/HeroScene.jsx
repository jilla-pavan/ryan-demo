import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import ConnectorObject from './ConnectorObject'
import CanvasErrorBoundary from './CanvasErrorBoundary'

function FallbackGraphic() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 400 300" className="w-full max-w-md" aria-hidden="true">
        <rect x="20" y="120" width="60" height="60" rx="8" fill="#0F172A" />
        <rect x="320" y="120" width="60" height="60" rx="8" fill="#0F172A" />
        <path d="M80 150 C 160 100, 240 200, 320 150" stroke="#2563EB" strokeWidth="4" fill="none" />
        <path d="M80 160 C 160 210, 240 110, 320 160" stroke="#0F766E" strokeWidth="4" fill="none" />
        <path d="M80 145 C 160 90, 240 190, 320 145" stroke="#D4A017" strokeWidth="3" fill="none" />
      </svg>
    </div>
  )
}

export default function HeroScene() {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    setReady(true)
  }, [])

  if (!ready) return <div className="h-full w-full" aria-hidden="true" />

  return (
    <div className="h-full w-full" role="img" aria-label="3D rendering of a cable harness connector assembly">
      <CanvasErrorBoundary fallback={<FallbackGraphic />}>
        {hasError ? (
          <FallbackGraphic />
        ) : (
          <Canvas
            camera={{ position: [0, 0, 6], fov: 40 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            onError={() => setHasError(true)}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[4, 4, 4]} intensity={1.2} />
            <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#2563EB" />
            <Suspense fallback={null}>
              <Float speed={reduceMotion ? 0 : 1.4} rotationIntensity={reduceMotion ? 0 : 0.25} floatIntensity={reduceMotion ? 0 : 0.6}>
                <ConnectorObject reduceMotion={reduceMotion} />
              </Float>
              <Environment preset="city" environmentIntensity={0.35} />
            </Suspense>
          </Canvas>
        )}
      </CanvasErrorBoundary>
    </div>
  )
}
