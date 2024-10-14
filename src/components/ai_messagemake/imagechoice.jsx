import styled from "styled-components";

const ImageChoice = () => {
    return (
        <MainWrapp>
            <span>원하는 분위기를 정해주세요.</span>
            <SelectBox>
                <option value="calm">차분한</option>
                <option value="bright">밝은</option>
                <option value="dark">어두운</option>
                <option value="colorful">화려한</option>
            </SelectBox>
        </MainWrapp>
    )
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