import styled from "styled-components";

const NavBar = () => {
    return (
        <NavbarComp>
        <div>
            <Logo backgroundImage="https://media.discordapp.net/attachments/1283247858346102880/1293076740192866334/21.png?ex=67060f0f&is=6704bd8f&hm=ca0ec9f108288555aed463a87063637cb397fc3fefe900f34502957dbe996965&=&format=webp&quality=lossless&width=1440&height=600"
                alt="내비게이션 바" />
        </div>
        </NavbarComp>
    );
}

const Logo = styled.div`
    position: absolute;
    
    top:13px;
    left: 20px;
    width: 130px; /* 원하는 크기로 설정하세요 */
    height: 60px; /* 원하는 크기로 설정하세요 */
    background-image: url(${props => props.backgroundImage});
    background-size: contain; /* 이미지가 전체적으로 보이도록 설정 */
    background-repeat: no-repeat; /* 반복되지 않도록 설정 */
    background-position: center; /* 이미지가 중앙에 위치하도록 설정 */
    
    z-index: 1;
    flex-grow: 1;


`

const NavbarComp = styled.div`
    background: linear-gradient(to right, #6B8BFF, #0E43FF);
    display:fex;
    position: relative;
    width: 100%;
    height: 80px;
    left: 0;
    top: 0;
    z-index: 0; /* Logo보다 낮은 값으로 설정 */
    backdrop-filter: blur(10px); /* 배경 블러 효과 추가 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 부드러운 그림자 효과 */
`

export default NavBar;