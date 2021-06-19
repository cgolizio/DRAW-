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

const StyledFavorite = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: ${props => props.color};
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

  const addToFavorites = (e) => {
    e.preventDefault();
    fillHeartIcon((prev) => !prev);
  };

  const saveToLocalStorage = () => {
    window.localStorage.setItem('favorites', favorites);
  };

  // ! USE EFFECTS ! //
    useEffect(() => {
      toggleStatus(() => heartIcon ? 'liked' : 'not-liked');
    }, [heartIcon]);

    useEffect(() => {
      window.localStorage.setItem('favorites', favorites);
    }, []);

    useEffect(() => {
      saveToLocalStorage(currentColor);
    }, [currentColor]);

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
          return addFavorite((prev) => [currentColor, ...prev]);
        }
      } else {
        if (status === 'liked') {
          addFavorite(() => [currentColor]);
        }
      }
    }, [status]);

    // useEffect(() => {
    //   if (favorites.includes(currentColor) && !heartIcon){
    //     fillHeartIcon(true);
    //   }
    // }, [currentColor]);

  return (
    <>
      <StyledHeartIcon onClick={addToFavorites}>
        <FavoriteRoundedIcon className={status} />
      </StyledHeartIcon>
    </>
  )
};

export default AddToFavorites;
