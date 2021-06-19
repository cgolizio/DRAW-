import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorPicker from './controls/ColorPicker.jsx';
import StrokeSize from './controls/StrokeSize.jsx';
// import BlacklightColorPicker from './controls/BlacklightColorPicker.jsx';

const CanvasStyled = styled.canvas`
  border-top: 2px solid ${({ theme }) => theme.text};
`;

const Canvas = ({ blacklightIsOn }) => {
  const [ isDrawing, setIsDrawing ] = useState(false);
  const [ strokeSize, setStrokeSize ] = useState(5);
  const [ currentColor, setCurrentColor ] = useState('#000000');
  const [ currentShadow, setCurrentShadow ] = useState('');
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

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

  // useEffect(() => {
  //   isDrawing && setRecentColors((prev) => [currentColor, ...prev]);
  // }, [isDrawing, currentColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext('2d');
    // context.scale(2.2);
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
    // if (blacklightIsOn) {
    //   context.shadowOffsetX = 0;
    //   context.shadowOffsetY = 0;
    //   context.shadowBlur=8;
    //   context.shadowColor=currentShadow;
    // } else {
    //   context.shadowColor=currentColor;
    //   context.shadowBlur=0;
    // }
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
        {/* <BlacklightColorPicker
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          blacklightIsOn={blacklightIsOn}
          setCurrentShadow={setCurrentShadow}
        /> */}
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