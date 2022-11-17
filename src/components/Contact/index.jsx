import { StyledSection } from "../../utils/style/JSX/Contact"
import "../../utils/style/CSS/Contact.css"
import { StyledFrameText, StyledText, StyledMailTo } from "../../utils/style/JSX/Contact"

function Contact () {
    return(
        <StyledSection id="contact">
            <h2>Contact</h2>
            <div className="under_section">
                <StyledFrameText>
                    <StyledText>Merci, pour votre visite sur mon portfolio.<br/>
                        Si mon travail vous plaît n'hésitez, pas à me contacter. 
                    </StyledText>
                </StyledFrameText>
                <StyledMailTo href="mailto:f.curtis.dev@gmail.com">Envoyer email</StyledMailTo>
            </div>
        </StyledSection>
    )
}

export default Contact;