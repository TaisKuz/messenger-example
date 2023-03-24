import React from 'react';
import styled from 'styled-components';
import ChatList from 'components/ChatList';
import { DataI } from 'App.types';

function LeftSide(data: DataI) {
  const { chats } = data;
  return (
    <LeftSideStyled>
      <p>Профиль</p>
      <p>Поиск</p>
      <ChatList chats={chats} />
    </LeftSideStyled>
  );
}

export const LeftSideStyled = styled.div`
  width: 24.21875%;
  min-width: 310px;
  border-right: 1px solid #EAEAEA;
  overflow: hidden;
`;

export default LeftSide;
