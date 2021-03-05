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

export const Section = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  height: 100%;
  place-content: center;
  place-items: center;
`

export const Title = styled.h1`
  background: #ccc;
  background: linear-gradient(90deg, #007cf0, #3498DB);
  font-size: 3rem;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`
export const ListCard = styled.div`
  grid-column-start: 2;
  width: 100%
`;

export const TicketCard = styled.div`
  grid-column-start: 3;
  width: 100%
`;