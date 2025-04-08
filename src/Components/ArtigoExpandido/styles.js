import styled from "styled-components";
const ArtigoContainer = styled.article`
  max-width: 125rem;

  margin: 0 auto;
  padding: 2rem 0;
  color: #333;
  line-height: 1.7;
  font-family: "Segoe UI", system-ui, sans-serif;
  text-align: left;

  h1,
  h2,
  h3,
  h4 {
    color: #444444;
    margin: 2rem 0 1rem;
    line-height: 1.3;
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }

  ul,
  ol {
    padding-left: 2rem;
    margin: 1.5rem 0;

    li {
      margin: 0.5rem 0;
    }
  }

  blockquote {
    background: #f7fafc;
    border-left: 4px solid #4299e1;
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    color: #4a5568;
    font-style: italic;
  }

  pre {
    background: #2d3748;
    color: #f7fafc;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;
  }

  code {
    font-family: "Fira Code", monospace;
    font-size: 0.9em;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
    h1,
    h2,
    h3,
    h4 {
      font-size: 1.8rem; /* Tamanho maior para melhor legibilidade */
      margin: 1rem 0;
    }

    p {
      font-size: 1.1rem;
      padding: 0 0.5rem;
    }

    pre {
      margin: 1rem -0.5rem; /* Expandir blocos de código */
      border-radius: 0;
    }
  }

  @media screen and (max-width: 420px) {
    padding: 1rem 1.rem;
    width: 100vw;
    margin-left: -20vw;
    left: 20%;

    h1,
    h2,
    h3,
    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }
`;

const LinkEstilizado = styled.a`
  color: #4299e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #3182ce;
    text-decoration: underline;
  }
`;

const FigureEstilizado = styled.figure`
  margin: 2rem 0;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  figcaption {
    font-size: 0.9rem;
    color: #718096;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem -0.5rem; /* Expandir imagem até as bordas */

    img {
      border-radius: 0; /* Remove bordas arredondadas */
    }
  }
`;
const ConteinerTitulo = styled.div`
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;

  background-image: url(${(props) => props.$bgImg});

  background-size: cover;
  background-position: center;
`;
const ArtigoTitulo = styled.h1`
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.85);

  @media screen and (max-width: 768px) {
    padding: 1rem;
    font-size: 1.8rem;
  }
`;

const BotaoFechar = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  background: transparent;
  color: black;

  font-size: 3rem;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    top: 10px;
    right: 5px;
  }
`;

export {
  ArtigoContainer,
  LinkEstilizado,
  FigureEstilizado,
  ConteinerTitulo,
  ArtigoTitulo,
  BotaoFechar,
};
