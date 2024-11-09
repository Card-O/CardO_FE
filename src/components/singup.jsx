import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupComp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://3.104.109.104:4173/auth/register', {
                username,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert("회원가입 성공!");
                navigate("/");
            } else {
                alert("회원가입에 실패했습니다.");
            }
        } catch (error) {
            console.error("회원가입 오류:", error);
            alert("회원가입에 실패했습니다.");
        }
    };

    return (
        <SignBar>
            <h1 style={{ marginBottom: '30%', marginTop: '10%' }}>회원가입</h1>
            <LabelWrapper>
                <Label>아이디</Label>
                <InputComp 
                    placeholder="아이디를 입력하세요." 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </LabelWrapper>
            <LabelWrapper>
                <Label>비밀번호</Label>
                <InputComp 
                    type="password" 
                    placeholder="비밀번호를 입력하세요." 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </LabelWrapper>
            <AdmitButton onClick={handleSignup}>등록</AdmitButton>
        </SignBar>
    );
};

const SignBar = styled.main `
/* Rectangle 12 */
    z-index: 2; /* BlueComp보다 높은 z-index로 설정하여 위에 배치 */
box-sizing: border-box;
font-size: 10px;

position: absolute;
width: 452px;
height: 523px;
left: 109px;
top: 100px;

background: #FFFFFF;
border: 1px solid #979BFF;
border-radius: 23px;
display:flex;
flex-direction: column;
align-items: center; /* 수평 가운데 정렬 */

`
const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column; /* 레이블과 인풋을 세로로 정렬 */
    align-items: center; /* 왼쪽 정렬 */
    width: 80%; /* 레이블과 인풋 필드의 컨테이너 너비 */
    margin-bottom: 10px; /* 각 입력 필드 사이의 간격 */
`;

const Label = styled.label`
    text-align:left;
    font-size: 14px;
    margin-bottom: 5px; /* 레이블과 인풋 필드 사이의 간격 */
`;

const InputComp = styled.input`
    width: 70%; /* 입력 필드의 너비를 SignBar에 맞추기 */
    height: 20px; /* 높이를 설정 */
     /* 입력 필드의 간격 설정 */
    padding: 10px; /* 입력 필드의 내부 여백 설정 */
    border: 1px solid #ccc; /* 테두리 색상 설정 */
    border-radius: 6px; /* 모서리 둥글게 설정 */
    font-size: 14px; /* 글꼴 크기 설정 */
    margin-bottom: 7%;
`;


const AdmitButton = styled.button `
width:200px;
height:40px;
color:white;
background: #0A2FB6;
border-radius: 6px;
border-style:none;
margin:30px;

`

export default SignupComp;