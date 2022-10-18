import styled from "styled-components";

export const StyledImg = styled.img`
    height: 100vh;
    margin-bottom: -4px;
` 
export const StyledDisplayArrow = styled.input`
    border: solid red ;
    position: absolute;
    width: 2.8%;
    top: 62.8%;
    right: 11.6%;
    height: 5%;
    background: black;
    border-radius: 50px;
    transform: perspective(35px) rotateX(66deg);
    border-top-width: 5.5px;
    cursor: pointer;
    @keyframes flashes {
    0% 
    { 
        border: solid red 2.5px;
        top: 62.8%;
        border-top-width: 5.5px;
    }
    
    100% 
    { 
        border: solid red 1.8px;
        top: 63%;
        border-top-width: 7.7px;
    }
  }
    animation: 1s ease-in-out  infinite both flashes;
    &:focus
    {
        border: solid red 1.8px;
        top: 63%;
        border-top-width: 7.7px;
        animation: none;

        @keyframes takeOff 
        {
            0% 
            { 
                opacity: 1;
            }
            
            100% 
            { 
                opacity: 0;
                display: none;
            }
        }
        
        animation: 2s ease-in-out both takeOff;
    }

` 

export const StyledBlockArrow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 3%;
    bottom: 40%;
    width: 22%;
`

export const StyledArrow = styled.img`
    width: 45%;
    transform: skew(24deg, 15deg);
    rotate: 15deg;
`


  

