import styled from "styled-components"
import paintMan from "../../../images/paint-man.jpg"

export const StyledSection = styled.section`
    background: url(${paintMan}) no-repeat center;
    background-size: cover;
`

export const StyledFrameText = styled.div`
    width: 565px;
    margin-bottom: 35px;
`
export const StyledText = styled.p`
    font-size: xxx-large;
    text-align: center;
`

export const StyledMailTo = styled.a`
    border-radius: 36px;
    width: 250px;
    height: 58px;
    background: #ff7c93;
    cursor: pointer;
    text-decoration: none;
    padding: 18px 73px;
    transform: scale(1);
    &:hover
    {
        background: white;
        color: #ff7c93;
        transform: scale(1.2)
    }
`