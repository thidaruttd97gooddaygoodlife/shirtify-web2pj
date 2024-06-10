"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import Head from 'next/head';
import { SketchPicker } from 'react-color';

function ShirtModel({ texture, color }) {
  const ref = useRef();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/Shirt.mtl', (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('/Shirt.obj', (object) => {
        object.scale.set(0.05, 0.05, 0.05);
        object.position.set(0, -1, 0);

        // Apply texture if available, otherwise apply color
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (texture) {
              child.material.map = texture;
              child.material.needsUpdate = true;
            } else {
              child.material.map = null; // Remove texture if any
              child.material.color.set(color);
              child.material.needsUpdate = true;
            }
          }
        });

        if (ref.current) {
          ref.current.clear();
          ref.current.add(object);
        }
      }, undefined, (error) => {
        console.error('Error loading OBJ:', error);
      });
    }, undefined, (error) => {
      console.error('Error loading MTL:', error);
    });
  }, [texture, color]);

  // Animation or interaction logic
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <group ref={ref} />;
}

export default function Home() {
  const [texture, setTexture] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const textureLoader = new TextureLoader();
        textureLoader.load(e.target.result, (loadedTexture) => {
          setTexture(loadedTexture);
        }, undefined, (error) => {
          console.error('Error loading texture:', error);
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (color) => {
    setTexture(null); // Reset texture when color is picked
    setColor(color.hex);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-300">
      <Head>
        <title>Shirt Designer</title>
      </Head>
      <div className="bg-pink-200 p-8 rounded-lg shadow-lg">
        <Canvas style={{ height: '600px', width: '600px' }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ShirtModel texture={texture} color={color} />
          <OrbitControls />
        </Canvas>
        <div className="mt-4 flex justify-around">
          <button className="p-2 bg-gray-200 rounded" onClick={() => setShowColorPicker(!showColorPicker)}>
            Color Picker
          </button>
          <label className="p-2 bg-gray-200 rounded cursor-pointer">
            Image Upload
            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
          </label>
          <button className="p-2 bg-gray-200 rounded">Pencil Tool</button>
        </div>
        {showColorPicker && (
          <div className="mt-4">
            <SketchPicker color={color} onChange={handleColorChange} />
          </div>
        )}
      </div>
    </div>
  );
}
