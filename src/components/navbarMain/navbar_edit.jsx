import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";


const NavBarEdit = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // JWT 토큰을 삭제하고 홈 화면으로 이동
        localStorage.removeItem('jwt'); // JWT 토큰 삭제
        alert("로그아웃 되었습니다."); // 로그아웃 메시지 표시
        navigate("/"); // 홈 화면으로 이동
    };

    return (
        <NavbarComp>
        
            <Logo backgroundImage="/images/21.png" alt="내비게이션 바" />


            <ButtonStyle>
            <Button onClick={handleLogout}>로그아웃</Button>
            </ButtonStyle>
        
        </NavbarComp>
    );
}

const ButtonStyle = styled.div`
    display: flex;
    margin-left: auto; /* Pushes buttons to the right */
    align-items: center;
`;

const Button = styled.button`
    background: white;
    margin-right: 30px;
    border-radius: 20px;
    width: 85px;
    height: 47px;
    font-size: 17px;
    border: none;
    
    &:hover {
        background: #f2f2f2; /* hover 시 배경색 변경 */
        cursor: pointer; /* 마우스 포인터 변경 */
    }
`;

const Logo = styled.div`
    position: absolute;
    top: 13px;
    left: 20px;
    width: 130px;
    height: 60px;
    background-image: url(${props => props.backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    flex-grow: 1;
`;

const NavbarComp = styled.div`
    background: linear-gradient(to right, #6B8BFF, #0E43FF);
    display: flex; /* Corrected spelling */
    align-items: center;
    position: relative;
    width: 100%;
    height: 80px;
    left: 0;
    top: 0;
    z-index: 0;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export default NavBarEdit;