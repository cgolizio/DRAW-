import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import RestoreIcon from '@material-ui/icons/Restore';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';


  const StrokeSizeStyled = styled.div`
    border-radius: 100%;
    margin-left: 2%;
  `;

  const IconButtonStyled = styled(IconButton)`
    color: ${({ theme }) => theme.text};
    position: static;
  `;

const StrokeSize = ({ strokeSize, setStrokeSize, currentColor }) => {

  const increaseStrokeSize = () => {
    setStrokeSize((prev) => prev + 1);
  };

  const decreaseStrokeSize = () => {
    if (strokeSize > 1) {
      setStrokeSize((prev) => prev - 1);
    } else {
      setStrokeSize(1);
    }
  };

  const resetStrokeSize = () => {
    setStrokeSize(5);
  };

  return (
    <>
      <div id='stroke-size-btn-container'>
        <label htmlFor='stroke-size-btn-container'>Change brush size</label>
        <IconButtonStyled
          onClick={decreaseStrokeSize}
        >
          <RemoveRoundedIcon/>
        </IconButtonStyled>
        <IconButtonStyled
          onClick={resetStrokeSize}
        >
          <RestoreIcon/>
        </IconButtonStyled>
        <IconButtonStyled
          onClick={increaseStrokeSize}
        >
          <AddRoundedIcon/>
        </IconButtonStyled>
        <StrokeSizeStyled
          style={{
            height: `${strokeSize}px`,
            width: `${strokeSize}px`,
            backgroundColor: `${currentColor}`
          }}
        />
      </div>
    </>
  )
};

export default StrokeSize;
