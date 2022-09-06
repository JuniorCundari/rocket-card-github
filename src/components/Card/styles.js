import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  height: 650px;
  width: 400px;
  border-radius: 50px;
  /* margin-right: 50px; */

  display: flex;
  align-items: center;
  justify-content: center;

  #backgroundCard {
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 50px;
    height: 95%;
    width: 95%;
  }
`;
