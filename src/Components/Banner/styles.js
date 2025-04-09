import styled from "styled-components";
const BannerContainer = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: #041833;
  min-height: 50vh;

  @media screen and (max-width: 1440px) {
    min-height: 20vh;
    padding: 2rem 1rem;
    gap: 3rem;
  }

  
`;

const Conteiner = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0 3rem;

  @media screen and (max-width:1440px) {
    gap:5rem;
    padding: 0 2rem;
  }

  @media screen and (max-width: 420px) {
    
    flex-direction: column;
    padding: 0%;
    gap: 2.5rem;
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
    font-size: 5rem;
    font-weight: 700;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
  }

  @media screen and (max-width: 1440px) {
    width: 70%;
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    

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
  margin-right: 12rem;
  @media screen and (max-width: 1440px) {
    max-width: 30%;
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    max-width: 30%;
    
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
  Conteiner,
};
