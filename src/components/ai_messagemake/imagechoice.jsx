import React from 'react';
import styled from "styled-components";

const ImageChoice = ({ setSelectedValue }) => {
    const handleSelect = (event) => {
        // 선택된 값 설정
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <span>이미지 테마 선택 </span>
            <select onChange={handleSelect}>
                <option value="">선택하세요</option>
                <option value="Painting of">명화</option>
                <option value="Sigma 85 mm f/1.4. High Definition, Bokeh.">실사</option>
                <option value="graphite drawing of">연필 소묘</option>
            </select>
        </div>
    );
}
const MainWrapp = styled.main `

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 20px;
margin-bottom:20px;
height: 110px;
max-height:50px;

background: #FFFFFF;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
border-radius: 5px;
`


const SelectBox = styled.select`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #f9f9f9;
`;

export default ImageChoice