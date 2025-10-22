import React, { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useTexture, useProgress } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import coralSet from '../assets/models/soft_coral_set.glb';
import treasureChest from '../assets/models/animated_treasure_chest.glb';
import seafloor from "../assets/img/seafloorText.png";
import { NavBar } from './NavBar3d.js';
import { About } from './About3d.js';
import { Projects } from './Projects3d.js';
import { Art } from './Art3d.js';
import { Contact } from './Contact3d.js';
import { Footer } from './Footer.js';
import FloatingBanner from './FloatingBanner.js';


// Floating particles component
function FloatingParticles() {
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;
        child.position.x += Math.sin(state.clock.elapsedTime * 0.3 + i * 2) * 0.001;
      });
    }
  });

  const particles = [];
  for (let i = 0; i < 30; i++) {
    particles.push(
      <mesh key={i} position={[
        (Math.random() - 0.5) * 25,
        Math.random() * 12 + 2,
        (Math.random() - 0.5) * 25
      ]}>
        <sphereGeometry args={[0.03]} />
        <meshBasicMaterial 
          color="#87CEEB" 
          transparent 
          opacity={0.4}
        />
      </mesh>
    );
  }

  return <group ref={particlesRef}>{particles}</group>;
}

// Interactive treasure chest component with X key control - split animation
function AnimatedTreasureChest() {
  const { scene, animations } = useGLTF(treasureChest);
  const chestRef = useRef();
  const mixerRef = useRef();
  const actionRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation constants
  const ANIMATION_DURATION = 4; // Total duration
  const HALF_DURATION = 2; // First half (open)

  // Initialize animation mixer
  useEffect(() => {
    if (scene && animations.length > 0) {
      // Create animation mixer
      mixerRef.current = new THREE.AnimationMixer(scene);
      
      // Get the animation
      actionRef.current = mixerRef.current.clipAction(animations[0]);
      
      // Set it to play once and clamp at the end
      actionRef.current.setLoop(THREE.LoopOnce);
      actionRef.current.clampWhenFinished = true;
      
      // Start with chest closed (time = 0)
      actionRef.current.time = 0;
      actionRef.current.paused = true;
      actionRef.current.play();
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [scene, animations]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'KeyX' && actionRef.current && !isAnimating) {
        event.preventDefault();
        toggleChest();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating, isOpen]);

  // Toggle chest open/close with 2-second segments
  const toggleChest = () => {
    if (!actionRef.current || isAnimating) return;

    setIsAnimating(true);
    
    if (!isOpen) {
      actionRef.current.time = 0;
      actionRef.current.timeScale = 1;
      actionRef.current.paused = false;
      
      // Stop at 2 seconds
      const checkTime = () => {
        if (actionRef.current.time >= HALF_DURATION) {
          actionRef.current.paused = true;
          actionRef.current.time = HALF_DURATION;
          setIsOpen(true);
          setIsAnimating(false);
        } else {
          requestAnimationFrame(checkTime);
        }
      };
      requestAnimationFrame(checkTime);
      
    } else {
      actionRef.current.time = HALF_DURATION;
      actionRef.current.timeScale = 1;
      actionRef.current.paused = false;
      
      // Stop at 4 seconds, then reset to 0
      const checkTime = () => {
        if (actionRef.current.time >= ANIMATION_DURATION) {
          actionRef.current.paused = true;
          actionRef.current.time = 0; // Reset to closed position
          setIsOpen(false);
          setIsAnimating(false);
        } else {
          requestAnimationFrame(checkTime);
        }
      };
      requestAnimationFrame(checkTime);
    }
  };

  // Update animation mixer each frame
  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  // Center the chest using bounding box
  useEffect(() => {
    if (scene && chestRef.current) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.set(-center.x, 0, -center.z);
      scene.scale.set(1.3, 1.3, 1.3);
      scene.rotation.set(0, Math.PI * 1.5, 0);
    }
  }, [scene]);

  return (
    <group ref={chestRef} position={[0, 0, 0]} castShadow>
      <primitive object={scene} />
      <pointLight 
        position={[0, 1, 0]} 
        color="#FFD700" 
        intensity={isOpen ? 1.2 : 0.5} 
        distance={8} 
      />
    </group>
  );
}

// Individual coral component
function CoralPiece({ coralName, position, rotation, scale }) {
  const { scene } = useGLTF(coralSet);
  const coralRef = useRef();

  // Add gentle swaying animation
  useFrame((state) => {
    if (coralRef.current) {
      const time = state.clock.elapsedTime;
      coralRef.current.rotation.z = Math.sin(time * 0.5 + position[0]) * 0.05;
      coralRef.current.rotation.x = Math.cos(time * 0.3 + position[2]) * 0.03;
    }
  });

  useEffect(() => {
    if (scene) {
      // Find the specific coral
      let targetCoral = null;
      scene.traverse((child) => {
        if (child.name === coralName && child.isMesh) {
          targetCoral = child;
        }
      });

      if (targetCoral && coralRef.current) {
        // Clear existing children
        while (coralRef.current.children.length > 0) {
          coralRef.current.remove(coralRef.current.children[0]);
        }
        
        // Clone and center the coral
        const coralClone = targetCoral.clone();
        const box = new THREE.Box3().setFromObject(coralClone);
        const center = box.getCenter(new THREE.Vector3());
        coralClone.position.set(-center.x, 0, -center.z);
        
        coralRef.current.add(coralClone);
      }
    }
  }, [scene, coralName]);

  return (
    <group 
      ref={coralRef}
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow
    />
  );
}

