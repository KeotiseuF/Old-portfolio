import styled from "styled-components"
import tree from "../../../images/tree.svg"

export const StyledSection = styled.section`
    background: url(${tree}) no-repeat center, linear-gradient(to bottom, rgba(0,255,255,1) 0%, rgba(0,0,0,1) 100%);
    background-size: 1684px 100%;
`

export const StyledFrameProjets = styled.div`
    display: flex;
    height: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
`