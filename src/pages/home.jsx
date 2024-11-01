import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import LoginComp from "../components/loginbar";

const Home = () => {
    return(
        <>
        
        <HomePageComp>
        <LoginComp/>
        </HomePageComp>
        
        </>
        
        
    );
}

const HomePageComp = styled.div`
    background-color: #5278FF;
    background-image: url('/images/시작 페이지.png'); /* 배경 이미지 설정 */
    background-size: contain; /* 이미지가 전체를 덮도록 설정 */
    background-repeat: no-repeat;
    background-position: center; /* 이미지를 중앙에 위치시키기 */
    height: 100vh; /* 뷰포트를 꽉 채우도록 높이 설정 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export default Home;