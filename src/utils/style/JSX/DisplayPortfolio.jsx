import styled from "styled-components"
import paintBlast from "../../../images/paint-blast.jpg"

export const StyledSection = styled.section`
    background: url(${paintBlast}) no-repeat center;
    background-size: cover;
    color: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledLink = styled.a`
    display: inline-block;
    position: relative;
    padding: 20px 20px;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 20px;
    font-weight: 600;
    
    &:hover
    {
        background: #03e9f4;
        color: #050801;
        box-shadow: 0 0 5px #03e9f4,
                    0 0 25px #03e9f4,
                    0 0 50px #03e9f4,
                    0 0 200px #03e9f4;
        -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
    }
    
    &:nth-child(1){
        filter: hue-rotate(270deg);
    }

    &:nth-child(2){
        filter: hue-rotate(110deg);
    }

    &:nth-child(3){
        filter: hue-rotate(207deg);
    }
`
export const StyledFrameLink = styled.span`
    position: absolute;
    display: block;

    &:nth-child(1)
    {
        @keyframes animate1
        {
            0%
            {
                left: -100%;
            }
            50%,100%
            {
                left: 100%;
            }
        }
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,transparent,#03e9f4);
        animation: animate1 1s linear infinite;
    }
    
    &:nth-child(2)
    {
        @keyframes animate2
        {
            0%
            {
                top: -100%;
            }
            50%,100%
            {
                top: 100%;
            }
        }
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg,transparent,#03e9f4);
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
    }

    &:nth-child(3)
    {
        @keyframes animate3
        {
            0%
            {
                right: -100%;
            }
            50%,100%
            {
                right: 100%;
            }
        }
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg,transparent,#03e9f4);
        animation: animate3 1s linear infinite;
        animation-delay: 0.50s;
    }

    &:nth-child(4)
    {
        @keyframes animate4
        {
            0%
            {
                bottom: -100%;
            }
            50%,100%
            {
                bottom: 100%;
            }
        }
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg,transparent,#03e9f4);
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
    }
`
export const StyledWelcomeText = styled.div`
    width: 650px;
    height: 93%;
    font: normal 48px/1 'Special Elite';
    transform-box: fill-box;
    margin: 0px -255px;
`

export const StyledLetter = styled.span`
    display: block;
    position: absolute;

    &:nth-child(1){
        transform-origin: 14px 34px;
        transform: translate(76.2118px,355.448px) rotate(-0.57109rad);
        
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(2){
        transform-origin: 12px 34px;
        transform: translate(100.409px,338.0567px) rotate(-0.777656rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(3){
        transform-origin: 15px 34px;
        transform: translate(115.53710000000001px,315.8639px) rotate(-0.959418rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(4){
        transform-origin: 15px 34px;
        transform: translate(132.3368px,288.421px) rotate(-1.099542rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(5){
        transform-origin: 14px 34px;
        transform: translate(145.6385px,260.3472px) rotate(-1.177742rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(6){
        transform-origin: 15px 34px;
        transform: translate(156.067px,231.2418px) rotate(-1.207766rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(7){
        transform-origin: 15px 34px;
        transform: translate(168.0996px,201.2869px) rotate(-1.19061rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(8){
        transform-origin: 15px 34px;
        transform: translate(180.6455px,172.3971px) rotate(-1.12232rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(9){
        transform-origin: 15px 34px;
        transform: translate(195.8696px,144.2663px) rotate(-0.9878rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(10){
        transform-origin: 15px 34px;
        transform: translate(216.6728px,119.24510000000001px) rotate(-0.778322rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(11){
        transform-origin: 14px 34px;
        transform: translate(241.5222px,100.80179999999999px) rotate(-0.534591rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(12){
        transform-origin: 15px 34px;
        transform: translate(268.7081px,88.4982px) rotate(-0.294793rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(13){
        transform-origin: 15px 34px;
        transform: translate(299.6092px,82.4058px) rotate(-0.098631rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(14){
        transform-origin: 15px 34px;
        transform: translate(333.3332px,81.8048px) rotate(0.075071rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(15){
        transform-origin: 17px 34px;
        transform: translate(364.0335px,88.5176px) rotate(0.335765rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(16){
        transform-origin: 15px 34px;
        transform: translate(395.618px,103.53630000000001px) rotate(0.599055rad);
         @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(17){
        transform-origin: 15px 34px;
        transform: translate(419.4019px,123.77799999999999px) rotate(0.801698rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(18){
        transform-origin: 15px 34px;
        transform: translate(439.2944px,147.7894px) rotate(0.947198rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(19){
        transform-origin: 13px 34px;
        transform: translate(457.1514px,173.154px) rotate(1.042332rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(20){
        transform-origin: 15px 34px;
        transform: translate(469.8328px,199.36px) rotate(1.102238rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(21){
        transform-origin: 15px 34px;
        transform: translate(483.2342px,228.19779999999997px) rotate(1.136033rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(22){
        transform-origin: 14px 34px;
        transform: translate(497.373px,256.8331px) rotate(1.140237rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(23){
        transform-origin: 14px 34px;
        transform: translate(510.2985px,284.1883px) rotate(1.11251rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(24){
        transform-origin: 15px 34px;
        transform: translate(524.3813px,311.4399px) rotate(1.035889rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(25){
        transform-origin: 14px 34px;
        transform: translate(542.5488px,336.7931px) rotate(0.866775rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(26){
        transform-origin: 12px 34px;
        transform: translate(565.7081px,355.2011px) rotate(0.55568rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }

    &:nth-child(27){
        transform-origin: 15px 34px;
        transform: translate(589.0629px,363.9609px) rotate(0.074589rad);
        @keyframes displayLetter{
            from{
                
                transform: translate(100%)
            }
        } 
        animation: 5s ease-in-out 1s  both  displayLetter;
    }
`

export const StyledBitmoji = styled.img`
    position: absolute;
    top: 185px;
    width: 416px;
    height: 118%;
`
    
export const StyledWarning = styled.p `
    position: absolute;
    left: 5%;
    top: 102px;
    font-size: 126%;
`

