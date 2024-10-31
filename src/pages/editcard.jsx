import styled from "styled-components";
import NavImg from "../components/editcard/editnav";
import ImgShow from "../components/editcard/editshow";
import EditPannel from "../components/editcard/editpannel";


const EditCard = () => {
    
    return(
        <>
            <NavImg/>
            <EditComp>
            <EditPannel/>
                <ImgShow/>
                
            </EditComp>

            
        </>
        
    );
}

const EditComp = styled.main `
display:flex;
flex-direction:row;

`

// const Linkimg = styled(link)``

export default EditCard;