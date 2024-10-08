import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    const navigate = useNavigate();
    return(
        <>
            <h3>시작 페이지</h3>

            <LoginButton onClick={() => navigate("/service")}>로그인</LoginButton> 
            <Signup onClick={() => navigate("/signup")}>회원가입</Signup>
        </>
        
    );
}

const LoginButton =styled.button `
    text-decoration: none; 
    padding: 15px;
    left:18px;
    font-size: 20px;
    text-align: center;
`
const Signup =styled.button `
    text-decoration: none; 
    padding: 15px;
    left:18px;
    font-size: 20px;
    text-align: center;

`

export default Home;