import React from "react";
import { StyledSection, StyledWelcomeText, StyledLetter, StyledBitmoji, StyledWarning } from "../../utils/style/JSX/DisplayPortfolio"
import miniCurt from "../../images/Mini-Curt.svg"

function DisplayPortfolio() {
    return(
      <React.StrictMode>
        <StyledSection id="accueil">
            <StyledWarning>⚠️ Portfolio en construction mise à jour faite le : 18/12/2022 ⚠️</StyledWarning>
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
        </StyledSection>
      </React.StrictMode>
    )
}

export default DisplayPortfolio;
