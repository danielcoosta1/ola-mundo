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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 6rem;
    font-weight: 700;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.75rem;
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
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

const Img = styled.img`
max-width: 70%;
`;

export { BannerContainer, ConteinerDescricao, ConteinerImg, Img };
