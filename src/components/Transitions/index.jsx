import Description from "../Description"

export function Transition(i) {
    const projets = document.getElementById(`description_projet_${i}`)
    projets && projets.addEventListener("click", (e) => {
        e.preventDefault()

        import("../../utils/style/CSS/Transitions.css")
        const projets = document.getElementById("projets")
        
        const containerCircles = document.createElement("div")
        containerCircles.setAttribute("id", "container_circles")
        projets.appendChild(containerCircles);

        for(let j = 0; j < 15; j++)
        {
            const circle = document.createElement("div")
            circle.className = `circle_${j}`
            containerCircles.appendChild(circle)
        }

        setTimeout(() => {
            document.querySelectorAll("section").forEach(k => k.setAttribute("style", "display:none"));
            document.querySelector("header").setAttribute("style", "display:none")
            Description(i)
        }, "2500")
    })
    return;
}

export function BackTransition() {
    
    const backLink = document.getElementById("back_link")
    
    backLink.addEventListener("click", (e) => {
        e.preventDefault()

        const article = document.querySelector("article")
        const containerCircles = document.getElementById("container_circles")

        const containerCirclesBis = document.createElement("div")
        containerCirclesBis.setAttribute("id", "container_circles_bis")
        article.appendChild(containerCirclesBis);

        for(let j = 0; j < 15; j++)
        {
            const circle = document.createElement("div")
            circle.className = `circle_${j}`
            containerCirclesBis.appendChild(circle)
        }
        
        setTimeout(() => {
            article.remove()
            document.querySelectorAll("section").forEach(k => k.setAttribute("style", "display:block"));
            document.querySelector("header").setAttribute("style", "display:block")
            containerCircles.remove()
        }, "2500")
        })
    return;
}