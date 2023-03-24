import styled from 'styled-components';

function UserAvatar(img: string | null) {
  const withAvatar = !(img === "" || img === undefined);

  return (
      <UserAvatarStyled >
        {withAvatar && <UserImage src={img} alt="user avatar" />}
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
