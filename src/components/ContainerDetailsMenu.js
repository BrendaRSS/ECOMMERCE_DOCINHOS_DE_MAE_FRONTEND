import styled from "styled-components";
import { SiCakephp } from "react-icons/si";
import { TbCake } from "react-icons/tb";
import { RiCake2Fill } from "react-icons/ri";
import { MdCake } from "react-icons/md";
import { HiCake } from "react-icons/hi2";
import { GiCakeSlice } from "react-icons/gi";

export default function ContainerDetailsMenu() {
    return (
        <ContainerDetails>
            <ContainerInternalDetailsMenu >
                {/* TAMANNHOS E RECHEIOS */}
                <CakesDetails>Preço por Kg</CakesDetails>
                <Line />
                <InformationsCakes>
                    <ColumTraditionalAndSpecial>

                        <TypeTitle>Sabores Tradicionais: R$75,00 Kg</TypeTitle>

                        <ContainerCakesFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Chocolate</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Ninho</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Beijinho</span>
                            </TypesCakeFilling>
                        </ContainerCakesFilling>
                    </ColumTraditionalAndSpecial>

                    <ColumTraditionalAndSpecial>
                        <TypeTitle>Sabores Especiais: R$80,00 Kg</TypeTitle>

                        <ContainerCakesFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Maracujá</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Ninho com Óreo</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Doce de leite</span>
                            </TypesCakeFilling>
                        </ContainerCakesFilling>
                    </ColumTraditionalAndSpecial>

                    <ColumTraditionalAndSpecial>
                        <TypeTitle>Sabores Gourmet: R$85,00 Kg</TypeTitle>

                        <ContainerCakesFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Ninho com morango</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Ninho com Nutela</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <GiCakeSlice />
                                <span>Chocolate com morango</span>
                            </TypesCakeFilling>
                        </ContainerCakesFilling>
                    </ColumTraditionalAndSpecial>
                </InformationsCakes>

                {/* MASSAS */}
                <CakesDetails>Tipos de Massas</CakesDetails>
                <Line />
                <InformationsCakes>
                    <ColumTraditionalAndSpecial>
                        <TypeTitle>Chocolate</TypeTitle>
                    </ColumTraditionalAndSpecial>

                    <ColumTraditionalAndSpecial>
                        <TypeTitle>Branca</TypeTitle>
                    </ColumTraditionalAndSpecial>

                    <ColumTraditionalAndSpecial>
                        <TypeTitle>Mista</TypeTitle>
                    </ColumTraditionalAndSpecial>
                </InformationsCakes>

                {/* DECORAÇÕES */}
                <CakesDetails>Tipos de Decoração</CakesDetails>
                <Line />
                <InformationsCakes>
                    <ColumTraditionalAndSpecial>
                        <TypeTitle>Simples</TypeTitle>

                        <ContainerCakesFilling>
                            <TypesCakeFilling>
                                <HiCake />
                                <span>Chantili</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <HiCake />
                                <span>Acetato</span>
                            </TypesCakeFilling>
                        </ContainerCakesFilling>
                    </ColumTraditionalAndSpecial>

                    <ColumTraditionalAndSpecial>
                        <TypeTitle>Especiais</TypeTitle>

                        <ContainerCakesFilling>
                            <TypesCakeFilling>
                                <HiCake />
                                <span>Ganache</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <HiCake />
                                <span>Pó ou glitter</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <HiCake />
                                <span>Brigadeiros</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <HiCake />
                                <span>Flores</span>
                            </TypesCakeFilling>
                            <TypesCakeFilling>
                                <HiCake />
                                <span>Morangos</span>
                            </TypesCakeFilling>
                        </ContainerCakesFilling>
                    </ColumTraditionalAndSpecial>
                </InformationsCakes>
            </ContainerInternalDetailsMenu>
        </ContainerDetails>
    )
}

const ContainerDetails = styled.div`
    width: 100%;
    /* height: 1200px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
    background-color: #FFFDE3;
`
const ContainerInternalDetailsMenu = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
`
export const CakesDetails = styled.span`
    /* width: 300px; */
    font-family: 'Josefin Slab', serif;
    font-size: 40px;
    color: #784c00;
    text-align: center;
    margin-top: 10px;
`
export const Line = styled.div`
    width: 75%;
    height: 1px;
    background-color: #784c00;
    margin-top: 10px;
    margin-bottom: 10px;
`
const InformationsCakes = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 70px;
`
const ColumTraditionalAndSpecial = styled.div`
    width: 34%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
`
const TypeTitle = styled.div`
    width: 95%;
    height: 40px;
    border-radius: 40px;
    box-shadow: 0px 0px 25px 8px rgba(255,120,120,0.18);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Slab', serif;
    font-size: 25px;
    color:  #784c00;
    margin-top: 15px;
`
const ContainerCakesFilling = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`
const TypesCakeFilling = styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    svg{
        font-size: 20px;
        color: #FF597B;
    }
    span{
        display: block;
        margin-left: 24px;
        text-align: center;
        font-family: 'Josefin Slab', serif;
        font-size: 25px;
        color:  #784c00;
        display: block;
    }
`