import styled from "styled-components";
import { HiCake } from "react-icons/hi2";
import { GiCakeSlice } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ContainerDetailsMenu() {
    const [categories, setCategories] = useState(false);
    const [fillingsCake, setFillingsCake] = useState(false);
    const [cakeDough, setCakeDough] = useState(false);
    const [categoryDecorations, setCategoryDEcorations] = useState(false);
    const [decorations, setDecorations] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/product/category`)
            .then((res) => {
                setCategories(res.data);
                findInformations();
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }, []);

    function findInformations() {
        axios.get(`http://localhost:5000/product/fillings`)
            .then((res) => {
                setFillingsCake(res.data);
            })
            .catch((error) => {
                console.log(error.response.data)
            });

        axios.get(`http://localhost:5000/product/dough`)
            .then((res) => {
                setCakeDough(res.data);
            })
            .catch((error) => {
                console.log(error.response.data)
            });

        axios.get(`http://localhost:5000/product/category-decorations`)
            .then((res) => {
                setCategoryDEcorations(res.data);
            })
            .catch((error) => {
                console.log(error.response.data)
            });

        axios.get(`http://localhost:5000/product/decorations`)
            .then((res) => {
                setDecorations(res.data);
            })
            .catch((error) => {
                console.log(error.response.data)
            });
    }

    return (
        <ContainerDetails>
            <ContainerInternalDetailsMenu >
                <CakesDetails>Preço por Kg</CakesDetails>
                <Line />
                <InformationsCakes>
                    {categories === false ?
                        "CARREGANDO..."
                        :
                        categories.map((c) =>
                            <ColumTraditionalAndSpecial>
                                <TypeTitle>Sabores {c.name}: R${c.price} Kg</TypeTitle>
                                <ContainerCakesFilling>
                                    {fillingsCake === false ?
                                        "CARREGANDO..."
                                        :
                                        fillingsCake.map((f) => {
                                            if (f.category === c.name) {
                                                return <>
                                                    <TypesCakeFilling>
                                                        <GiCakeSlice />
                                                        <span>{f.type}</span>
                                                    </TypesCakeFilling>
                                                </>
                                            }
                                        })}
                                </ContainerCakesFilling>
                            </ColumTraditionalAndSpecial>
                        )
                    }
                </InformationsCakes>

                <CakesDetails>Tipos de Massas</CakesDetails>
                <Line />
                <InformationsCakes>
                    {cakeDough === false ?
                        "CARREGANDO..."
                        :
                        cakeDough.map((d) =>
                            <ColumTraditionalAndSpecial>
                                <TypeTitle>{d.type}</TypeTitle>
                            </ColumTraditionalAndSpecial>
                        )
                    }
                </InformationsCakes>

                <CakesDetails>Tipos de Decoração</CakesDetails>
                <Line />
                <InformationsCakes>
                    {categoryDecorations === false ?
                        "CARREGANDO..."
                        :
                        categoryDecorations.map((c) =>
                            <ColumTraditionalAndSpecial>
                                <TypeTitle>{c.name}</TypeTitle>

                                <ContainerCakesFilling>
                                    {decorations === false ?
                                        "CARREANDO..."
                                        :
                                        decorations.map((d) => {
                                            if (d.category === c.name) {
                                                return <>
                                                    <TypesCakeFilling>
                                                        <HiCake />
                                                        <span>{d.name}</span>
                                                    </TypesCakeFilling>
                                                </>
                                            }
                                        })
                                    }
                                </ContainerCakesFilling>
                            </ColumTraditionalAndSpecial>
                        )}
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