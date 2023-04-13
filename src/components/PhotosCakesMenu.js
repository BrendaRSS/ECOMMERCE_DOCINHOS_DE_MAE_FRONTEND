import styled from "styled-components";
import { CakesDetails, Line } from "./ContainerDetailsMenu";

export default function PhotosCakesMenu(){
    return (
        <ContainerPhotosCakesMenu>
            <CakesDetails>Meus Bolos</CakesDetails>
            <Line />
            <CarouselPhotos>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                    <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
            </CarouselPhotos>

            <CarouselPhotos>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
            </CarouselPhotos>

            <CarouselPhotos>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
                <PhotosCakesWithDescription>Olá..........................................</PhotosCakesWithDescription>
            </CarouselPhotos>
        </ContainerPhotosCakesMenu>
    )
}

const ContainerPhotosCakesMenu = styled.div`
    width: 100%;
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
    background-color: #FFFDE3;
`
// const ContainerInternal = styled.div`
//     width: 95%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     box-sizing: border-box;
//     padding: 10px 0;
//     background-color: #333232;
//     border-radius: 30px ;
// `
const CarouselPhotos = styled.div`
    width: 95%;
    height: 300px;
    background-color: #FFFDE3;
    margin-top: 40px;
    display: flex;
    overflow: hidden;
    overflow-x: auto;
  
    &::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
    &::-webkit-scrollbar-track-piece{
	background: #54aa44dd;
}
`
const PhotosCakesWithDescription = styled.div`
    width: 600px;
    height: 95%;
    background-color: aquamarine;
    margin-right: 10px;
`