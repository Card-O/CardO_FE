import React from 'react';
import styled from 'styled-components';

const Preview = () => {
    return (
        <PreviewContainer>
            <TextContainer>
                <PreviewText>이미지</PreviewText>
                <Box />
            </TextContainer>
            <TextContainer>
                <PreviewText>문자</PreviewText>
                <Box />
            </TextContainer>
        </PreviewContainer>
    );
};

const PreviewContainer = styled.div`
    display: flex;
    align-items: flex-start; /* 세로 정렬을 위쪽으로 맞춤 */
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 텍스트와 박스를 수직 정렬 */
    margin-right: 20px; /* 오른쪽 여백 */
`;

const PreviewImage = styled.img`
    max-width: 100%;
    max-height: 300px;
    margin: 10px 0; /* 이미지와 박스 간의 간격 */
`;

const PreviewText = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px; /* 텍스트와 박스 간의 간격 */
`;

const Box = styled.div`
    width: 250px; /* 네모칸의 너비 */
    height: 250px; /* 네모칸의 높이 */
    background-color: #e0e0e0; /* 네모칸 배경색 */
    border: 1px solid #ccc; /* 네모칸 테두리 */
    border-radius: 10px;
`;

export default Preview;
