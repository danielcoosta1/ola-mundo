import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 80vh;
  gap: 6rem;

  margin: 10rem auto;
  flex-direction: column;
  background-color: #041833;

  @media screen and (max-width: 1220px) {
    gap: 4rem;
  }

  @media screen and (max-width: 720px) {
    gap: 2rem;
  }
`;

const Title = styled.h1`
  color: #1875e8;
  font-size: 12rem;

  @media screen and (max-width: 1220px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 720px) {
    font-size: 4rem;
  }
`;

const Message = styled.p`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 30%;
  text-align: center;
  font-size: 5rem;
  color: #fff;
  font-weight: 700;

  p {
    font-size: 2rem;
    font-weight: 400;
  }

  @media screen and (max-width: 1220px) {
    font-size: 2rem;
    width: 60%;
  }

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
    p {
      font-size: 1rem;
    }
  }
`;

const Button = styled.button`
  width: 10%;
  padding: 2rem 3rem;
  background-color: #007bff;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width: 1220px) {
    padding: 1.5rem 2rem;
    width: 20%;
    a {
      font-size: 1.5rem;
    }
  }

  
  @media screen and (max-width: 720px) {
   width: 30%;
   
   padding: .5rem .75rem;
   margin-top: 3rem;
    a {
      font-size: .75rem;
    }
  }
`;

export { Container, Title, Message, Button };
