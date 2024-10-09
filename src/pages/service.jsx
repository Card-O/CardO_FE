import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Output from "../components/outputImage";
import MessageOption from "../components/messageoption";


const Service = () => {
    const navigate = useNavigate();
    return(
        <>
            <NavBar/>
            {/* 메시지 세팅 컴포넌트 */}
            <MessageOption/>
            <br></br>
            <LoadImg>이미지 생성</LoadImg>
            {/* 이미지 생성 컴포넌트 */}
            <Output/>
        </>       
    );
}

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

export default Service;