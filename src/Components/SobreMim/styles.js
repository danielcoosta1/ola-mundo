import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const ConteinerTitulo = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${(props) => props.$bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  

  h1 {
    padding: 2rem 3rem;
    background: rgba(255, 255, 255, 0.85);

    @media screen and (max-width: 768px) {
      padding: 1.5 2rem;
      font-size: 2rem;
    }
  }
 
`;

const ConteinerDescricao = styled.section`
  padding: 0 3rem;

  h2 {
    margin: 2rem 0;
  }
`;

const Paragrafos = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
 
  

  p {
      @media screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 25px;
      }
    }
`;

const Paragrafo1 = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Paragrafo2 = styled.div``;

const Img = styled.img`
 
`;

export {
  Main,
  ConteinerDescricao,
  ConteinerTitulo,
  Paragrafos,
  Img,
  Paragrafo2,
  Paragrafo1,
};
