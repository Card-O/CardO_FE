import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Message = () => {
    const navigate = useNavigate();
    return(
        <>
            <h3>메시지 생성하는 페이지</h3>

            <CreateImg >제작완료</CreateImg>
        </>
        
    );
}

const CreateImg = styled.button ``

export default Message;