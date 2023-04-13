import styled from "styled-components";
import fundo from "../assets/images/fundo9.png";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FiInstagram } from "react-icons/fi";

export default function HomePage() {
    return (
        <>
            <ContainerHomePage>
                <OrderHomePage fundo={fundo}>
                    <TextOrder>Pedir <CgChevronDoubleRight /></TextOrder>
                </OrderHomePage>
                <Instagram>
                    <InformationsInsta>
                        <ContainerPhotoBio >
                            <PhotoInstagram> <img alt="profile instagram" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg"/> </PhotoInstagram>
                            <BioInstagram>
                                <TitleBio>docinhos_de_mãe</TitleBio>
                                <Followers>3k Seguidores</Followers>
                                <Description>
                                    <p>Josy de Souza</p>
                                    <span>Encomendas de bolos, docinhos e kits <br />
                                        Somente delivery: João Pessoa-PB <br />
                                        Infos nos destaques do perfil 😻</span>
                                </Description>
                            </BioInstagram>
                        </ContainerPhotoBio>
                        < Follow><FiInstagram /><span>Seguir</span></Follow>
                    </InformationsInsta>
                    <PhotosInstagram>
                        <img alt="cake" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg" />
                        <img alt="cake" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg" />
                        <img alt="cake" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg" />
                        <img alt="cake" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg" />
                        <img alt="cake" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg" />
                        <img alt="cake" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg" />
                        <img alt="cake" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLo8hdXza2OBQr_-Kmg9FmJ7BDrskc1LdTx2cH5j0udwmwNU6KdrkiPessCqBku_AtiV8Ns6evoE7R7Yijz6zIvjXg0gF3Q_8MKque7lbAuaMkuiAg9S19uizyEFHzm1MekALVFx-s5oX1rhtgxsShssh5lw4k3AnqCarJvqNa7Greynfb84cRfviN/s2000/naked-cake-de-frutas-vermelhas.jpg" />
                    </PhotosInstagram>
                </Instagram>
                <ContainerAbout>Sobre</ContainerAbout>
            </ContainerHomePage>
        </>
    );
}

const ContainerHomePage = styled.div`
    height: 100vh;
`
const OrderHomePage = styled.div`
    width: 100%;
    height: 550px;
     background-image: linear-gradient(45deg, #FFFDE3 40%, #CFE8A9,  #FFBFA9, #FFACAC, #E64848);
     /* background-image: url(${(props) => props.fundo}); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 110px;
    position: relative;
`
const TextOrder = styled.button`
    width: 350px;
    height: 100px;
    position: absolute;
    margin-left: 390px;
    margin-top: 400px;
    background-color: #d7006f;
    border: none;
    border-radius: 50px;
    font-family: 'Changa One', cursive;
    font-size: 60px;
    color:  #FFFDE3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg{
        font-size: 90px;
    }
`
const Instagram = styled.div`
    width: 100%;
    height: 1200px;
    background-color: #FFFDE3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 70px 0;
`
const InformationsInsta = styled.div`
    width: 950px;
    height: 26%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    box-sizing: border-box;
`
const ContainerPhotoBio = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`
const PhotoInstagram = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 25px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`
const BioInstagram = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
`
const TitleBio = styled.div`
    width: 100%;
    height: 80px;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    color: rgb(193 156 60);
`
const Followers = styled.div`
    width: 100%;
    height: 70px;
    font-family: 'Roboto', sans-serif;
    font-size: 21px;
    color: rgb(82 79 79);
`
const Description = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: rgb(193, 156, 60);
    }
    span{
        display: block;
        margin-top: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: rgb(82 79 79);
    }
`
const Follow = styled.button`
    width: 150px;
    height: 40px;
    border: 1px solid #000000;
    background-color:  #FFFDE3;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        display: block;
        margin-left: 10px;
    }
    svg{
        font-size: 18px;
        color: #000000;
    }
`
const PhotosInstagram = styled.div`
    width: 950px;
    height: 74%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #CFE8A9;
    img{
    width: 220px;
    height: 220px;
    }
`
const ContainerAbout = styled.div`
    width: 100%;
    height: 700px;
    background-color: #FF616D;
`