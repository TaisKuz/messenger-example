import React from 'react';
import styled from 'styled-components';
import LeftSide from 'components/LeftSide';
import { DataI } from 'App.types';

function LayoutMain(data: DataI) {
  return (
    <LayoutMainWrapper>
      <LeftSide data={data} />
    </LayoutMainWrapper>
  );
}

export const LayoutMainWrapper = styled.div`
  color: black;
`;

export default LayoutMain;
