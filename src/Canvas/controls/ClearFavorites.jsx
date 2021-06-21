import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';

const StyledIconButton = styled(IconButton)`
  color: rgb(9,11,23);
`;

const ClearFavorites = (props) => {
  const {
    currentColor,
    favorites,
    addFavorite,
    fillHeartIcon
  } = props;

  const handleClick = () => {
    if (favorites.includes(currentColor)) {
      fillHeartIcon(false);
    }

    window.localStorage.removeItem('favorites');
    addFavorite(() => [null]);
  };

  return (
    <StyledIconButton onClick={handleClick}>
      <DeleteSweepRoundedIcon/>
    </StyledIconButton>
  );
};

export default ClearFavorites;