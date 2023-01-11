import styled from "styled-components"
import { SecaoPesquisa } from "../SecaoPesquisa"
import { SecaoUltimosLancamentos } from "../SecaoUltimosLancamentos"
import { SecaoCardsRecomendados } from "../SecaoCardsRecomendados"

const ConteudoPrincipal = styled.main`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`

export const Main = () => {
    return(
        <ConteudoPrincipal>
           <SecaoPesquisa /> 
           <SecaoUltimosLancamentos />
           <SecaoCardsRecomendados />
        </ConteudoPrincipal>
    )
}