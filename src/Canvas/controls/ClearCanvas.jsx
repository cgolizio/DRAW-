import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const StyledIconButton = styled(IconButton)`
  color: rgb(9,11,23);
`;

const ClearCanvas = ({ handleCanvasClear }) => (
    <StyledIconButton onClick={handleCanvasClear}>
      <DeleteRoundedIcon/>
    </StyledIconButton>
);

export default ClearCanvas;