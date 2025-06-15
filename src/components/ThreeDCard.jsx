import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import auctionCardImg from '@/assets/images/auction-card-img.png'
import biddingCardImg from '@/assets/images/bidding-img.png'

const GOLDENRATIO = 1.61803398875
const IMAGE_COUNT = 9 // Configurable image count

// Move imageIds array here for easier access and modification
const imageIds = [
 // Local image
  '416430',
  '310452',
  '327482',
  '325185',
  '358574',
  '227675',
  '911738',
  '1738986',
  auctionCardImg
].slice(0, IMAGE_COUNT)

const pexel = (id) =>
  typeof id === 'string' && !id.includes('/')
    ? `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
    : id

// Calculate positions and rotations based on image count
const calculateImageProperties = (index, totalImages) => {
  // Front image
  if (index === 0) {
    return { position: [0, 0, 1.5], rotation: [0, 0, 0] }
  }

  const isEven = index % 2 === 0
  const side = isEven ? 1 : -1 // Right side: 1, Left side: -1
  const position = Math.floor((index + 1) / 2)

  // Back images
  if (position === 1) {
    return {
      position: [side * 0.8, 0, -0.6],
      rotation: [0, 0, 0]
    }
  }

  // Side images
  const xOffset = side * (1.75 + (position - 2) * 0.2)
  const zOffset = 0.25 + (position - 2) * 1.25

  return {
    position: [xOffset, 0, zOffset],
    rotation: [0, (-side * Math.PI) / 2.5, 0]
  }
}

const ThreeDCard = () => {
  const images = imageIds.map((id, index) => {
    const { position, rotation } = calculateImageProperties(index, IMAGE_COUNT)
    return {
      position,
      rotation,
      url: pexel(id)
    }
  })

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ fov: 70, position: [0, 2, 15] }}
      style={{
        height: 'calc(100vh - 80px)',
        width: '100%',
        position: 'relative',
        top: '80px',
        left: 0,
        overflow: 'hidden'
      }}>
      <color attach="background" args={['#191920']} />
      <fog attach="fog" args={['#191920', 0, 15]} />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </group>
      <Environment preset="city" />
    </Canvas>
  )
}

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })

  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  useCursor(hovered)

  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  })

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}

export default ThreeDCard
