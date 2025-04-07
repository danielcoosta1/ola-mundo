import styled from "styled-components";

const ConteinerCards = styled.section`
  max-width: 100rem;
  margin: -5rem auto 0 auto;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    margin: -5rem auto 0 auto;
    padding: 1rem;
  }

  @media screen and (max-width: 480px) {
    margin: -5rem auto 0 auto;
    padding: 0.5rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.5rem;
  }
`;

export { ConteinerCards, CardsGrid };
