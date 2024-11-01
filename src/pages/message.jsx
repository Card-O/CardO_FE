import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import MessageShow from "../components/ai_messagemake/messageexport";
import Messageset from "../components/ai_messagemake/messagesend";

const Message = () => {
    const navigate = useNavigate();
    return(
        <MainWrap>
            
            <Messageset/>
            <MessageShow/>
            
        </MainWrap>
        
    );
}

const MainWrap = styled.main `
display:flex;
flex-direction: row;
justify-content: space-between;

`

const CreateImg = styled.button ``

export default Message;