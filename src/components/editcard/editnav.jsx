import styled from "styled-components";
import NavBar from "../navbar";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";

const NavImg = () =>{
    return (
        <NavWrapp>
            <IconComp>
                <FaArrowLeft style={{color:"white", marginRight:'20px'}}/>
                <FaArrowRight style={{color:"white", marginRight:'60px'}} />
                <EndButton>제작완료</EndButton>
                <MdSaveAlt style={{color:"white"}} />
                <span style={{color:"white"}}>이미지 저장</span>
            </IconComp>
            <NavBar/>
            
        </NavWrapp>
    )
}

const NavWrapp = styled.nav `
position: relative;
`

const IconComp = styled.div `
position: absolute; /* NavBar 위로 올리기 위해 절대 위치 지정 */
    top: 14px; /* 필요한 위치로 조정 */
    right: 10%; /* 필요한 위치로 조정 */
    display: flex; /* 아이콘을 나란히 배치 */
    align-items: center;
    gap: 10px; /* 아이콘 간 간격 */
    z-index:10;
    justify-content: center;
    
`

const EndButton = styled.button `
/* Rectangle 5 */

width: 100px;
height: 50px;
left: 504px;
top: 17px;

background: #C9D2EA;
border-radius: 36px;
border:none;
margin-right:30px;


`
export default NavImg;