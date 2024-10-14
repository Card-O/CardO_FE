import styled from "styled-components";

const MessageShow = () =>{
    return(
        <MainWrap>
            생성결과
            <TextArea/>
            <ButtonUse>이용하기</ButtonUse>
        </MainWrap>
    )
}

const MainWrap=styled.main`
font-family: 'Noto Sans KR';
/* Background+VerticalBorder */
font-size:9px;
display:flex;
flex-direction:column;
height: 100vh;
right:0;
overflow: auto; 
flex-grow:1;

background: #F4F6F8;
padding:30px;
gap:15px;

`

const TextArea = styled.textarea `
/* Rectangle 34 */

box-sizing: border-box;
padding:10px;

font-size: 9px;

min-height:200px;
height: auto;
resize: none; 

background: #FFFFFF;
border: 1px solid #5B89FF;
border-radius: 10px;


`
const ButtonUse = styled.button `
/* Component 4 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;

isolation: isolate;


width:100px;
font-size:12px;
padding:10px;
color:white;
align-content: center;

background: #000000;
border-radius: 26px;


`
export default MessageShow;