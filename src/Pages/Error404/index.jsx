import { useRouteError, Link } from "react-router-dom";
import { Container, Title, Message, Button } from "./styles";
import Footer from "../../Components/Footer";
const Error404 = () => {
  const error = useRouteError();

  return (
    <>
      <Container>
        <Title>404</Title>
        <Message>
          {error?.statusText || error?.message || "Ops! Página não encontrada."}
          <p>
            Tem certeza de que era isso que você estava procurando? Aguarde uns
            instantes e recarregue a página, ou volte para a página inicial.
          </p>
        </Message>
        <Button>
          <Link to="/">Voltar</Link>
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Error404;
