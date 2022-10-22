import { StyledSection, StyledPresentation, StyledBitmojiBis } from "../../utils/style/JSX/Presentation"
import miniCurt2 from "../../images/Mini-Curt_2.svg"

function Presentation () {
    
    return(
        <StyledSection id="presentation">
            <h2>Présentation</h2>
            <StyledPresentation>
            Ceci est un endroit où vous allez pouvoir retrouver mes différents projets en tant que développeur web.<br/>
            Que ça soit suite à ma formation ou à mes projets personnels et par la suite, 
            je posterai des projets professionnels si cela est possible.<br/> Vous allez pouvoir voir mon évolution,
            depuis que j'ai acquis mon diplôme suite à ma formation sur OpenClassrooms en Octobre 2022.
            L'informatique est un domaine qui me fascine et j'ai toujours aimé les jeux de logique/énigme ce que je retrouve dans le métier de développeur, 
            ce qui fait que lorsque je code, je ne vois pas le temps passer et de plus, c'est un monde où on n'a pas le temps de s'ennuyer il y a toujours de nouvelles choses à apprendre,
            quelque chose qui me convient parfaitement parce que j'adore découvrir de nouvelles choses. 
            <br/>Donc, à la suite de ces mots, je vous laisse découvrir toute ma progression et ma volonté. N'hésitez pas à me contacter <a href="#contact">ici</a> afin d'en apprendre davantage sur mon implication. 
            </StyledPresentation>
            <StyledBitmojiBis src={miniCurt2} alt="2_ème_mini_curt"/>
        </StyledSection>
    )
}

export default Presentation