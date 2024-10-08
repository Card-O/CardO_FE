import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Sigup = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>회원가입 페이지</h3>
            <Sign onClick={() => navigate("/service")}>등록</Sign>
        </>
        
    );
}

const Sign = styled.button `

`

export default Sigup;