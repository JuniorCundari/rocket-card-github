import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: flex-end;

  #backgroundPerfil {
    background: radial-gradient(circle, rgba(130,87,229,1) 20%, rgba(50,31,92,1) 80%);
    width: 310px;
    height: 310px;

    clip-path: circle(50% at 73%);

    display: flex;
    align-items: center;
    justify-content: end;

    img {
      width: 90%;
      height: 90%;

      clip-path: circle(50% at 70%);
      object-fit: cover;
      object-position: 50px 0;
    }
  }
`;
