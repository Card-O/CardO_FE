import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const Output = () => {
    return (
        <DrawWrapper>
        <Imagecomponent/>
        <EditPannel>
            <span>이미지가 마음에 안 드시나요?</span>
            <Button backcolor="#FFFFFF">이미지 다시 생성</Button>
            <Button backcolor="#FFFFFF">저장하기</Button>
            <Button backcolor="#0055FF" color="#FFFFFF"
                style={{marginTop :"10px"}} onClick={() => 
                window.open("/editcard", "_blank", 
                "width=600,height=400")}>편집하기</Button>
        </EditPannel>
        </DrawWrapper>
    );
}

const Imagecomponent = styled.img `
    width:40%;
    height:90%;
    background:gray;
`

const DrawWrapper = styled.main`
display:flex;
justify-content: space-between;
position: absolute;
width: 80%;
height: 500px;
padding:30px;
align-items: center;
// left: 81px;
// top: 1292px;

background: linear-gradient(180deg, #D7F8FF 0%, #B5C1FF 100%);
border-radius: 20px;
`

const EditPannel = styled.article `
display: flex;  
    flex-direction: column;
    gap: 20px;     
`

const Button = styled.button `
background-color : ${props => props.backcolor};
color : ${props => props.color};
    border-radius: 5px;
    position: relative;
    width: 400px;
    height: 73px;
    border:none;
    margin-right:50px;
`

export default Output;