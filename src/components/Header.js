import styled from "styled-components";
import logo from "../assets/images/cake.png"
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderContainer>
            <Logo alt="Logo" src={logo} />
            <OptionsBar>
                <Link to={"/"}>
                    <ButtonsOptionsBar>Início</ButtonsOptionsBar>
                </Link>
                <Link to={"/cardapio"}>
                    <ButtonsOptionsBar>Cardápio</ButtonsOptionsBar>
                </Link>
                <Link to={"/pedido"}>
                    <ButtonsOptionsBar>Encomenda</ButtonsOptionsBar>
                </Link>
                <ButtonsOptionsBar>Promoções</ButtonsOptionsBar>
                <ButtonsOptionsBar>Endereço</ButtonsOptionsBar>
            </OptionsBar>
            <ButtonProfile> <CgProfile /> </ButtonProfile>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100vw;
    height: 110px;
    background-color: #FFFDE3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 0 15px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
`
const Logo = styled.img`
    width: 200px;
    height: 100px;
`
const OptionsBar = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content:  flex-end;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 15px;
`
const ButtonsOptionsBar = styled.button`
    height: 50px;
    background-color: #FFFDE3;
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    font-family: 'Josefin Slab', serif;
    font-size: 22px;
    color:  #784c00;
    text-align: center;
    cursor: pointer;
    /* font-family: 'Fredericka the Great', cursive; */
    /* font-family: 'Roboto', sans-serif;
    font-family: 'Tangerine', cursive; */
`
const ButtonProfile = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 20px;
    svg{
        font-size: 30px;
        color:  #784c00;
        cursor: pointer;
    }
`