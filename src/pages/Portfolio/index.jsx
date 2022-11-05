import BeforePortfolio from "../../components/BeforePortfolio";
import { useEffect, useState } from "react";
import DisplayPortfolio from "../../components/DisplayPortfolio";
import Presentation from "../../components/Presentation";
import Projets from "../../components/Projets";
import Contact from "../../components/Contact";

function Portfolio () {
  const [displayPortfolio, setDisplayPortfolio] = useState(false)
  
  useEffect(() => {
    const displayArrow = document.getElementById("display_arrow");
    
    
      displayArrow.addEventListener("click", () =>{
        setTimeout(() => {
        setDisplayPortfolio(true)}, "4260")
      });
    
  }, [])
  


  return (
    <>
      <BeforePortfolio />
      { displayPortfolio && <DisplayPortfolio /> }
      { displayPortfolio && <Presentation />}
      { displayPortfolio && <Projets />}
      { displayPortfolio && <Contact />}
    </>
  );
}

export default Portfolio;
