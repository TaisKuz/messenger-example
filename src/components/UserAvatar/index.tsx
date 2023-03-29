import { FC } from 'react';
import styled from 'styled-components';

interface UserAvatarProps {
  img?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ img }) => {
  const withAvatar = !(img === "" && img === null);

  return (
      <UserAvatarStyled >
        {withAvatar && <UserImage src={img} />}
      </UserAvatarStyled>
  );
}

export const UserAvatarStyled = styled.div`
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EFEFEF;
  border-radius: 50%;
`;

export const UserImage = styled.img`
  width: 100%;
  max-width: 47px;
  max-height: 47px;
  margin: 2px 10px;
`;

export default UserAvatar;
