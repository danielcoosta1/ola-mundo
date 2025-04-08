import {
  BannerContainer,
  ConteinerDescricao,
  ConteinerImg,
  ImgPrincipal,
  ImgSobreposta,
  Conteiner,
} from "./styles";

import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";

const Banner = () => {
  return (
    <BannerContainer>
      <Conteiner>
        <ConteinerDescricao>
          <h1>Olá, mundo!</h1>
          <p>
            Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor
            de Front-end da Alura. Aqui compartilho vários conhecimentos, espero
            que aprenda algo novo :)
          </p>
        </ConteinerDescricao>
        <ConteinerImg>
          <ImgPrincipal src={circuloColorido} />
          <ImgSobreposta src={minhaFoto} />
        </ConteinerImg>
      </Conteiner>
    </BannerContainer>
  );
};

export default Banner;
