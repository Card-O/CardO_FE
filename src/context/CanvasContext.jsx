import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (!canvas) { // 이미 캔버스가 생성되지 않았을 때만 생성
      const newCanvas = new fabric.Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });
      setCanvas(newCanvas);
    }

    return () => {
      if (canvas) canvas.dispose();
    };
  }, [canvasRef]);

  return (
    <CanvasContext.Provider value={{ canvas, canvasRef }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);

