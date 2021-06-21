import React, { useState } from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded';
import styled from 'styled-components';

const SavedColorIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background: ${props => props.color};
`;

const SpeedDialComponent = (props) => {
  const [open, setOpen] = useState(false);

  const {
    favorites,
    setCurrentColor,
    heartIcon,
    fillHeartIcon
  } = props;

  let actions = favorites.filter(color => color !== null).map((favColor, i) => (
      { icon: <SavedColorIcon key={i} color={favColor}/>, name: `${favColor}` }
    ));

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      ariaLabel="Saved Colors"
      icon={<BookmarksRoundedIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.length > 0 && actions.map((action) => {
        if (action.name === null || action.name.length === 0) {
          return <div style={{ display: 'none', visibility: 'hidden' }}></div>
        } else {
          return (<SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              setCurrentColor(() => action.name);
              !heartIcon && fillHeartIcon(true);
            }}
          />);
        }
      })}
    </SpeedDial>
  );
}

export default SpeedDialComponent;