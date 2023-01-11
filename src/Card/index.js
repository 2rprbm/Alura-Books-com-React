import styled from "styled-components";


const CardIndividual = styled.div`
    display: flex;
    align-items: center;
    width: calc(33% - 1.5rem);
    height: 150px;
    margin-bottom: 1rem;
    column-gap: 10px;
`

const CardImagem = styled.img`
    width: 110px;
    height: 100%
`

const CardInfos = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;
    row-gap: 1rem;
`
const CardTitulo = styled.h4`
    font-weight: 600;
    font-size: 18px;
    margin: 0;
`
const CardSubtitulo = styled.h5`
    font-weight: 400;
    font-size: 16px;
    margin: 0;
`
const CardAno = styled.span`
    font-weight: 600;
    font-size: 18px;
`

export const Card = (props) => {
    return (
        <CardIndividual>
            <CardImagem src={props.livroPesquisado.capa} alt={props.livroPesquisado.capa}></CardImagem>
            <CardInfos>
                <CardTitulo>{props.livroPesquisado.titulo}</CardTitulo>
                <CardSubtitulo>{props.livroPesquisado.autor}</CardSubtitulo>
                <CardAno>{props.livroPesquisado.ano}</CardAno>
            </CardInfos>
        </CardIndividual>
    )
}