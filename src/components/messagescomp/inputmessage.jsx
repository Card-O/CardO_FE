import styled  from "styled-components";

const InputMessage = () => {
    return (
        <MessageWrapper>
        <span>메시지 입력</span><br></br>
        <InputWrapper>
        <InputTitle placeholder="여기에 제목을 입력해주세요." />
        <MessagePage onClick={() => window.open("/message", "_blank", "width=600,height=400")}>AI자동생성</MessagePage>
        <MessagePage>직접 입력</MessagePage>
            <TypingWrapper>
                <span style={{marginBottom : "15px"}}>(광고)</span>
                <ShowText placeholder="여기에 메시지를 입력해주세요."/>
                <span>무료거부 0000000</span>
            </TypingWrapper>
        </InputWrapper>
        
        </MessageWrapper>
    )
}

const InputTitle = styled.input`
    /* Input */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;

height: 44px;
width:100%;
left: 17px;
right: 17px;
top: calc(50% - 44px/2 - 312.5px);

background: #FFFFFF;
border: 1px solid #C7CACF;
border-radius: 5px;
margin-bottom:10px;

`

const MessageWrapper = styled.main`
    display:flex;
    flex-direction:column;
    
    box-sizing: border-box; /* padding 값을 포함시키기 위해 추가 */
    width: 100%; /* 부모 요소의 크기 설정 */
    height: auto; /* 필요에 따라 조정 */

`

const InputWrapper = styled.article`
    box-sizing: border-box;

height: 703px;
left: 196px;
right: 844px;
top: 187px;
width:400px;
height:700px;
padding:30px;
background: #F6F6F6;
border: 1px solid #E1E3E5;
border-radius: 10px;
flex-direction: column;


`

const MessagePage = styled.button `
margin-right:20px;
margin-bottom: 20px; /* 아래쪽 여백 추가 */

/* Link */

width: 97.91px;
height: 27px;
left: 13px;
top: 79px;
border-style:none;
color:white;

background: linear-gradient(90deg, #4F7EF8 0%, #9460D4 100%);
border-radius: 4px;


`

const TypingWrapper = styled.article `
    /* Background+Shadow */

height: 272px;
left: 13px;
right: 21px;
top: 138px;
padding:7px;
background: #FFFFFF;
box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.28);
border-radius: 10px;
display:flex;
flex-direction: column;

`
const ShowText = styled.textarea `

/* Background */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

max-width: 100%;
width: 100%;
height: 170px;

background: #E8F9FF;
border-radius: 5px;
padding:10px;
box-sizing: border-box; 
`


export default InputMessage;