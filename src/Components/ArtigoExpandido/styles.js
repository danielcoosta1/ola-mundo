import styled from "styled-components";
const ArtigoContainer = styled.article`
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: #333;
  line-height: 1.7;
  font-family: "Segoe UI", system-ui, sans-serif;
  text-align: justify;

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

  @media screen and (max-width: 768px) {
    h1,
    h2,
    h3,
    h4 {
      font-size: 1.5rem;
    }
    
  p {
  font-size: 1rem;
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
`;

const ArtigoTitulo = styled.h1``;

export { ArtigoContainer, LinkEstilizado, FigureEstilizado, ArtigoTitulo };
