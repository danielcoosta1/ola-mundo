import marcaRegistrada from "../../assets/marca_registrada.svg";
import { Footer, Conteiner, Img } from "./styles";

const Rodape = () => {
  return (
    <Footer>
      <Conteiner>
        <Img src={marcaRegistrada} />
        <p>Desenvolvido por alura</p>
      </Conteiner>
    </Footer>
  );
};

export default Rodape;
