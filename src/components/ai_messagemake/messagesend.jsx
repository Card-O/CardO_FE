import styled from "styled-components";
import ImageChoice from "./imagechoice";

const Messageset = () => {
    return (
        <MainWrap>
            <span>시간,장소</span>
            <InputBox/>
            <span>홍보 대상</span>
            <InputBox/>
            <span>무엇을</span>
            <InputBox/>

            <label>
                <input type="checkbox" /> 이미지 추가
            </label>
            <ImageChoice/>
            <ButtonMake>생성</ButtonMake>
        </MainWrap>
    )
    

}

const MainWrap = styled.main`
font-family: 'Noto Sans KR';
height: 100vh;
overflow: auto; 
width:70%;
left:0;
font-size:10px;
padding:30px;
display:flex;
flex-direction:column;
items-align:center;
gap:5px;
box-sizing: border-box;

`

const InputBox = styled.textarea `
    /* Rectangle 31 */
font-family: 'Noto Sans KR';
box-sizing: border-box;

height: 78px;

background: #F2F2F2;
border: 1px solid #000000;
border-radius: 10px;
overflow: auto; 
resize: none; 
margin-bottom:20px;
    
`

const ButtonMake = styled.button`

align-items: center;

width: 126px;
height: 53px;


background: #2C2C2C;
color:white;
border-radius: 8px;

`
export default Messageset;