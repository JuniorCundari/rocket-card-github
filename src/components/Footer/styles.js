import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-right: 10px;
  margin-top: 90px;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    margin-left: 10px;
  }
`;
