import styled from 'styled-components';

export default styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 230px;
  height: 60px;
  border-radius: 15px;
  border: none;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
`;
