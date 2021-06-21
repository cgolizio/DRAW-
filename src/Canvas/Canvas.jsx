import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorPicker from './controls/ColorPicker.jsx';
import StrokeSize from './controls/StrokeSize.jsx';
import ClearCanvas from './controls/ClearCanvas.jsx';

const CanvasStyled = styled.canvas`
  border-top: 2px solid ${({ theme }) => theme.text};
`;

const Canvas = ({ blacklightIsOn }) => {
  const [ isDrawing, setIsDrawing ] = useState(false);
  const [ strokeSize, setStrokeSize ] = useState(5);
  const [ currentColor, setCurrentColor ] = useState('#000000');
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const handleCanvasClear = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);

    setIsDrawing(true);
  };

  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext('2d');
    context.scale(2,2);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    contextRef.current = context;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = currentColor;
    context.lineWidth = strokeSize;
  }, [strokeSize, currentColor]);

  return (
    <>
      <div className='controls-container'>
        <StrokeSize
          strokeSize={strokeSize}
          setStrokeSize={setStrokeSize}
          currentColor={currentColor}
        />
        <ColorPicker
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <ClearCanvas handleCanvasClear={handleCanvasClear} />
      </div>
      <CanvasStyled
        id='canvas'
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
    </>
  )
};

export default Canvas;