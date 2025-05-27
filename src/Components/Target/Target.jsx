import { useGLTF } from '@react-three/drei'
import React from 'react'

const Target = () => {

    const { scene } = useGLTF() 
  return (
    <div>Target</div>
  )
}

export default Target