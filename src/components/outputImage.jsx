import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Output = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const jwtToken = localStorage.getItem('jwt');

    const handleImageGeneration = async () => {
        setLoading(true); // 로딩 상태 시작
        try {
           const response = await axios.get('http://localhost:8080/image/generate-image', {
                headers: {
                    Authorization: `Bearer ${jwtToken}`, // JWT를 Authorization 헤더에 추가
                },
            });
            setImageUrl(response.data); // 이미지 URL을 상태에 저장
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            setLoading(false); // 로딩 상태 종료
        }
    };

    const handleImageRegeneration = async () => {
        setLoading(true); // 로딩 상태 시작
        try {
           const response = await axios.get('http://localhost:8080/image/generate-next-image', {
                headers: {
                    Authorization: `Bearer ${jwtToken}`, // JWT를 Authorization 헤더에 추가
                },
            });
            setImageUrl(response.data); // 이미지 URL을 상태에 저장
        } catch (error) {
            console.error('Error regenerating image:', error);
        } finally {
            setLoading(false); // 로딩 상태 종료
        }
    };

    return (
        <MainWrapper>
            <LoadImg onClick={handleImageGeneration}>
                {loading ? '이미지 생성 중...' : '이미지 생성'}
            </LoadImg>
            <DrawWrapper>
                {imageUrl ? (
                    <Imagecomponent>
                        <img src={imageUrl} alt="Generated" style={{ width: '100%', height: 'auto' }} />
                    </Imagecomponent>
                ) : (
                    <Imagecomponent>이미지 생성 예정</Imagecomponent>
                )}
                <EditPannel>
                    <span>이미지가 마음에 안 드시나요?</span>
                    <Button backcolor="#FFFFFF" onClick={handleImageRegeneration}>
                        이미지 다시 생성
                    </Button>
                    <Button backcolor="#FFFFFF">저장하기</Button>
                    <Button 
                        backcolor="#0055FF" 
                        color="#FFFFFF"
                        style={{ marginTop: "10px" }} 
                        onClick={() => window.open("/editcard", "_blank", "width=600,height=400")}
                    >
                        편집하기
                    </Button>
                </EditPannel>
            </DrawWrapper>
        </MainWrapper>
    );
};

const MainWrapper = styled.main`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;   
padding-bottom:20px;

`
const Imagecomponent = styled.div `
    width:405px;
    height:405px;
    min-width: 405px;
    
    background:gray;
`

const DrawWrapper = styled.article`
display: flex;
    flex-direction: row;         /* 요소들을 가로로 배치 */
    justify-content: space-between; /* 좌우로 배치, 공간을 균등하게 나눔 */
    align-items: center;         /* 세로로 중앙에 정렬 */
    width: 80%;
    padding: 30px;
    background: linear-gradient(180deg, #D7F8FF 0%, #B5C1FF 100%);
    border-radius: 20px;
    min-width:900px;

`

const EditPannel = styled.article `
display: flex;  
    flex-direction: column;
    gap: 20px;
    
`

const Button = styled.button `
background-color : ${props => props.backcolor};
color : ${props => props.color};
    border-radius: 5px;
    position: relative;
    width: 400px;
    height: 73px;
    border:none;
    margin-right:50px;
`

const LoadImg = styled.button `
/* Rectangle 35 */

width: 500px;
height: 60px;
left: 395px;
top: 1149px;
color:white;
border:none;
background: #0055FF;
border-radius: 10px;
margin-bottom: 50px;

`

export default Output;