import {
  BannerContainer,
  ConteinerDescricao,
  ConteinerImg,
  Img,
} from "./styles";

import circuloColorido from "../../assets/video-2.3/assets/circulo_colorido.png";

const Banner = () => {
  return (
    <BannerContainer>
      <ConteinerDescricao>
        <h1>Olá, mundo!</h1>
        <p>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </ConteinerDescricao>
      <ConteinerImg>
        <Img src={circuloColorido} className="circulo-colorido" />
      </ConteinerImg>
    </BannerContainer>
  );
};

export default Banner;
