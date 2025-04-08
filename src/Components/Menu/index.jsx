import { Header, Nav, Lista, ListaItem } from "./styles";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
    const { pathname } = useLocation();
    
    return (
        <Header>
            <Nav>
                <Lista role="navigation" aria-label="Menu principal">
                    <ListaItem $ativo={pathname === "/"}>
                        <Link 
                            to="/" 
                            aria-current={pathname === "/" ? "page" : undefined}
                        >
                            Início
                        </Link>   
                    </ListaItem>
                    <ListaItem $ativo={pathname === "/sobre-mim"}>
                        <Link 
                            to="/sobre-mim" 
                            aria-current={pathname === "/sobre-mim" ? "page" : undefined}
                        >
                            Sobre mim
                        </Link>
                    </ListaItem>
                </Lista>
            </Nav>
        </Header>
    );
};

export default Menu;