import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Preview = () => {
    const [image, setImage] = useState(null);
    const [promotionText, setPromotionText] = useState(''); // 문자 내용을 위한 state

    useEffect(() => {
        // 이미지 로드
        const storedImage = localStorage.getItem('image');
        if (storedImage) {
            setImage(storedImage);
        }

        // 문자 내용 로드
        const storedText = localStorage.getItem('promotionText');
        if (storedText) {
            setPromotionText(storedText);
        }

        // 로컬 스토리지 변경 감지
        const handleStorageChange = (e) => {
            if (e.key === 'promotionText') {
                setPromotionText(e.newValue); // 변경된 문자 내용을 업데이트
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup function
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <PreviewContainer>
            {/* 이미지 섹션 */}
            <TextContainer>
                <PreviewText>이미지</PreviewText>
                <Box>
                    {image ? (
                        <StyledImage src={image} alt="Preview" />
                    ) : (
                        <p>이미지가 없습니다</p>
                    )}
                </Box>
            </TextContainer>

            {/* 문자 섹션 */}
            <TextContainer>
                <PreviewText>문자</PreviewText>
                <Box>
                    {promotionText ? (
                        <TextBox>{promotionText}</TextBox>
                    ) : (
                        <p>문자가 없습니다</p>
                    )}
                </Box>
            </TextContainer>
        </PreviewContainer>
    );
};

// 스타일 정의
const PreviewContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
`;

const PreviewText = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
`;

const Box = styled.div`
    width: 250px;
    height: 250px;
    background-color: #e0e0e0;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px; /* 텍스트 박스 여백 */
`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
`;

const TextBox = styled.div`
    font-size: 1rem;
    color: #333;
    white-space: pre-wrap; /* 줄바꿈 허용 */
    word-break: break-word; /* 긴 단어도 자동 줄바꿈 */
    text-align: center;
`;

export default Preview;
