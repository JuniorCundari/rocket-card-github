import styled from 'styled-components';

export const Container = styled.header`
  padding: 50px;
  display: flex;
  justify-content: start;
  align-items: center;

  #backgroundImage {
    background: ${({ theme }) => theme.colors.background};
    width: 55px;
    height: 55px;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    outline: solid 1px #F1F1F1;

    img {
      width: 30px;
      height: 30px;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    padding-left: 20px;
  }
`;
