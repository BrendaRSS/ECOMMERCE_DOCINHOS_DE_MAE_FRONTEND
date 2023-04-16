import styled from "styled-components";
import ContainerOrder from "../components/OrderComponent";


export default function OrderPage() {
    return (
        <MenuContainer>
            <ContainerOrder />
        </MenuContainer>
    );
}

const MenuContainer = styled.div`
    height: 100vh;
    background-color: #FFFDE3;
`
