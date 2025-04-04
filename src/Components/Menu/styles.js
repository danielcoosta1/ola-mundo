import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
`;

const Nav = styled.nav``;

const Lista = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 1.5rem 2rem;
`;

const ListaItem = styled.li`
  a {
    color: #041833;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none; /* Padrão sem sublinhado */
    position: relative;

    /* Sublinhado apenas quando ativo */
    ${({ $ativo }) => $ativo && `
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        background-color: #041833;
      }
    `}
  }
`;

export { Header, Nav, Lista, ListaItem };