import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Output from "../components/outputImage";
import MessageOption from "../components/messageoption";
import Footer from "../components/footer";

const Service = () => {
    const navigate = useNavigate();
    return(
        <ServiceWrapper>
            <NavBar/>
            {/* 메시지 세팅 컴포넌트 */}
            <MessageOption/>
            <br></br>

            {/* 이미지 생성 컴포넌트 */}
            <OutputBox>
            <Output/>
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
transform: scale(0.7);
`



export default Service;