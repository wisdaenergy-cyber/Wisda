"use client"
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      // Updates position to match the system cursor tip
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Detect hover state for clickable elements
      const target = e.target;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
                          target.tagName.toLowerCase() === 'a' ||
                          target.tagName.toLowerCase() === 'button' ||
                          target.closest('a') ||
                          target.closest('button');
      setIsPointer(isClickable);
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseenter', showCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseenter', showCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[9999] hidden sm:block"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)' 
      }}
    >
      <div className={`relative w-11 h-11 flex items-center justify-center transition-transform duration-200 ease-out ${isPointer ? 'scale-160' : 'scale-120'}`}>
        
        {/* Outer Ring */}
        <div className="absolute inset-0 border-[1.5px] border-[#8EC643] rounded-full opacity-100"></div>
        
        {/* Inner Dot - Centered and made larger (w-3 h-3) so the cursor tip overlaps it */}
        <div className="absolute top-8/16 left-4/8 w-2 h-2 bg-[#8EC643] rounded-full -translate-x-1/2 -translate-y-1/2"></div> 
        
      </div>
    </div>
  );
}