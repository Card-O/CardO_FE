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



// import React from "react";
// import styled from "styled-components";

// // 메인 화면 컴포넌트
// const Service = () => {
//     return (
//         <Container>
//             <Header>
//                 <Logo>Card - O</Logo>
//             </Header>

//             <Content>
//                 <LeftSection>
//                     <MessageInput>
//                         <Label>메시지 입력</Label>
//                         <Input placeholder="제목을 입력해주세요. (제한 30byte, 한글은 2byte)" />
//                         <ButtonGroup>
//                             <Button>직접 입력</Button>
//                             <Button>샘플형 생성</Button>
//                             <ByteInfo>26/0byte</ByteInfo>
//                             <UnitButton>단위</UnitButton>
//                         </ButtonGroup>
//                         <MessageBox>(광고) 직접 입력해야 하는 칸</MessageBox>
//                         <MessageInfo>무료전송 08081300095</MessageInfo>
//                     </MessageInput>
//                 </LeftSection>

//                 <RightSection>
//                     <Settings>
//                         <SettingTitle>발신번호 설정</SettingTitle>
//                         <SettingButton>발신번호 등록</SettingButton>
//                     </Settings>

//                     <ReceiverInput>
//                         <SettingTitle>수신번호 입력</SettingTitle>
//                         <Input placeholder="직접 입력" />
//                         <AddButton>번호추가 +</AddButton>
//                         <ReceiverList>
//                             <p>추가된 수신번호가 없습니다.</p>
//                             <SaveButton>주소록에 저장</SaveButton>
//                         </ReceiverList>
//                     </ReceiverInput>

//                     <SendOptions>
//                         <SendButton>미리보기</SendButton>
//                         <SubmitButton>발송하기</SubmitButton>
//                         <Warning>* 야간(21시~08시) 발송하는 광고문자는 반드시 수신동의를 받아야 합니다.</Warning>
//                     </SendOptions>
//                 </RightSection>
//             </Content>

//             <ImageSection>
//                 <ImageButton>이미지 생성</ImageButton>
//                 <GeneratedImage>
//                     <img src="burger.png" alt="Generated" />
//                     <RightPane>
//                         <PaneTitle>이미지가 마음에 안 드시나요?</PaneTitle>
//                         <RegenerateButton>이미지 다시 생성</RegenerateButton>
//                         <SaveButton>저장하기</SaveButton>
//                         <EditButton>편집하기</EditButton>
//                     </RightPane>
//                 </GeneratedImage>
//             </ImageSection>

//             <Footer>
//                 <FooterText>footer 부분. 아이콘이나 가겨운 이미지, api 등 저작권 표기가 필요한 것들은 이곳에 적습니다.</FooterText>
//             </Footer>
//         </Container>
//     );
// };

// // 스타일 컴포넌트
// const Container = styled.div`
//     font-family: Arial, sans-serif;
//     padding: 20px;
// `;

// const Header = styled.header`
//     display: flex;
//     align-items: center;
//     padding: 10px 0;
// `;

// const Logo = styled.h1`
//     color: #333;
//     font-size: 1.5rem;
// `;

// const Content = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-top: 20px;
// `;

// const LeftSection = styled.div`
//     width: 45%;
// `;

// const RightSection = styled.div`
//     width: 45%;
// `;

// const MessageInput = styled.div`
//     background-color: #f9f9f9;
//     padding: 20px;
//     border-radius: 8px;
// `;

// const Label = styled.h2`
//     font-size: 1.2rem;
//     margin-bottom: 10px;
// `;

// const Input = styled.input`
//     width: 100%;
//     padding: 10px;
//     border-radius: 4px;
//     border: 1px solid #ccc;
// `;

// const ButtonGroup = styled.div`
//     display: flex;
//     align-items: center;
//     margin: 10px 0;
// `;

// const Button = styled.button`
//     padding: 8px 12px;
//     margin-right: 8px;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 4px;
// `;

// const ByteInfo = styled.span`
//     margin-left: auto;
// `;

// const UnitButton = styled.button`
//     background-color: #ddd;
//     border: none;
//     border-radius: 4px;
//     padding: 8px;
// `;

// const MessageBox = styled.div`
//     background-color: #eaf7ff;
//     padding: 10px;
//     border-radius: 4px;
//     margin-top: 10px;
//     text-align: center;
// `;

// const MessageInfo = styled.div`
//     color: #888;
//     margin-top: 10px;
//     font-size: 0.9rem;
// `;

// const Settings = styled.div`
//     margin-bottom: 20px;
// `;

// const SettingTitle = styled.h2`
//     font-size: 1.2rem;
//     margin-bottom: 10px;
// `;

// const SettingButton = styled.button`
//     background-color: #007bff;
//     color: #fff;
//     padding: 8px 12px;
//     border: none;
//     border-radius: 4px;
// `;

// const ReceiverInput = styled.div`
//     margin-bottom: 20px;
// `;

// const AddButton = styled.button`
//     background-color: #ddd;
//     padding: 8px 12px;
//     border: none;
//     border-radius: 4px;
// `;

// const ReceiverList = styled.div`
//     background-color: #f9f9f9;
//     padding: 20px;
//     border-radius: 8px;
// `;

// const SaveButton = styled.button`
//     background-color: #007bff;
//     color: #fff;
//     padding: 8px 12px;
//     border: none;
//     border-radius: 4px;
//     margin-top: 10px;
// `;

// const SendOptions = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// const SendButton = styled.button`
//     background-color: #ddd;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 4px;
//     margin-top: 10px;
// `;

// const SubmitButton = styled.button`
//     background-color: #007bff;
//     color: #fff;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 4px;
//     margin-top: 10px;
// `;

// const Warning = styled.p`
//     color: red;
//     font-size: 0.9rem;
//     margin-top: 5px;
// `;

// const ImageSection = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: 20px;
// `;

// const ImageButton = styled.button`
//     background-color: #007bff;
//     color: #fff;
//     padding: 10px 30px;
//     border: none;
//     border-radius: 4px;
//     font-size: 1.2rem;
// `;

// const GeneratedImage = styled.div`
//     display: flex;
//     align-items: center;
//     margin-top: 20px;
// `;

// const RightPane = styled.div`
//     margin-left: 20px;
// `;

// const PaneTitle = styled.h3`
//     font-size: 1.1rem;
//     margin-bottom: 10px;
// `;

// const RegenerateButton = styled.button`
//     background-color: #ddd;
//     padding: 10px;
//     border: none;
//     border-radius: 4px;
// `;

// const EditButton = styled.button`
//     background-color: #007bff;
//     color: #fff;
//     padding: 10px;
//     border: none;
//     border-radius: 4px;
//     margin-top: 10px;
// `;

// const Footer = styled.footer`
//     margin-top: 30px;
//     text-align: center;
//     font-size: 0.9rem;
//     color: #666;
// `;

// const FooterText = styled.p`
//     margin-top: 20px;
//     font-size: 0.8rem;
//     color: #888;
// `;

// export default Service;