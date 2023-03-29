import { FC } from 'react';
import styled from 'styled-components';
import UserAvatar from 'components/UserAvatar';
import { ChatI } from 'App.types';

interface ChatProps {
  chat: ChatI;
}

const Chat: FC<ChatProps> = ({ chat }) => {
  const {
    img,
    name,
    date,
    message,
    badge
  } = chat;

  return (
    <ChatStyled>
      <BorderTop />
      <div>{name}</div>
      <div>{message}</div>
      <div>{date}</div>
      <div>{badge}</div>
      <UserAvatar img={img} />
    </ChatStyled>
  );
}

export const ChatStyled = styled.div`
  width: 100%;
`;

export const BorderTop = styled.div`
  width: 100%;
  height: 1px;
  margin: 2px 10px;
  background-color: #EAEAEA;
`;

export default Chat;
