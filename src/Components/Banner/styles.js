import styled from "styled-components";

const BannerContainer = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #041833;
`;

const ConteinerDescricao = styled.div`
  color: #fff;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 20rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5rem;
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
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

const ConteinerImg = styled.div``;

const Img = styled.img``;

export { BannerContainer, ConteinerDescricao, ConteinerImg, Img };
