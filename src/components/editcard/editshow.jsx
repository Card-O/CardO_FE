// editshow.jsx
import styled from "styled-components";
import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useCanvas } from '../../context/CanvasContext';

const ImgShow = () => {
    const { canvasRef } = useCanvas();

    return(
        <MainWrap>
            <StyledCanvas ref={canvasRef} />
        </MainWrap>
    );
};


const MainWrap = styled.main`
    background: #E9E9E9;
    height: 100vh;
    width: 65%;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCanvas = styled.canvas`
    border: 2px solid black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.5); /* 화면에서 캔버스를 1.5배 확대 */
    width: 350px; /* 원본 크기 */
    height: 350px; /* 원본 크기 */
`;
export default ImgShow;
