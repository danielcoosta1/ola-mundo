import styled from "styled-components";

const ConteinerCards = styled.section`
  max-width: 75rem;
  margin: -5rem auto 0 auto;
  padding: 2rem;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export { ConteinerCards, CardsGrid };
