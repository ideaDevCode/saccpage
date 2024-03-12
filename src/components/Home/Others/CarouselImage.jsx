import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    padding-bottom: 10px;
    cursor: pointer;
`;

const Carousel = styled.section`
    width: 100%;
    margin-block: 20px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
    place-content: center;
    gap: 30px;

    @media (width <= 450px) {
        width: 100%;
        margin-block: 20px 0px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(25rem, 100%), 1fr));
        place-content: center;
        gap: 0px;
    }
`;

const ContentImage = styled.div`
    overflow: hidden;
    border-radius: 5px;
    margin-block: 30px 0px;
    border: 1px solid var(--cod-gray-100);
    transition: all 0.2s;
    background-color: white;

    &:hover {
        transform: scale(1.1,1.1);
        transition: all 0.2s;
    }

    @media (width <= 450px) {
        overflow: hidden;
        border-radius: 5px;
        margin-block: 10px 0px;
        border: 1px solid var(--cod-gray-100);
        transition: all 0.2s;
        background-color: white;
    }
`;

const WindowModal = styled.div`
    width: 100%;
    height: 100dvh;
    display: grid;
    place-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 100;
    gap: 20px;
    transition: all 0.2s ease;
`;

const Picture = styled.div`
    width: 80%;
    margin-inline: auto;
    overflow: hidden;
    & img {
        width: 100%;
        border-radius: 5px;
    }

    @media (width <= 450px) {
        width: 95%;
        margin-inline: auto;
        overflow: hidden;
    }
`;


const CloseButton = styled.button`
    width: 40px;
    padding: 10px 10px 5px 10px;
    background-color: transparent;
    border-radius: 50px;
    border: 2px solid white;
    color: white;
    transform: translate(50vw);
    cursor: pointer;

    @media (width <= 450px) {
        width: 40px;
        padding: 10px 10px 5px 10px;
        background-color: transparent;
        border-radius: 50px;
        border: 2px solid white;
        color: white;
        transform: translate(43vw);
        cursor: pointer;
    }
`;

export default function CarouselImage() {

    const [viewImage, setViewImage] = useState(false)
    const [pathImage, setPathImage] = useState('')

    const handleVieImage = (event) => {
        setViewImage(true)
        setPathImage(event.target.src)
    }

    return <>
        <Carousel>
        {
            viewImage && 
            <WindowModal>
                <CloseButton onClick={() => setViewImage(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </CloseButton>
                <Picture>
                    <img src={pathImage} alt="dashboard.jpg" />
                </Picture>
            </WindowModal>
        }
            <ContentImage>
                <Image src={dashboardReports} alt="dashboard.jpg" onClick={handleVieImage}/>
            </ContentImage>
            <ContentImage>
                <Image src={dashboard} alt="dashboard.gif" onClick={handleVieImage}/>
            </ContentImage>
            <ContentImage>
                <Image src={dashboardPagos} alt="dashboard-pagos.png" onClick={handleVieImage}/>
            </ContentImage>
        </Carousel>
    </>
}