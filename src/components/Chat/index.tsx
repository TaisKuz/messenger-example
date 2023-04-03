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
    messagePrefix,
    badge
  } = chat;

  return (
    <ChatStyled>
      <BorderTop />
      <ContentWrapper>
        <UserAvatar img={img} />
        <TextContent>
          <UserName>{name}</UserName>
          <MessageWrapper>
            {messagePrefix && <MessagePrefix>Вы: </MessagePrefix>}
            <Message>{message}</Message>
          </MessageWrapper>
        </TextContent>
        <DateTime>{date}</DateTime>
        {badge &&
          <Badge>
            <BadgeText>{badge}</BadgeText>
          </Badge>
        }
      </ContentWrapper>
    </ChatStyled>
  );
}

export const ChatStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 310px;
  padding: 0 10px;
`;

export const BorderTop = styled.div`
  width: calc(100% - 20px);
  height: 1px;
  background-color: #EAEAEA;
`;

export const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  flex-shrink: 0;
  padding: 12px 0;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
`;

export const MessageWrapper = styled.div`
  width: 100%;
  max-width: 193px;
  text-overflow: ellipsis;
  max-height: 30px;
  overflow: hidden;
`;

export const MessagePrefix = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #1E1E1E;
`;

export const Message = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #999999;
`;

export const UserName = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 13px;
  color: #999999;
`;

export const DateTime = styled.div`
  position: absolute;
  right: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 13px;
  color: #999999;
`;

export const Badge = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  right: 0;
  bottom: 10px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background-color: #3369F3;
  border-radius: 50%;
`;

export const BadgeText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #FFFFFF;
`;

export default Chat;
