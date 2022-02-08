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
    color: rgb(9,11,23);
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
        <IconButtonStyled
          onClick={decreaseStrokeSize}
        >
          <RemoveRoundedIcon/>
        </IconButtonStyled>
        <StrokeSizeStyled
            style={{
              height: `${strokeSize}px`,
              width: `${strokeSize}px`,
              backgroundColor: `${currentColor}`
            }}
          />
        <IconButtonStyled
          onClick={increaseStrokeSize}
        >
          <AddRoundedIcon/>
        </IconButtonStyled>
        <IconButtonStyled
          onClick={resetStrokeSize}
        >
          <RestoreIcon/>
        </IconButtonStyled>
      </div>
    </>
  )
};

export default StrokeSize;
