import { CardContainer, CardImagem, CardContent, CardButton } from "./styles";

const Card = ({ artigo, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(artigo.id)}>
      <CardImagem
        src={`/assets/video-3.1/posts/${artigo.id}/capa.png`}
        alt={artigo.titulo}
      />
      <CardContent>
        <h3>{artigo.titulo}</h3>
        <CardButton>Ler</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
