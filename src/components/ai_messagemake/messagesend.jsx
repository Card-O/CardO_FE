import styled from "styled-components";
import { useStateContext } from '../../context/StateContext';
import { useState } from "react";
import axios from 'axios';
import ImageChoice from './imagechoice'; // ImageChoice 컴포넌트 가져오기

const Messageset = () => {
    const { selectedValue, setSelectedValue, promotionText, setPromotionText  } = useStateContext();
    console.log('setSelectedValue in Messageset:', setSelectedValue);
    const [time, setTime] = useState("");
    const [target, setTarget] = useState("");
    const [what, setWhat] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        // 데이터 객체 생성
        const data = {
            time: time,
            target: target,
            what: what,
            atmosphere: selectedValue, // 선택한 분위기
        };
        console.log('Data being sent:', data);
        // localStorage에서 JWT 가져오기
        const token = localStorage.getItem('jwt'); // 'jwt'는 실제 key로 변경할 수 있음

        setLoading(true);

        try {
            const response = await axios.post('http://3.104.109.104:8080/chat', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // JWT를 Authorization 헤더에 포함
                },
            });

            setPromotionText(response.data);
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
            alert("에러 발생. 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainWrap>
            {loading && <LoadingWrapper>로딩 중입니다...</LoadingWrapper>}
            <span>시간, 장소</span>
            <InputBox value={time} onChange={(e) => setTime(e.target.value)} />
            <span>홍보 대상</span>
            <InputBox value={target} onChange={(e) => setTarget(e.target.value)} />
            <span>무엇을</span>
            <InputBox value={what} onChange={(e) => setWhat(e.target.value)} />

            <label>
                <input type="checkbox" /> 이미지 추가
            </label>
            <ImageChoice setSelectedValue={setSelectedValue} />
            <ButtonMake onClick={handleSubmit}>생성</ButtonMake>
        </MainWrap>
    );
};

const LoadingWrapper = styled.div`
    font-size: 16px;
    color: #333;
    text-align: center;
    margin: 20px 0;
`;

const MainWrap = styled.main`
font-family: 'Noto Sans KR';
height: 100vh;
overflow: auto; 
width:70%;
left:0;
font-size:10px;
padding:30px;
display:flex;
flex-direction:column;
items-align:center;
gap:5px;
box-sizing: border-box;

`

const InputBox = styled.textarea `
    /* Rectangle 31 */
font-family: 'Noto Sans KR';
box-sizing: border-box;

height: 78px;

background: #F2F2F2;
border: 1px solid #000000;
border-radius: 10px;
overflow: auto; 
resize: none; 
margin-bottom:20px;
    
`

const ButtonMake = styled.button`

align-items: center;

width: 126px;
height: 53px;


background: #2C2C2C;
color:white;
border-radius: 8px;

`
export default Messageset;