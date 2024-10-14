import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const Output = () => {
    return (
        <MainWrapper>
            <LoadImg>이미지 생성</LoadImg>
            <DrawWrapper>
                    
                <Imagecomponent> 이미지 생성 예정</Imagecomponent>
                
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
        </MainWrapper>
        
    );
}

const MainWrapper = styled.main`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;   
padding-bottom:20px;

`
const Imagecomponent = styled.div `
    width:405px;
    height:405px;
    min-width: 405px;
    
    background:gray;
`

const DrawWrapper = styled.article`
display: flex;
    flex-direction: row;         /* 요소들을 가로로 배치 */
    justify-content: space-between; /* 좌우로 배치, 공간을 균등하게 나눔 */
    align-items: center;         /* 세로로 중앙에 정렬 */
    width: 80%;
    padding: 30px;
    background: linear-gradient(180deg, #D7F8FF 0%, #B5C1FF 100%);
    border-radius: 20px;
    min-width:900px;

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

const LoadImg = styled.button `
/* Rectangle 35 */

width: 500px;
height: 60px;
left: 395px;
top: 1149px;
color:white;
border:none;
background: #0055FF;
border-radius: 10px;
margin-bottom: 50px;

`

export default Output;