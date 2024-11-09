import styled from "styled-components";
import GlobalStyle from '../styles/globalstyle';
import { CanvasProvider } from '../context/CanvasContext';
import NavImg from "../components/editcard/editnav";
import ImgShow from "../components/editcard/editshow";
import EditPannel from "../components/editcard/editpannel";


const EditCard = () => {
    
    return(
        <CanvasProvider>
            <GlobalStyle />
            <NavImg/>
            <EditComp>
            <EditPannel/>
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