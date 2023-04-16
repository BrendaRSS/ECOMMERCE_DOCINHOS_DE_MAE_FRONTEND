import styled from "styled-components";

export default function OrderComponent(){
    return (
        <ContainerOrder>
            FAÇA SEU PEDIDO
                QUAL O TAMANHO DO SEU BOLO?
                

                ESCOLHA A MASSA
            <CarouselOrder>
                <BoxItem></BoxItem>
                <BoxItem></BoxItem>
                <BoxItem></BoxItem>
            </CarouselOrder>

            ESCOLHA O RECHEIO
            <CarouselOrder>
                <BoxItem></BoxItem>
                <BoxItem></BoxItem>
                <BoxItem></BoxItem>
            </CarouselOrder>

            ESCOLHA O TIPO DE DECORAÇÃO
            <CarouselOrder>
                <BoxItem></BoxItem>
                <BoxItem></BoxItem>
                <BoxItem></BoxItem>
            </CarouselOrder>
        </ContainerOrder>
    )
}

const ContainerOrder = styled.div`
    width: 100%;
    height: 550px;
    background-color: #FFFDE3;
    margin-top: 110px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 15px;
`
const CarouselOrder = styled.div`
    width: 95%;
    height: 300px;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BoxItem = styled.div`
    width: 200px;
    height: 200px;
    background-color: brown;
    margin-right: 20px;
`