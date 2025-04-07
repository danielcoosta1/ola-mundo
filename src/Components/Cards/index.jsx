import { CardContainer, CardImagem, CardContent, CardButton } from "./styles";

const Card = ({ artigo, onClick }) => {

  const imagemPath = require(`../../assets/posts/${artigo.id}/capa.png`);
  return (
    <CardContainer onClick={() => onClick(artigo.id)}>
      <CardImagem
        $bgImage={imagemPath}
      />
      <CardContent>
        <h3>{artigo.titulo}</h3>
        <CardButton>Ler</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
