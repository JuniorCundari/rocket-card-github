import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 50px;

  form {
    label {
      display: flex;
      flex-direction: column;
      align-items: start;
      color: ${({ theme }) => theme.colors.text};

      input {
        margin-top: 10px;
      }
    }
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 50px 0;
    color: ${({ theme }) => theme.colors.text};

    button {
      margin-top: 10px;
    }
  }

  small {
    margin-top: 5px;
    color: #EC3434;
  }

  @media only screen and (max-width: 680px) {
    margin-top: 50px;
    margin-left: 0;
  }
`;
