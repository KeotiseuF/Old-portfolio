import { StyledNav, StyledLink, StyledFrameLink } from "../../utils/style/JSX/DisplayPortfolio"

export function MainNav (){    
    return(
        <StyledNav>
            <StyledLink href="#accueil">
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                Accueil
            </StyledLink>

            <StyledLink href="#presentation">
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                Présentation
            </StyledLink> 

            <StyledLink href="#projets">
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                Projets
            </StyledLink>

            <StyledLink href="#contact">
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                Contact
            </StyledLink>
        </StyledNav> 
    )
}

export default MainNav;