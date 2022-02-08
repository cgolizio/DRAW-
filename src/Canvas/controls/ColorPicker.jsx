import React, { useState } from 'react';
import AddToFavorites from './AddToFavorites.jsx';
import SpeedDialComponent from './SpeedDial.jsx';
import ClearFavorites from './ClearFavorites.jsx';

const ColorPicker = ({ currentColor, setCurrentColor }) => {
  const [ heartIcon, fillHeartIcon ] = useState(false);
  const [ favorites, addFavorite ] = useState([window.localStorage.getItem('favorites')] || []);

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
        {/* <label htmlFor='swatch-container-local'>Choose a color</label> */}
        <label htmlFor='swatch-container-local' style={{fontSize: '2rem', color: `${currentColor}`}}>{currentColor}</label>
        <input
          type='color'
          id='color-picker'
          name='color-picker'
          value={`${currentColor}`}
          onChange={handleColorChange}
          style={{
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none'
          }}
        ></input>
        <AddToFavorites
          heartIcon={heartIcon}
          fillHeartIcon={fillHeartIcon}
          favorites={favorites}
          addFavorite={addFavorite}
          currentColor={currentColor}
        />
        <div id="speed-dial-container">
          <SpeedDialComponent
            favorites={favorites}
            addFavorite={addFavorite}
            setCurrentColor={setCurrentColor}
            heartIcon={heartIcon}
            fillHeartIcon={fillHeartIcon}
          />
        </div>
        <div id="clear-favs-btn">
          <ClearFavorites
            currentColor={currentColor}
            favorites={favorites}
            addFavorite={addFavorite}
            fillHeartIcon={fillHeartIcon}
          />
        </div>
      </div>
    </>
  )
};

export default ColorPicker;
