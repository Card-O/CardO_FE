import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Output = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const jwtToken = localStorage.getItem('jwt');

    const handleImageGeneration = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8080/image/generate-image', {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            });
            const data = response.data;
           if (data.url) {
            const base64Image = `data:image/png;base64,${data.url}`;
            setImageUrl(base64Image);
        } else {
            console.error('Base64 data is undefined:', data);
            alert('이미지 데이터를 가져오는 데 실패했습니다.');
        }
            localStorage.setItem('in', data.imgnum);
            localStorage.setItem('uid', data.userid);
          
        } catch (error) {
            console.error('Error generating image:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageRegeneration = async () => {
        setLoading(true);
        try {
            const imgnum = localStorage.getItem('in');
            const userid = localStorage.getItem('uid');
            const response = await axios.post('http://localhost:8080/image/generate-next-image', null, {
                params: {
                    userid: Number(userid),
                    imgnum: Number(imgnum)
                },
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            });
            const data = response.data;
         if (data.url) {
            const base64Image = `data:image/png;base64,${data.url}`;
            setImageUrl(base64Image);
        } else {
            console.error('Base64 data is undefined:', data);
            alert('이미지 데이터를 가져오는 데 실패했습니다.');
        }
        
            localStorage.setItem('in', data.in);
        } catch (error) {
            console.error('Error regenerating image:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveImage = async () => {
        localStorage.setItem('image',imageUrl);
        alert("저장이 완료되었습니다");
    };

    return (
        <MainWrapper>
            <LoadImg onClick={handleImageGeneration}>
                {loading ? '🤖 이미지 생성 중... 🤖' : '이미지 생성 👉START👉'}
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
                    <Label>🖼️ 이미지가 마음에 안 드시나요?</Label>
                    <Button backcolor="#FFFFFF" onClick={handleImageRegeneration}>
                        이미지 다시 생성
                    </Button>
                    <Button backcolor="#FFFFFF" onClick={handleSaveImage}>사용하기</Button>
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



const Label = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #4A4A4A;
`;

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
    background: #F6F6F6;
`

const DrawWrapper = styled.article`
    display: flex;
    flex-direction: row;         /* 요소들을 가로로 배치 */
    justify-content: center;
    gap: 80px;
    align-items: center;         /* 세로로 중앙에 정렬 */
    width: 1000px;
    height: 500px;
    padding: 30px;
    background: linear-gradient(180deg, #D7F8FF 0%, #B5C1FF 100%);
    border-radius: 20px;
    min-width:900px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    width: 300px;
    height: 80px;
    left: 395px;
    top: 1149px;
    color:white;
    border:none;
    border-radius: 10px;
    margin-bottom: 50px;
    background: linear-gradient(90deg, #4F7EF8 0%, #9460D4 100%);
    font-size: 1rem;
`

export default Output;