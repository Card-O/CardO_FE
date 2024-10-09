import styled  from "styled-components";

const InputMessage = () => {
    return (
        <>
        <span>메시지 입력</span><br></br>
        <InputWrapper>
        <MessagePage onClick={() => window.open("/message", "_blank", "width=600,height=400")}>AI자동생성</MessagePage>
        </InputWrapper>
        
        </>
    )
}

const InputWrapper = styled.main`
    box-sizing: border-box;

height: 703px;
left: 196px;
right: 844px;
top: 187px;
width:400px;
height:700px;

background: #F6F6F6;
border: 1px solid #E1E3E5;
border-radius: 10px;
`

const MessagePage = styled.button `

`

export default InputMessage;