import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/navbar";
import Output from "../components/outputImage";


const Service = () => {
    const navigate = useNavigate();
    return(
        <>
            <NavBar/>
            <h3>메인 화면</h3>

            메시지 생성 창 <br></br>
            <MessagePage onClick={() => window.open("/message", "_blank", "width=600,height=400")}>등록</MessagePage>
            
            <Output/>
            <br></br><br></br>
            이미지 편집 창<br></br>
            <EditPage onClick={() => window.open("/message", "_blank", "width=600,height=400")}>등록</EditPage>
        </>       
    );
}

const MessagePage = styled.button `

`

const EditPage = styled.button `
`

export default Service;