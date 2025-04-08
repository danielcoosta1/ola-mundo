import styled from "styled-components";

const ConteinerCards = styled.section`

  margin: -5rem auto 0 auto;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    margin: -5rem auto 0 auto;
    padding: 1rem;
  }

  @media screen and (max-width: 480px) {
    max-width: 15rem;
    margin: -2rem auto 0 auto;
    padding: 0.5rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem 8rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.5rem;
  }
`;

export { ConteinerCards, CardsGrid };
