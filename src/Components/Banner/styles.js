import styled from "styled-components";
const BannerContainer = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10rem;
  background-color: #041833;
  min-height: 50vh;
  max-height: 50vh;

  @media screen and (max-width: 768px) {
    min-height: 20vh;
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

const ConteinerDescricao = styled.div`
  color: #fff;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size:5rem;
    font-weight: 700;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
    h1 {
      font-size: 2rem;
    }

    p {
      font-size:1rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.8rem;
      width: 100%;
    }
  }
`;

const ConteinerImg = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 30%;
  }

  @media screen and             (max-width: 480px) {
    max-width: 40%;
  }
`;

const ImgPrincipal = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const ImgSobreposta = styled.img`
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 50%;

  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export {
  BannerContainer,
  ConteinerDescricao,
  ConteinerImg,
  ImgPrincipal,
  ImgSobreposta,
};
