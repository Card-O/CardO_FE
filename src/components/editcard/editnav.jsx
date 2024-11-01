// editnav.jsx
import styled from "styled-components";
import NavBar from "../navbar";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { useState } from 'react';
import { useCanvas } from '../../context/CanvasContext';

const NavImg = () => {
    const { canvas } = useCanvas(); // context로 canvas 객체 가져오기
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
        console.log("제작 완료 버튼 클릭됨");
    };

    const handleSaveImage = () => {
        if (canvas) {
            // 캔버스를 이미지 URL로 변환
            const dataURL = canvas.toDataURL({
                format: 'png', // PNG 포맷으로 저장 (필요에 따라 'jpeg' 등으로 변경 가능)
                quality: 1.0    // 이미지 품질 설정 (0 ~ 1)
            });

            // 데이터 URL로 다운로드 링크 생성
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'canvas-image.png'; // 다운로드될 파일 이름
            link.click(); // 링크 클릭하여 이미지 다운로드
        } else {
            console.warn("Canvas is not initialized.");
        }
    };

    return (
        <NavWrapp>
            <IconComp>
                <FaArrowLeft style={{ color: "white", marginRight: '20px' }} onClick={handleComplete} />
                <FaArrowRight style={{ color: "white", marginRight: '60px' }} />
                <EndButton onClick={handleComplete}>
                    {isCompleted ? "완료됨" : "제작완료"}
                </EndButton>
                <MdSaveAlt style={{ color: "white" }} />
                <span style={{ color: "white", cursor: "pointer" }} onClick={handleSaveImage}>
                    이미지 저장
                </span>
            </IconComp>
            <NavBar />
        </NavWrapp>
    );
};


const NavWrapp = styled.nav `
position: relative;
`

const IconComp = styled.div `
position: absolute; /* NavBar 위로 올리기 위해 절대 위치 지정 */
    top: 14px; /* 필요한 위치로 조정 */
    right: 10%; /* 필요한 위치로 조정 */
    display: flex; /* 아이콘을 나란히 배치 */
    align-items: center;
    gap: 10px; /* 아이콘 간 간격 */
    z-index:10;
    justify-content: center;
    
`

const EndButton = styled.button `
/* Rectangle 5 */

width: 100px;
height: 50px;
left: 504px;
top: 17px;

background: #C9D2EA;
border-radius: 36px;
border:none;
margin-right:30px;


`
export default NavImg;