import styled from 'styled-components';
import Chat from 'components/Chat';
import { ChatI } from 'App.types';

function ChatList(chats: Array<ChatI>) {
  return (
    <ChatListStyled>
      {
        chats.map((chat: ChatI) =>
          <Chat key={chat.img} chat={chat} />
        )
      }
    </ChatListStyled>
  );
}

export const ChatListStyled = styled.div`
  width: 24.21875%;
  min-width: 310px;
  border-right: 1px solid #EAEAEA;
  overflow: hidden;
`;

export default ChatList;
