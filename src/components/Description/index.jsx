import "../../utils/style/CSS/Description.css"
import DatasProjets from "../../utils/datas/Projets"
import imgArrow from "../../images/back_arrow.svg"
import { BackTransition } from "../Transitions"

function Description(i) {
    const root = document.getElementById(`root`)

    const article = document.createElement("article")
    root.appendChild(article)

    const backLink = document.createElement("a")
    backLink.setAttribute("href", "#")
    backLink.setAttribute("id", "back_link")
    article.appendChild(backLink)

    const backArrow = document.createElement("img")
    backArrow.setAttribute("src", imgArrow)
    backArrow.setAttribute("alt", "flèche retour")
    backArrow.setAttribute("id", "back_arrow")
    backLink.appendChild(backArrow)

    const frameDescription = document.createElement("div")
    frameDescription.setAttribute("id", "frame_description")
    article.appendChild(frameDescription)

    const frameImgDescription = document.createElement("div")
    frameImgDescription.setAttribute("id", "frame_img_description")
    frameDescription.appendChild(frameImgDescription)

    const imgDescription = document.createElement("img")
    imgDescription.setAttribute("src", DatasProjets[i].url_image)
    imgDescription.setAttribute("alt", DatasProjets[i].alt)
    imgDescription.setAttribute("id", "img_description_" + DatasProjets[i].id)
    frameImgDescription.appendChild(imgDescription)

    const textDescription = document.createElement("div")
    textDescription.setAttribute("id", "text_description")
    frameDescription.appendChild(textDescription)

    const text = document.createElement("p")
    text.setAttribute("id", `text_${DatasProjets[i].id}`)
    text.innerHTML = DatasProjets[i].description
    textDescription.appendChild(text)

    BackTransition()

    return;
}

export default Description;