import styled from "styled-components"
import bibi from "../../../images/alex-shuper-BkS9G1hw70A-unsplash.jpg"

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 60px;
    background: url(${bibi}) no-repeat center;
    background-size: cover;
`

export const StyledPresentation = styled.p`
    font-size: x-large; 
    width: 50%;
    padding-top: 45px;
    text-align: justify;
`

export const StyledBitmojiBis = styled.img`
    position: absolute;
    width: 9%;
    left: 75%;
`
