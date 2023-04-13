import styled from "styled-components"
import ContainerAboutCakes from "../components/ContainerAboutCakes";
import ContainerDetailsMenu from "../components/ContainerDetailsMenu";
import PhotosCakesMenu from "../components/PhotosCakesMenu";

export default function MenuPage(){
    return (
        <MenuContainer>
            <ContainerAboutCakes />
            <ContainerDetailsMenu />
            <PhotosCakesMenu />
        </MenuContainer>
    );
}

const MenuContainer = styled.div`
    height: 100vh;
    background-color: #FFFDE3;
`
