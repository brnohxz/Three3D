import React, {useRef} from 'react';
import './App.scss';
import {Canvas, useFrame} from "react-three-fiber";
import {MeshProps} from "@react-three/fiber/dist/declarations/src/three-types";

const Box = () => {
    const mesh = useRef<MeshProps>(null)
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        }
    })
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]}/>
            <meshStandardMaterial attach='material' color='lightblue'/>
        </mesh>
    )
}


function App() {
    return (
        // <div className="App">
        <Canvas>
            <ambientLight intensity={0.3}/>
            <Box/>
        </Canvas>
        // </div>
    );
}

export default App;
