import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const StyledHeartIcon = styled(IconButton)`
  cursor: pointer;
  :hover{
    transform: scale(1.3);
  }
  .liked{
    color: #FF3333;
  }
  .not-liked{
    color: ${({ theme }) => theme.text};
  }
`;

const AddToFavorites = (props) => {
  const [ status, toggleStatus ] = useState('not-liked');

  const {
    heartIcon,
    fillHeartIcon,
    favorites,
    addFavorite,
    currentColor,
  } = props;

  const saveToLocalStorage = (favs) => {
    window.localStorage.setItem('favorites', JSON.stringify(favs));
  };

  useEffect(() => {
    let localFavorites = [];
    const storedFavorites = window.localStorage.getItem('favorites');
    localFavorites = JSON.parse(storedFavorites);
    if (localFavorites !== null) {
      saveToLocalStorage(() => localFavorites);
      addFavorite(() => localFavorites);
    }
  }, [addFavorite]);

  useEffect(() => {
    saveToLocalStorage(favorites);
  }, [favorites]);

  const addToFavorites = (e) => {
    e.preventDefault();
    fillHeartIcon((prev) => !prev);
  };

  useEffect(() => {
    toggleStatus(() => heartIcon ? 'liked' : 'not-liked');
  }, [heartIcon]);

  useEffect(() => {
    if (favorites.length > 0) {
      if (status === 'not-liked' && favorites.includes(currentColor)) {
        return addFavorite((prev) => {
          const currentIndex = prev.indexOf(currentColor);
          prev.splice(currentIndex, 1);
          return [...prev];
        });
      }
      if (status === 'liked' && !favorites.includes(currentColor)) {
        return addFavorite((prev) => [currentColor, ...favorites]);
      }
    } else {
      if (status === 'liked') {
        addFavorite(() => [currentColor]);
      }
    }
  }, [status, addFavorite, currentColor, favorites]);

  return (
    <StyledHeartIcon onClick={addToFavorites}>
      <FavoriteRoundedIcon className={status} />
    </StyledHeartIcon>
  )
};

export default AddToFavorites;