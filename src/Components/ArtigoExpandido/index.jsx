import {
  ArtigoContainer,
  LinkEstilizado,
  FigureEstilizado,
  ArtigoTitulo,
  ConteinerTitulo,
  BotaoFechar,
} from "./styles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { useNavigate } from "react-router-dom";

const ArtigoExpandido = ({ artigo, onClose }) => {
  const imagemPath = require(`../../assets/posts/${artigo.id}/capa.png`);
  const navigate = useNavigate();
  const transformImageUri = (uri) => {
    if (uri.startsWith("/assets/posts/")) {
      const imageName = uri.split("/").pop();
      return require(`../../assets/posts/${artigo.id}/${imageName}`);
    }
    return uri;
  };

  const handleClose = () => {
    if (onClose) {
      onClose(); // Limpa o estado na Home
    } else {
      navigate(-1); // Volta para página anterior se veio de rota direta
    }
  };

  return (
    <ArtigoContainer>
      <ConteinerTitulo $bgImg={imagemPath}>
        <BotaoFechar onClick={handleClose}>&times;</BotaoFechar>
        <ArtigoTitulo>{artigo.titulo}</ArtigoTitulo>
      </ConteinerTitulo>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          a: ({ node, ...props }) => (
            <LinkEstilizado
              {...props}
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          img: ({ node, ...props }) => (
            <FigureEstilizado>
              <img {...props} alt={props.alt} />
              {props.alt && <figcaption>{props.alt}</figcaption>}
            </FigureEstilizado>
          ),
        }}
        urlTransform={transformImageUri}
      >
        {artigo.texto}
      </ReactMarkdown>
    </ArtigoContainer>
  );
};

export default ArtigoExpandido;
