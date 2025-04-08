import Menu from "../../Components/Menu";
import Banner from "../../Components/Banner";
import Card from "../../Components/Cards";
import ArtigoExpandido from "../../Components/ArtigoExpandido";
import Rodape from "../../Components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ConteinerCards, CardsGrid } from "./styles";
import articles from "../../assets/json/posts.json";

const Home = () => {
  const [artigoSelecionado, setArtigoSelecionado] = useState(null);
  const [outrosArtigos, setOutrosArtigos] = useState([]);
  const navigate = useNavigate();
  
  const handleCardClick = (id) => {
    const artigo = articles.find((artigo) => artigo.id === id);
    setArtigoSelecionado(artigo);
    const outros = articles.filter((artigo) => artigo.id !== id);
    setOutrosArtigos(outros);
  };

  const handleClose = () => {
    setArtigoSelecionado(null);
    navigate("/");
  };
  return (
    <>
      <Menu />
      <Banner />
      <ConteinerCards>
        {!artigoSelecionado ? (
          <CardsGrid>
            {articles.map((artigo) => (
              <Card key={artigo.id} artigo={artigo} onClick={handleCardClick} />
            ))}
          </CardsGrid>
        ) : (
          <>
            <ArtigoExpandido artigo={artigoSelecionado} onClose={handleClose} />
            <h2>Outros artigos:</h2>
            <CardsGrid>
              {outrosArtigos.map((artigo) => (
                <Card
                  key={artigo.id}
                  artigo={artigo}
                  onClick={handleCardClick}
                />
              ))}
            </CardsGrid>
          </>
        )}
      </ConteinerCards>
      <Rodape />
    </>
  );
};

export default Home;
