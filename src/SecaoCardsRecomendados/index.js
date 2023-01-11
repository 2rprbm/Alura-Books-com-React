import { TituloSecao } from "../TituloSecao"
import styled from "styled-components"
import livroAlternativo from "../imagens/livro2.png"
import livro from "../imagens/livro.png"
import { CardRecomendado } from "../CardRecomendado"


const SecaoRecomendadosParaVoce = styled.section`
    padding-top: 1rem;
    background-color: #FFFFFF;
`
const CardsRecomendados = styled.div`
    background-color: #DCDCDC;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 2.5rem;
    box-sizing: border-box;
`

export const SecaoCardsRecomendados = () => {
    return (
        <SecaoRecomendadosParaVoce>
            <TituloSecao tituloSecao="Recomendados para Você" />
            <CardsRecomendados>
                <CardRecomendado 
                    tituloRecomendado="Desenvolva Componentes com Angular" 
                    autorRecomendado="Raphael Rodrigues" 
                    anoRecomendado="2020"
                    capaRecomendado={livroAlternativo} />
                <CardRecomendado 
                    tituloRecomendado="Enciclopédia Java" 
                    autorRecomendado="Raphael Rodrigues" 
                    anoRecomendado="1992"
                    capaRecomendado={livro} />
            </CardsRecomendados>
        </SecaoRecomendadosParaVoce>
    )
}