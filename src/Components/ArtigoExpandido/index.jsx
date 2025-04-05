
import { ArtigoContainer } from "./styles";

const ArtigoExpandido = ({artigo}) => {
    return (
        <ArtigoContainer>
            <h2>{artigo.titulo}</h2>
            <p>
                {artigo.texto}
            </p>
        </ArtigoContainer>
    );

}

export default ArtigoExpandido;