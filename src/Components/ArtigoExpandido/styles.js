import styled from "styled-components";

const ArtigoContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const LinkEstilizado = styled.a`
  color: #2b6cb0;
  text-decoration: underline;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #2c5282;
    text-decoration: none;
  }
`;

export { ArtigoContainer, LinkEstilizado };
