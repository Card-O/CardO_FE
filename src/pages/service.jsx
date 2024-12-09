import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import NavBarEdit from "../components/navbarMain/navbar_edit";

import OutputImage from "../components/outputImage";
import MessageOption from "../components/messageoption";
import Footer from "../components/footer";

const Service = () => {
    const navigate = useNavigate();
    return(
        <ServiceWrapper>
            <NavBarEdit/>
            {/* 메시지+번호 입력 컴포넌트 */}
            <MessageOption/>

            {/* 이미지 생성 컴포넌트 */}
            <OutputBox>
            <OutputImage/>
            </OutputBox>
            <StyledFooter />
        </ServiceWrapper>
    );
}

const ServiceWrapper = styled.main`
`

const StyledFooter = styled(Footer)`  /* Footer에 추가 스타일을 적용 */
    margin-top: 50px;
`;


const OutputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    transform: scale(0.9);
`;

export default Service;