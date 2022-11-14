import { StyledSection, StyledPresentation, StyledBitmojiBis } from "../../utils/style/JSX/Presentation"
import miniCurt2 from "../../images/Mini-Curt_2.svg"
import cloud1 from "../../images/cloud_1.png"
import cloud2 from "../../images/cloud_2.png"
import cloud3 from "../../images/cloud_3.png"
import cloud4 from "../../images/cloud_4.png"
import cloud5 from "../../images/cloud_5.png"
import { gsap } from "gsap"
import { useEffect } from "react"

function Presentation () {
    useEffect(() => {
        let transform = gsap.utils.pipe(
          gsap.utils.clamp(200, 1500),
          gsap.utils.mapRange(200, 1500, 1, 0.2)
      );
      
      function makeClouds() {
        gsap.set(".cloud", {
          top: "random(0, 400)"
        });
      
        gsap.to(".cloud", {
            x: "-100vw",
            xPercent: -100,
            duration: gsap.utils.random(10, 20),
            ease: "none",
            stagger: {
              repeat: -1,
              each: gsap.utils.random(2, 8)
            }
          })
        .progress(0.8)
        .timeScale(transform(window.innerWidth));
      }
      
      makeClouds();
      
      function callAfterResize(func, delay) {
        let delayedCall = gsap.delayedCall(delay || 0.2, func).pause();
        const handler = () => delayedCall.restart(true);
        window.addEventListener("resize", handler);
        return handler; 
      }
      
      callAfterResize(makeClouds);
    }, [])
    
    
    return(
        <StyledSection id="presentation">
            <div id="frame_clouds">
                <img className="cloud first" src={cloud1} alt="" />
                <img className="cloud" src={cloud2} alt="" />
                <img className="cloud" src={cloud3} alt="" />
                <img className="cloud" src={cloud4} alt="" />
                <img className="cloud" src={cloud5} alt="" />
            </div>

            <h2>Présentation</h2>
            <div className="under_section">
                <StyledPresentation id="text_presentation">
                  Ceci est un endroit où vous allez pouvoir retrouver mes projets personnels et par la suite, 
                  je posterai des projets professionnels si cela est possible.<br/> Vous allez pouvoir voir mon évolution,
                  depuis que j'ai acquis mon diplôme suite à ma formation sur OpenClassrooms en Octobre 2022.
                  L'informatique est un domaine qui me fascine et j'ai toujours aimé les jeux de logique/énigme ce que je retrouve dans le métier de développeur, 
                  ce qui fait que lorsque je code, je ne vois pas le temps passer et de plus, c'est un monde où on n'a pas le temps de s'ennuyer il y a toujours de nouvelles choses à apprendre,
                  quelque chose qui me convient parfaitement parce que j'adore découvrir de nouvelles choses. 
                  <br/>Donc, à la suite de ces mots, je vous laisse découvrir toute ma progression et ma volonté. N'hésitez pas à me contacter <a href="#contact">ici</a> afin d'en apprendre davantage sur mon implication. 
                </StyledPresentation>
                <StyledBitmojiBis src={miniCurt2} alt="2_ème_mini_curt"/>
            </div>
        </StyledSection>
    )
}

export default Presentation