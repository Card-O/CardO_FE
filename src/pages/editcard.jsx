import styled from "styled-components";
import GlobalStyle from '../styles/globalstyle';
import { CanvasProvider } from '../context/CanvasContext';
import NavImg from "../components/editcard/editnav";
import ImgShow from "../components/editcard/editshow";
import EditPannel from "../components/editcard/editpannel";
import React, { useEffect, useState } from "react";

const EditCard = () => {
    // service 에서 image 가져오기
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // `sessionStorage`에서 이미지 URL 가져오기
        const storedImageUrl = sessionStorage.getItem("imageUrl");
        if (storedImageUrl) {
            setImageUrl(storedImageUrl);
        }
    }, []);

    return(
        <CanvasProvider>
            <GlobalStyle />
            <NavImg/>
            <EditComp>
            <EditPannel imageUrl = {imageUrl}/>
                <ImgShow/>
                
            </EditComp>

            
        </CanvasProvider>
        
    );
}

const EditComp = styled.main `
display:flex;
flex-direction:row;

`

// const Linkimg = styled(link)``

export default EditCard;