import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const LoginComp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [jwt, setJwt] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://3.104.109.104:8080/auth/login', {
                username,
                password,
            },{ headers: {
                    'Content-Type': 'application/json',
                },
            });

            // 응답이 존재하고 jwt가 있는지 확인
            if (response && response.data && response.data.token) {
                // 로그인 성공 시 JWT 토큰 저장
                setJwt(response.data.token);
                const token = response.data.token;
                localStorage.setItem('jwt', token);
                setUsername('');
                setPassword('');
                alert('로그인 성공'); // 로그인 성공 메시지
                navigate('service');
            } else {
                alert("로그인에 실패했습니다");
            }
        } catch (error) {
            alert("로그인에 실패했습니다.");   
        }
    };

    return (
        <PageWrapper>
            <MainComp>
                <LogoImg src="/images/Logohome.png" alt="Logo" />
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
                        style={{ marginBottom: '0' }}
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Label>비밀번호를 잊으셨나요?</Label>
                </LabelWrapper>
                <LoginButton onClick={handleLogin}>로그인</LoginButton>
                <Signup onClick={() => navigate("/signup")}>회원가입</Signup>
            </MainComp>
        </PageWrapper>
    );
}

const PageWrapper = styled.div`
top:2em;
    display: flex;
    position: absolute;
    width: 452px;
height: 523px;
right: 109px;
justify-content: center; /* 자식 요소를 수직 가운데 정렬 */

`;

const MainComp = styled.div `
position: absolute;
display: flex;
width: 452px;
height: 570px;
    flex-direction: column; /* 세로 정렬 */
    align-items: center; /* 자식 요소를 수평 가운데 정렬 */
    justify-content: center; /* 자식 요소를 수직 가운데 정렬 */
    flex-direction: column; /* 세로 정렬 */
    padding:20px;
    
    background: rgba(8, 17, 39, 0.85);
    border-radius: 18px;
`

const LogoImg = styled.img`
    width: 320px;
    margin-bottom:20px;
    
    
`;


const LoginButton =styled.button `
    text-decoration: none; 
    width:200px;
    left:18px;
    padding:10px;
    text-align: center;
    background:black;
    color:white;
    border-radius: 6px;
    border-style:none;
`
const Signup =styled.button `
    
    text-align: center;
    width:200px;
height:40px;
color:white;
background: transparent; /* 버튼 배경을 투명하게 설정 */
border-radius: 6px;
border-style:none;
margin:5px;

`

const LabelWrapper = styled.div`

    display: flex;
    margin-left:100px;
    align-items: flex-start; /* 왼쪽 정렬 */
    flex-direction: column; /* 레이블과 인풋을 세로로 정렬 */
    
    width: 80%; /* 레이블과 인풋 필드의 컨테이너 너비 */
    margin-bottom: 10px; /* 각 입력 필드 사이의 간격 */
`;

const Label = styled.label`
color:white;
left:0;
    font-size: 14px;
    margin-bottom: 5px; /* 레이블과 인풋 필드 사이의 간격 */
`;

const InputComp = styled.input`
    width: 70%; /* 입력 필드의 너비를 SignBar에 맞추기 */
    height: 20px; /* 높이를 설정 */
     /* 입력 필드의 간격 설정 */
    padding: 10px; /* 입력 필드의 내부 여백 설정 */
    border: 1px solid #ccc; /* 테두리 색상 설정 */
    font-size: 14px; /* 글꼴 크기 설정 */
    margin-bottom: 7%;
`;


export default LoginComp;