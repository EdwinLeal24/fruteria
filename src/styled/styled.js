import styled from 'styled-components';

export const AppLayout = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

export const Main = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
  height: 100%;
  width: 50%;
`

export const Title = styled.h1`
  background: #ccc;
  background: linear-gradient(90deg, #007cf0, #000);
  font-size: 3rem;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`