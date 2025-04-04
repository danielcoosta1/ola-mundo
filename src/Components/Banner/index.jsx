import {
  BannerContainer,
  ConteinerDescricao,
  ConteinerImg,
  Img,
} from "./styles";

import circuloColorido from "../../assets/circulo-colorido.png";
import minhaFoto from "../../assets/minha-foto.png";

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
        <Img />
        <Img />
      </ConteinerImg>
    </BannerContainer>
  );
};

export default Banner;
