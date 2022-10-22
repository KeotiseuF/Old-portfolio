import React from "react";
import MainNav from "../NavBar";
import { StyledMain, StyledWelcomeText, StyledLetter, StyledBitmoji } from "../../utils/style/JSX/DisplayPortfolio"
import miniCurt from "../../images/Mini-Curt.svg"

function DisplayPortfolio () {
    return(
      <React.StrictMode>
        <StyledMain id="accueil">
            <header><MainNav /></header>
            <StyledWelcomeText>
                <span>
                    <StyledLetter>
                        B
                    </StyledLetter>
                    <StyledLetter>
                        I
                    </StyledLetter>
                    <StyledLetter>
                        E
                    </StyledLetter>
                    <StyledLetter>
                        N
                    </StyledLetter>
                    <StyledLetter>
                        V
                    </StyledLetter>
                    <StyledLetter>
                        E
                    </StyledLetter>
                    <StyledLetter>
                        N
                    </StyledLetter>
                    <StyledLetter>
                        U
                    </StyledLetter>
                    <StyledLetter>
                        E
                    </StyledLetter>
                    <StyledLetter>
                        
                    </StyledLetter>
                    <StyledLetter>
                        S
                    </StyledLetter>
                    <StyledLetter>
                        U
                    </StyledLetter>
                    <StyledLetter>
                        R
                    </StyledLetter>
                    <StyledLetter>
                        
                    </StyledLetter>
                    <StyledLetter>
                        M
                    </StyledLetter>
                    <StyledLetter>
                        O
                    </StyledLetter>
                    <StyledLetter>
                        N
                    </StyledLetter>
                    <StyledLetter>
                        
                    </StyledLetter>
                    <StyledLetter>
                        P
                    </StyledLetter>
                    <StyledLetter>
                        O
                    </StyledLetter>
                    <StyledLetter>
                        R
                    </StyledLetter>
                    <StyledLetter>
                        T
                    </StyledLetter>
                    <StyledLetter>
                        F
                    </StyledLetter>
                    <StyledLetter>
                        O
                    </StyledLetter>
                    <StyledLetter>
                        L
                    </StyledLetter>
                    <StyledLetter>
                        I
                    </StyledLetter>
                    <StyledLetter>
                        O
                    </StyledLetter>
                </span>
            </StyledWelcomeText>
            <StyledBitmoji src={miniCurt} alt="bitmoji_Curtis" />
        </StyledMain>
      </React.StrictMode>
    )
}

export default DisplayPortfolio;