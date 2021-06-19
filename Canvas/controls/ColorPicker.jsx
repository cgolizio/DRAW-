import React, { useState } from 'react';
import AddToFavorites from './AddToFavorites.jsx';
import SpeedDialComponent from '../../MUI/SpeedDial.jsx';

const ColorPicker = ({ currentColor, setCurrentColor }) => {
  const [ heartIcon, fillHeartIcon ] = useState(false);
  const [ favorites, addFavorite ] = useState([]);

  const handleColorChange = ({ nativeEvent }) => {
    nativeEvent.preventDefault();
    if (heartIcon === true) {
      fillHeartIcon(() => false);
    }
    const { value } = nativeEvent.target;
    setCurrentColor(() => value);
  };

  return (
    <>
      <div id='swatch-container-local'>
        <label htmlFor='swatch-container-local'>Choose a color</label>
        <input
          type='color'
          id='color-picker'
          name='color-picker'
          value={`${currentColor}`}
          onChange={handleColorChange}
          style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }}
        ></input>
        <AddToFavorites
          heartIcon={heartIcon}
          fillHeartIcon={fillHeartIcon}
          favorites={favorites}
          addFavorite={addFavorite}
          currentColor={currentColor}
        />
        <SpeedDialComponent favorites={favorites} setCurrentColor={setCurrentColor} />
      </div>
    </>
  )
};

export default ColorPicker;
