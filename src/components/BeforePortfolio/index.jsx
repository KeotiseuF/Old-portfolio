import mainImg from "../../images/main-img.jpg"
import iconArrow from "../../images/icon-arrow.png"
import { StyledImg, StyledDisplayArrow, StyledBlockArrow, StyledArrow } from "../../utils/style/JSX/BeforePortfolio"
import { useEffect } from "react";

function BeforePortfolio ()  
{
    useEffect(() => {
        const displayArrow = document.getElementById("display_arrow");
        const beforePortfolio = document.getElementById("before_portfolio");

        displayArrow.addEventListener("click", () => {
            import("../../utils/style/CSS/DisplayPortfolio.css");

            setTimeout(() => {
                beforePortfolio.setAttribute("style", "display:none")
            }, "4250")
        })
    }, [])
    
    return(
        <div id="before_portfolio">
            <StyledImg src={mainImg} alt="personne-sur-escalator" />
            <StyledDisplayArrow type="button" id="display_arrow" />
            <StyledBlockArrow>
                <StyledArrow src={iconArrow} alt="flèche" />
            </StyledBlockArrow>
        </div>
    )
}

export default BeforePortfolio;