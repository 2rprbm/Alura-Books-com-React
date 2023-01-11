import styled from "styled-components";

const CardRecomendadoParaVoce = styled.div`
    display: flex;
    background-color: #FFFFFF;
    border-radius: 20px;
    column-gap: 3rem;
    padding: 1rem 2rem;
    width: 50%;
    justify-content: center;
    align-self: center;
`
const CardImagemEBotaoRecomendado = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
`
const CardLinkSaibaMais = styled.a`
    padding: 0.5rem;
    color: #FFFFFF;
    font-weight: 600;
    text-decoration: none;
    background-color: #DAA520;
`

const CardImagemRecomendado = styled.img`
    width: 110px;
    height: 100%;
`

const CardInfosRecomendado = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: #000000;
    row-gap: 1rem;
`
const CardTituloRecomendado = styled.h4`
    font-weight: 600;
    font-size: 18px;
    margin: 0;
`
const CardSubtituloRecomendado = styled.h5`
    font-weight: 400;
    font-size: 16px;
    margin: 0;
`
const CardAnoRecomendado = styled.span`
    font-weight: 600;
    font-size: 18px;
`


export const CardRecomendado = (props) => {
    return (
        <CardRecomendadoParaVoce>
            <CardInfosRecomendado>
                <CardTituloRecomendado>{props.tituloRecomendado}</CardTituloRecomendado>
                <CardSubtituloRecomendado>{props.autorRecomendado}</CardSubtituloRecomendado>
                <CardAnoRecomendado>{props.anoRecomendado}</CardAnoRecomendado>
            </CardInfosRecomendado>
            <CardImagemEBotaoRecomendado>
                <CardImagemRecomendado src={props.capaRecomendado} alt={props.capaRecomendado}></CardImagemRecomendado>
                <CardLinkSaibaMais href="#">Saiba mais</CardLinkSaibaMais>
            </CardImagemEBotaoRecomendado>
        </CardRecomendadoParaVoce>
    )
}