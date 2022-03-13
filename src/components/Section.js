import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftButton, rightButton}) {
  return (
    <Wrap bgImage= {backgroundImg}>
        <ItemText>
            <Fade bottom>
                <h1>{title}</h1>
                <p>{description}</p>
            </Fade>
        </ItemText> 
        <Buttons> 
            <Fade bottom>
                <GroupButton>
                    <LeftButton>
                        {leftButton}
                    </LeftButton>
                {rightButton &&
                    <RightButton>
                        {rightButton}
                    </RightButton>
                }
                </GroupButton>
            </Fade>
            <DownArrow src="images/down-svg.svg" />
        </Buttons>  
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    
`
const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
    
`
const LeftButton = styled.div`
    width: 256px;
    height: 40px;
    display: flex;
    color: black;
    justify-content : center;
    align-items : center;
    border-radius: 100px;
    background-color : rgba( 250, 250, 250);
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    text-transform: uppercase;
`
const RightButton = styled(LeftButton)`
    background-color : rgba( 23, 26, 32, 0.8);
    color: white;
    

`
const GroupButton = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const DownArrow = styled.img`
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(142deg) brightness(119%) contrast(115%);
    height:18px;
    margin-top: 20px;
    align-items:center;
    animation: animateDown infinite 1.5s
    
   
`

const Buttons = styled.div`

`