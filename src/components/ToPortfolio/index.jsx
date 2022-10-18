import mainImg from "../../images/main-img.jpg"
import iconArrow from "../../images/icon-arrow.png"
import { StyledImg, StyledDisplayArrow, StyledBlockArrow, StyledArrow } from "../../utils/style/JSX/ToPortfolio"

function ToPortfolio ()  
{

    return(
        <div id="before_portfolio">
            <StyledImg src={mainImg} alt="personne-sur-escalator" />
            <StyledDisplayArrow type="button" />
            <StyledBlockArrow>
                <StyledArrow src={iconArrow} alt="flèche" />
            </StyledBlockArrow>
        </div>
    )
}

export default ToPortfolio;