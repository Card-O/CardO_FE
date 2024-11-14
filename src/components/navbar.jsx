import styled from "styled-components";


const NavBar = () => {
    return (
        <NavbarComp>
        
            <Logo backgroundImage="/images/21.png" alt="내비게이션 바" />
        </NavbarComp>
    );
}

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

export default NavBar;