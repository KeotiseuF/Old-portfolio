import BeforePortfolio from "../../components/BeforePortfolio";
import React, { useEffect, useState } from "react";
import DisplayPortfolio from "../../components/DisplayPortfolio";

function App() {
  const [displayPortfolio, setDisplayPortfolio] = useState(false)
  
  useEffect(() => {
    const displayArrow = document.getElementById("display_arrow");
    
    
      displayArrow.addEventListener("click", () =>{
        setTimeout(() => {
        setDisplayPortfolio(true)}, "4260")
      });
    
  }, [])
  


  return (
    <React.StrictMode>
      <BeforePortfolio />
        {displayPortfolio && <DisplayPortfolio />}
    </React.StrictMode>
  );
}

export default App;
