import React from 'react'
import { Canvas } from '@react-three/fiber';
import Box from './comps/Box';
import { OrbitControls } from '@react-three/drei';
import Circle from './comps/Circle';
import Iphone from "./comps/Iphone"



export default function App() {
  return (
    <div>
      <Canvas style={{height:"500px"}}>
      <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
      <Box/>
      </Canvas>
      <Canvas style={{height:"500px"}}>
      <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
      <Circle/>
      </Canvas>
      <Canvas style={{height:"500px"}}>
      <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
      <Iphone/>
      </Canvas>
      </div>
  )
}
