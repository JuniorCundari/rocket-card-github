import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0,0,0,0.6);
  width: 205px;
  height: 200px;
  border-radius: 50px;
  margin-left: 10px;
  padding-left: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  bottom: -70px;
  left: 0;

  #infos {
    display: flex;
    align-items: center;

    & + #infos {
      padding-top: 10px;
    }

    span {
      color: ${({ theme }) => theme.colors.text};
      margin-left: 10px;
    }
  }
`;
