import { ArtigoContainer, LinkEstilizado} from "./styles";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

const ArtigoExpandido = ({ artigo }) => {
  const transformImageUri = (uri) => {
    // Se estiver usando imagens locais
    if (uri.startsWith("/assets/posts/")) {
      const imageName = uri.split("/").pop();
      return require(`../../assets/posts/${artigo.id}/${imageName}`);
    }

    // Se for URL externa mantém original
    return uri;
  };

  return (
    <ArtigoContainer>
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
            )
          }}
        urlTransform={transformImageUri}
      >
        {artigo.texto}
      </ReactMarkdown>
    </ArtigoContainer>
  );
};

export default ArtigoExpandido;
