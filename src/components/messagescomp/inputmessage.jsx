import styled from "styled-components";
import React, { useEffect, useState } from 'react';

const InputMessage = () => {
    const [promotionText, setPromotionText] = useState('');

    // 컴포넌트가 마운트될 때 로컬 스토리지에서 promotionText를 불러옴
    useEffect(() => {
        const storedText = localStorage.getItem('promotionText');
        if (storedText) {
            setPromotionText(storedText);
        }

        // 로컬 스토리지 변경 감지
        const handleStorageChange = (e) => {
            if (e.key === 'promotionText') {
                setPromotionText(e.newValue); // 새로운 값으로 상태 업데이트
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup function
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setPromotionText(newValue);
        localStorage.setItem('promotionText', newValue);
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight - 900, behavior: 'smooth' });
    };

    return (
        <MessageWrapper>
            <Label>💌 메시지 입력</Label><br />
            <InputWrapper>
                <MessagePage onClick={() => window.open("/message", "_blank", "width=600,height=400")}>
                AI 자동생성
                </MessagePage>
                <GenerateImageButton onClick={scrollToBottom}>
                    이미지 생성
                </GenerateImageButton>
                <TypingWrapper>
                    <span style={{ marginBottom: "20px" }}>(광고)</span>
                    <ShowText
                        value={promotionText}
                        onChange={handleChange}
                        placeholder="여기에 메시지를 입력해주세요."
                    />
                    <br/>
                    <span>무료거부 0808100095</span>
                </TypingWrapper>
            </InputWrapper>
        </MessageWrapper>
    );
};

const Label = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #4A4A4A;
`;

const InputTitle = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 44px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #C7CACF;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const MessageWrapper = styled.main`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    box-sizing: border-box;
`;

const InputWrapper = styled.article`
    box-sizing: border-box;
    height: 703px;
    padding: 30px;
    background: #F6F6F6;
    border: 1px solid #E1E3E5;
    border-radius: 10px;
    flex-direction: column;
`;

const MessagePage = styled.button `
    margin-right: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 40px;
    border-style: none;
    color: white;
    background: linear-gradient(90deg, #4F7EF8 0%, #9460D4 100%);
    border-radius: 4px;
`;

const GenerateImageButton = styled.button`
    margin-right: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 40px;
    border-style: none;
    color: white;
    background: linear-gradient(90deg, #4F7EF8 0%, #9460D4 100%);
    border-radius: 4px;
`;

const TypingWrapper = styled.article `
    max-height: 500px;
    padding: 30px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.28);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const ShowText = styled.textarea `
    display: block;
    max-width: 100%;
    width: 100%;
    height: 170px;
    background: #E8F9FF;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box; 
`;

export default InputMessage;
