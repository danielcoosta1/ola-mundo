import styled from "styled-components";


const Footer= styled.footer`
    width: 100vw;
    min-height: 6rem;
    background-color: #041833;

    color: #FFFFFF;
    font-size: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;

        
    }
`;

const Conteiner = styled.div`
display: flex;
gap: .5rem;
justify-content: center;
align-items: center;


`;

const Img = styled.img`
    @media screen and (max-width: 768px) {
        width: 15px;
        height: 15px;
        
    }
`;


export {Footer,Conteiner, Img}
 