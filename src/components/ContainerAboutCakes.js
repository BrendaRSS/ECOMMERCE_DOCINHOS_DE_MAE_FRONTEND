import styled from "styled-components";
import { BsFillSuitClubFill } from "react-icons/bs";
import { CgChevronRight } from "react-icons/cg";

export default function ContainerAboutCakes(){
    return (
        <ContainerCakes>
            <DivTriangle>
                <BsFillSuitClubFill />
            </DivTriangle>
            <ContainerInternalCakes>
                <AboutCakes>
                    Sobre os Bolos
                </AboutCakes>
                <Line />
                <DetailsCakes>
                    <TextDeatil>
                        <CgChevronRight />
                        <span>
                            O preço final do bolo será formado pela
                            somatória do tamanho do bolo, sabor e
                            pela decoração de sua preferência,
                            incluindo os adicionais na decoração,
                            como macarons, flores, brigaderos, morangos, etc.
                        </span>
                    </TextDeatil>
                    <TextDeatil>
                        <CgChevronRight />
                        <span>
                            A decoração simples não tem acrescimo no valor. Cada decoração especial
                            possui um carescimo no valor final. 
                        </span>
                    </TextDeatil>
                    <TextDeatil>
                        <CgChevronRight />
                        <span>
                            Encomendas podem ser feitas a partir de 1,5kg e com 3 dias
                            de antecedência. As informações sobre formas de pagamento, 
                            dias e horários de retirada dos bolos e política de 
                            cancelamento, estão a página de "Encomenda".
                        </span>
                    </TextDeatil>
                </DetailsCakes>
            </ContainerInternalCakes>
        </ContainerCakes>
    )
}

const ContainerCakes = styled.div`
    width: 100%;
    height: 550px;
    background-color: #FFFDE3;
    margin-top: 110px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 15px;
`
const DivTriangle = styled.div`
    width: 100px;
    margin-bottom: -65px;
    display: flex;
    justify-content: center;
    align-items: center;
     svg{
        font-size: 150px;
        color: #86C8BC;
    }
`
const ContainerInternalCakes = styled.div`
    width: 95%;
    height: 100%;
    background-color: #86C8BC;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 25px 20px;

`
const AboutCakes = styled.span`
    display: block;
    width: 300px;
    margin-top: 20px;
    font-family: 'Josefin Slab', serif;
    font-size: 40px;
    color:  #F0F0F0F0;
    text-align: center;
    font-weight: 400;
`
const Line = styled.div`
    width: 75%;
    height: 1px;
    background-color: #F0F0F0F0;
    margin-bottom: 10px;
`
const DetailsCakes = styled.div`
    width: 85%;
    height: 200px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TextDeatil = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    svg{
        font-size: 25px;
        line-height: 0.5;
        color: rgb(36 33 33 / 94%);
    }
    span{
        width: 95%;
        font-family: 'Josefin Slab', serif;
        font-size: 28px;
        color: rgb(36 33 33 / 94%);
    }
`