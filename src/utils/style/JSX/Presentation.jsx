import styled from "styled-components"

export const StyledSection = styled.section`
    background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,255,255,1) 100%);
    height: 100vh;
`

export const StyledPresentation = styled.p`
    font-size: x-large; 
    width: 667px;
    text-align: justify;
    position: relative;
    z-index: 3;
    @media (max-width: 987px)
    {
        width:initial;
        margin: 0px 15px;
    }
`

export const StyledBitmojiBis = styled.img`
    position: absolute;
    width: 135px;
    left: 75%;
    top: 117vh;
    z-index: 1;
    @media (max-width: 987px) 
    {
        width: 80px;
        top: 188vh;
    }
`