// Mouse-controlled camera component
function MouseControlledCamera({ children }) {
  const groupRef = useRef();
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Convert mouse X position to rotation (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      setMouseX(x * 0.3); // Limit rotation range
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth camera rotation based on mouse position
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

// Main scene component
function TreasureCoralScene({ 
  coralList = [
    'coral14_M_coral_0',
    'coral20_M_coral_01_0', 
    'coral10_M_coral_0',
    'coral22_M_coral_01_0',
    'Coral02_low1_M_coral_03_0',
    'coral25_M_coral_01_0'
  ]
}) {
  const floorTexture = useTexture(seafloor);

  // Create circular mask with feathered edges
  const circularMaterial = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.7, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    const alphaTexture = new THREE.CanvasTexture(canvas);
    
    return new THREE.MeshStandardMaterial({
      map: floorTexture,
      alphaMap: alphaTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [floorTexture]);

  // Position corals in a circle around the chest
  const coralPositions = useMemo(() => {
    const radius = 6;
    const positions = [];
    
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      positions.push({
        position: [
          Math.cos(angle) * radius,
          0,
          Math.sin(angle) * radius
        ],
        rotation: [0, angle + Math.PI, 0], // Face toward center
        scale: [1.3, 1, 1.3]
      });
    }
    
    return positions;
  }, []);

  return (
    <MouseControlledCamera>
      <group position={[0, -2, 0]}> {/* Lower the entire scene */}
        
        {/* Circular floor with feathered edges */}
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[12, 64]} />
          <primitive object={circularMaterial} attach="material" />
        </mesh>

        {/* Animated treasure chest in center */}
        <AnimatedTreasureChest />

        {/* Six corals in a circle */}
        {coralList.slice(0, 6).map((coralName, index) => (
          <CoralPiece
            key={index}
            coralName={coralName}
            position={coralPositions[index].position}
            rotation={coralPositions[index].rotation}
            scale={coralPositions[index].scale}
          />
        ))}

        {/* Floating particles */}
        <FloatingParticles />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[15, 15, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        
        {/* Additional atmospheric lighting */}
        <pointLight position={[-10, 8, -10]} color="#4682B4" intensity={0.3} />
        <pointLight position={[10, 8, 10]} color="#87CEEB" intensity={0.3} />
      </group>
    </MouseControlledCamera>
  );
}

function LoadingScreen() {
  const { progress, active } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smooth progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress(prev => {
        const target = progress;
        const diff = target - prev;
        if (Math.abs(diff) < 0.1) return target;
        return prev + diff * 0.1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [progress]);

  if (!active) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom, #003366, #000515)',
      zIndex: 1000,
      color: 'white',
      fontFamily: 'Centra, Arial, sans-serif'
    }}>
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '2rem',
        color: '#e2b935',
        fontWeight: '700',
        textShadow: '0 0 20px rgba(226, 185, 53, 0.5)'
      }}>
        Loading Background Elements...
      </h2>

      <div style={{
        width: '300px',
        height: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '2px solid rgba(226, 185, 53, 0.3)',
        boxShadow: '0 0 20px rgba(226, 185, 53, 0.2)'
      }}>
        {/* Progress bar fill */}
        <div style={{
          width: `${displayProgress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #e2b935, #ffd700)',
          transition: 'width 0.3s ease-out',
          boxShadow: '0 0 10px rgba(226, 185, 53, 0.8)',
          borderRadius: '8px'
        }} />
      </div>

      {/* Percentage text */}
      <p style={{
        marginTop: '1rem',
        fontSize: '1.2rem',
        color: '#e2b935',
        fontWeight: '500'
      }}>
        {Math.round(displayProgress)}%
      </p>

      {/* Add CSS animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

function TreasureCoralSceneWithLoading() {
  return (
    <Suspense fallback={null}>
      <TreasureCoralScene />
    </Suspense>
  );
}

// Main App component with Canvas wrapper
function ThreeDScene() {
  const canvasRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Loading Screen - shows while 3D scene loads */}
      <LoadingScreen />

      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -10 
      }}>
        <Canvas
          camera={{ position: [0, 10, 30], fov: 30 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: 'linear-gradient(to bottom, #003366, #000515)' }}
        >
          <TreasureCoralSceneWithLoading />
        </Canvas>
      </div>
      
      <div style={{ 
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh'
      }}>
        <nav style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 15,
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.9)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'blur(10px)',
          transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'
        }}>
          <NavBar />
        </nav>
        <div>
          <FloatingBanner text="Hello! I'm Daniel Vesga" />
          <About />
          <Projects />
          <Art />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ThreeDScene;