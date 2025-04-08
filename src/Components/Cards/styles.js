import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImagem = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;

  @media screen and (max-width:768px) {
    height: 100px
  }


`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  padding: 1.5rem;


  
`;
const CardButton = styled.button`
  width: 50%;

  background: #2f80ed;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;
export { CardContainer, CardImagem, CardContent, CardButton };
