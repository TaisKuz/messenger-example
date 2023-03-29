import React, { FC } from 'react';
import styled from 'styled-components';
import LeftSide from 'components/LeftSide';
import { DataI } from 'App.types';

interface LayoutMainProps {
  data: DataI;
}

const LayoutMain: FC<LayoutMainProps> = ({ data }) => {
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
