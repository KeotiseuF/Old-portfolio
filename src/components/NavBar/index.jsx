import { StyledNav, StyledLink, StyledFrameLink } from "../../utils/style/JSX/DisplayPortfolio"

export function MainNav (){
    return(
        <StyledNav>
            <StyledLink href="#">
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                Accueil
            </StyledLink>

            <StyledLink href="#">
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                Présentation
            </StyledLink> 

            <StyledLink href="#">
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                <StyledFrameLink />
                Projets
            </StyledLink>

            <StyledLink href="#">
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