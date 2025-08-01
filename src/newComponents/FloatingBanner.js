import React, { useState, useEffect, useRef } from 'react';

const FloatingLettersBanner = ({ text = "YOUR NAME", className = "" }) => {
  const containerRef = useRef(null);
  const [letters, setLetters] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef();
  const lastMouseMoveRef = useRef(Date.now());

  // Initialize letters with positions
  useEffect(() => {
    const initLetters = text.split('').map((char, index) => ({
      char,
      id: index,
      originalX: 0,
      originalY: 0,
      currentX: 0,
      currentY: 0,
      velocityX: 0,
      velocityY: 0,
      isSpace: char === ' ',
      lastInteraction: 0
    }));
    setLetters(initLetters);
  }, [text]);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    lastMouseMoveRef.current = Date.now();
  };

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now();
      const timeSinceMouseMove = currentTime - lastMouseMoveRef.current;
      
      setLetters(prevLetters => 
        prevLetters.map(letter => {
          if (letter.isSpace) return letter;

          // Get letter element to calculate its position
          const letterElement = document.getElementById(`letter-${letter.id}`);
          if (!letterElement) return letter;

          const letterRect = letterElement.getBoundingClientRect();
          const containerRect = containerRef.current?.getBoundingClientRect();
          
          if (!containerRect) return letter;

          const letterCenterX = letterRect.left - containerRect.left + letterRect.width / 2;
          const letterCenterY = letterRect.top - containerRect.top + letterRect.height / 2;

          // Calculate distance from mouse to letter
          const dx = mousePos.x - letterCenterX;
          const dy = mousePos.y - letterCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let forceX = 0;
          let forceY = 0;
          let newLastInteraction = letter.lastInteraction;

          // Only apply mouse repulsion if mouse moved recently
          if (timeSinceMouseMove < 100) {
            // Repulsion force (stronger when closer)
            const maxDistance = 140;
            const force = Math.max(0, (maxDistance - distance) / maxDistance);
            const repulsionStrength = 60;

            if (distance < maxDistance && distance > 0) {
              forceX = -(dx / distance) * force * repulsionStrength;
              forceY = -(dy / distance) * force * repulsionStrength;
              newLastInteraction = currentTime;
            }
          }

          // Check if letter is displaced from original position
          const displacementDistance = Math.sqrt(letter.currentX * letter.currentX + letter.currentY * letter.currentY);
          const isDisplaced = displacementDistance > 0.5; // Threshold for considering "displaced"
          const timeSinceInteraction = currentTime - newLastInteraction;
          const shouldReturnHome = timeSinceInteraction > 1000; // Return after 1 second of no interaction

          // Spring back to original position
          let springStrength = 0.05;
          let damping = 0.9;
          
          // If displaced and should return home, use stronger spring force
          if (isDisplaced && shouldReturnHome) {
            springStrength = 0.10;
            damping = 0.9;
          }
          
          const springForceX = -letter.currentX * springStrength;
          const springForceY = -letter.currentY * springStrength;

          // Update velocity
          const newVelocityX = (letter.velocityX + forceX + springForceX) * damping;
          const newVelocityY = (letter.velocityY + forceY + springForceY) * damping;

          // Update position
          let newCurrentX = letter.currentX + newVelocityX;
          let newCurrentY = letter.currentY + newVelocityY;

          // Snap to original position if very close and no recent interaction
          if (shouldReturnHome && Math.abs(newCurrentX) < 0.1 && Math.abs(newCurrentY) < 0.1 && Math.abs(newVelocityX) < 0.1 && Math.abs(newVelocityY) < 0.1) {
            newCurrentX = 0;
            newCurrentY = 0;
          }

          return {
            ...letter,
            currentX: newCurrentX,
            currentY: newCurrentY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
            lastInteraction: newLastInteraction
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return (
    <section className="banner" id="home">
        <div 
          ref={containerRef}
          className={`relative w-full flex items-center justify-center cursor-none ${className}`}
          onMouseMove={handleMouseMove}
          style={{ 
            fontFamily: 'Centra, Arial, sans-serif',
            overflow: 'visible',
            height: '150px',
            minHeight: '150px',
            padding: '40px 20px',
            marginTop: '80px',
            marginBottom: '40px'
          }}
        >
          <div 
            className="flex items-center justify-center font-bold text-center"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '0.15em',
              lineHeight: '1',
              justifyContent: 'center',
              width: '100%',
              fontWeight: '700',
              color: '#ede8c1'
            }}
          >
            {letters.map((letter) => (
              <span
                key={letter.id}
                id={`letter-${letter.id}`}
                className="inline-block transition-none select-none"
                style={{
                  transform: `translate(${letter.currentX}px, ${letter.currentY}px)`,
                  textShadow: '0 0 20px rgba(177, 165, 70, 0.8), 0 0 40px rgba(177, 165, 70, 0.4), 0 0 60px rgba(177, 165, 70, 0.2)',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
                  willChange: 'transform',
                  marginRight: letter.isSpace ? '0.1em' : '0',
                  minWidth: letter.isSpace ? '0.2em' : 'auto',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
              >
                {letter.isSpace ? '' : letter.char}
              </span>
            ))}
          </div>
        </div>
    </section>
  );
};

export default FloatingLettersBanner;