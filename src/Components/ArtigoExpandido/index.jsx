import { ArtigoContainer, LinkEstilizado, FigureEstilizado, ArtigoTitulo } from "./styles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

const ArtigoExpandido = ({ artigo }) => {
  const transformImageUri = (uri) => {
    if (uri.startsWith("/assets/posts/")) {
      const imageName = uri.split("/").pop();
      return require(`../../assets/posts/${artigo.id}/${imageName}`);
    }
    return uri;
  };

  return (
    <ArtigoContainer>
      <ArtigoTitulo>{artigo.titulo}</ArtigoTitulo>
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
