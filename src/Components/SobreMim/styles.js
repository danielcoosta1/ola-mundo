import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  color: #444444;
`;

const ConteinerTitulo = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${(props) => props.$bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 2.5rem;
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
    font-size: 2rem;
    margin: 2rem 0;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      margin: 2rem 0;
    }
  }
`;

const Paragrafos = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 5rem;
`;

const Paragrafo = styled.div`
  display: flex;
  gap: 15rem;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  align-items: center;

  p {
    font-size: 1.5rem;
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;



    p {
      font-size: 1rem;
      width: 100%;
      order: 1;
    }
  }
`;

const Img = styled.img``;

export {
  Main,
  ConteinerDescricao,
  ConteinerTitulo,
  Paragrafos,
  Img,
  Paragrafo,
};
