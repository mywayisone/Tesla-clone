import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [ burgerState, setBurgerState] = useState(false)
    const cars = useSelector(selectCars)
    console.log(cars)
  return (
    <Container>
        <a href='#'>
            <img src="images/tesla-logo-png.png" alt='' id="headerImg" />
        </a>
        <Menu>
            {cars && cars.map((car, index) =>(
                <a key = {index} href="#">{car}</a>
            ))}
            
        </Menu>
        <RightMenu>
            <a href="#">shop </a>
            <a href="#">tesla account </a>
            <CustomMenu onClick={() => setBurgerState (true)}/>
        </RightMenu>
        <BurgarNav show = {burgerState}>
            <CloseWrapper>
                <CloseButton onClick={() => setBurgerState(false)} />
            </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key = {index}><a  href="#">{car} </a></li>
                ))}
            
            <li><a href="#">inventions </a></li>
            <li><a href="#">categories </a></li>
            <li><a href="#">new model </a></li>
            <li><a href="#">new group </a></li>
            <li><a href="#">tesla products </a></li>
            <li><a href="#">tesla inventory </a></li>

        </BurgarNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    padding: 0 20px;    
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

     a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;

    }

    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;

    }

    display: flex;
    align-items: center;
    justify-content: center;
   

`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgarNav = styled.div`
    background: white;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 250px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    border-radius: 10px;
    overflow-y: scroll;
    transform : ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 1s;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
    }

    a {
        font-weight: 600;
        font-size: 12px;
    }
    
`
const CloseButton = styled(CloseIcon)`
    cursor: pointer;
    background: #ececec;
    position: fixed;

`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`