import styled from "styled-components"
import purpleBackground from "../../../images/purple_background.jpg"

export const StyledSection = styled.section`
    background: url(${purpleBackground}) no-repeat center;
    background-size: cover;
`

export const StyledFrameProjets = styled.div`
    display: flex;
    height: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
`