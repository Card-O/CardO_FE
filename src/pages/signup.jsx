import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import SignupComp from "../components/singup";

const Sigup = () => {
    const navigate = useNavigate();
    return (
        <>
            <SignupComp/>
            <BlueComp>
                <Link to="/">
                <Logo src="/images/21.png" alt="Logo" />
                </Link>
                <Textbox>
                    <h2>획기적인 홍보문구의 완성, Card - O</h2>
                    <h4>with 뿌리오</h4>
                    <Subtxt>
                    동아리, 학원, 가게 등에서, 공지 혹은 홍보용 메시지를 보낼 때 어려움을 겪으신적은 없으신가요? <br></br>
                    카드오(Card - O ) 서비스를 이용하면, 그런 걱정은 단 몇 초, 혹은 몇 분만에 해결할 수 있습니다. <br></br>
                    <br></br>
                    카드오 에서는, 생성형 인공지능을 통해 홍보 문구 메시지와 카드뉴스형 이미지를 제공해 주며, <br></br>사용자가 직접 카드뉴스를 수정할 수 있게끔 제공해 드리고 있습니다. 
                    <br></br><br></br>
                    한 번 사용해 보세요! 
                    </Subtxt>
                </Textbox>
            </BlueComp>
            <h3>회원가입 페이지</h3>
            <Sign onClick={() => navigate('home')}>등록</Sign>
        </>
        
    );
}

const Textbox = styled.article `
color:white;
font-size: 14px; /* 글씨 크기를 조금 작게 조정 */
    position: absolute;
    right: 200px; /* 화면의 오른쪽에서 10px 떨어지게 조정 */
    top: 50%; /* 수직 가운데 정렬을 위해 위치를 50%로 설정 */
    transform: translateY(-50%); /* 수직 가운데 정렬을 위해 변환 */
    max-width: 80%; /* 텍스트 박스의 최대 너비를 제한하여 레이아웃이 깨지지 않도록 설정 */

`

const Subtxt = styled.span`
display: block;
    margin-top: 10px; /* 필요한 경우 추가 간격 조정 */
`

const BlueComp = styled.article `
position: absolute;
width: 100%;
height: 350px;
left: 0px;
top: 0px;

/* 로고 */
background: linear-gradient(90deg, #6B8BFF 0%, #0E43FF 100%);
border-radius: 0px 0px 10px 10px;
`

const Logo = styled.img`
/* 21 1 */

position: absolute;
width: 100px;
//height: 72.5px;
left: 22px;
top: 15px;
`;

const Sign = styled.button `

`

export default Sigup;