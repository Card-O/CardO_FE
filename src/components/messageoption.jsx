import styled from "styled-components";
import InputMessage from "./messagescomp/inputmessage";
import SetNumber from "./messagescomp/setmessagenum";

const MessageOption = () => {
    return(
        <OptionWrapper>
        <InputMessage/> <br></br>
        <SetNumber/>
        </OptionWrapper>
    );
}

const OptionWrapper = styled.main`
    display:flex;
    justify-content: space-between;
`

export default MessageOption;