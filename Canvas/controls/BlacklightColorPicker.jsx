import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const blacklightColors = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF3333',
  orange: '#FF6619',
  yellow: '#FFFF19',
  green: '#55FF00',
  lightBlue: '#19FFFF',
  blue: '#3333FF',
  pink: '#FF19FF',
  purple: '#AA00FF'
};

const mutedColors = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#990000',
  orange: '#CC4400',
  yellow: '#CCCC00',
  green: '#339900',
  lightBlue: '#0095B3',
  blue: '#0000B3',
  pink: '#B300B3',
  purple: '#440066'
};

const StyledColorSwatch = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: ${props => props.swatch};
  /* border: 1px solid ${({ theme }) => theme.text}; */
  border-radius: 100%;
  outline: none;
  border: none;
  :focus-within{
    box-shadow: 0 50px 15px 7px ${props => props.swatch};;
  };
  :hover{
    transform: scale(1.3);
  };
`;

const BlacklightColorPicker = ({ currentColor, setCurrentColor, blacklightIsOn, setCurrentShadow }) => {

  const colorNames = [
    'yellow',
    'black',
    'blue',
    'orange',
    'lightBlue',
    'purple',
    'red',
    'white',
    'pink',
    'green',
  ];

  const handleColorClick = (e) => {
    const { value } = e.target;
    setCurrentColor(() => value);
    blacklightIsOn && setCurrentShadow(() => value);
  };

  useEffect(() => {
    const getKeyByValue = () => Object.keys(mutedColors).find(key => mutedColors[key] === currentColor);
    const currentColorName = getKeyByValue();
    setCurrentShadow(() => blacklightColors[`${currentColorName}`])
  }, [blacklightIsOn, currentColor]);

  useEffect(() => {
    blacklightIsOn && setCurrentColor('ghostwhite');
  }, [blacklightIsOn, currentColor]);

  useEffect(() => {
    !blacklightIsOn && setCurrentShadow(currentColor);
  }, [blacklightIsOn, currentColor]);

  // useEffect(() => {
  //   !blacklightIsOn
  //     ? setCurrentColorObj(mutedColors)
  //     : setCurrentColorObj(blacklightColors);
  // }, [blacklightIsOn]);

  return (
    <div className='swatch-container'>
      {
        colorNames.map((colorName, i) => {
          return (
            <StyledColorSwatch
              key={i}
              swatch={!blacklightIsOn ? mutedColors[colorName] : blacklightColors[colorName]}
              value={!blacklightIsOn ? mutedColors[colorName] : blacklightColors[colorName]}
              onClick={handleColorClick}
              style={{
                order: `${i+1}`,
                cursor: 'pointer',
              }}
            />
          );
        })
      }
    </div>
  )
};

export default BlacklightColorPicker;
