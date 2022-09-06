import styled, { css } from 'styled-components';

export default styled.input`
  width: 230px;
  height: 30px;
  border-radius: 5px;
  padding-left: 10px;
  border: 2px solid #fff;
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: rgba(130,87,229,1);
  }

  ${({ error }) => error && css`
    color: #EC3434;
    border-color: #EC3434 !important;
  `}
`;
