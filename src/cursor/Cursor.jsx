import React, { useEffect, useState } from 'react';
import './Cursor.css'; // Import the CSS for your custom cursor

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({ top: '0px', left: '0px' });
    
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({ top: `${e.clientY}px`, left: `${e.clientX}px` });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ top: cursorStyle.top, left: cursorStyle.left }}
    />
  );
};

export default Cursor;
