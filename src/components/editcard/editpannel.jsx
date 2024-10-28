import styled from "styled-components";
import { useState } from "react";
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineStrikethrough, AiOutlineAlignLeft, AiOutlineFontColors, AiOutlineBgColors } from "react-icons/ai";
import { MdColorize } from "react-icons/md"; // 스포이트 아이콘
import FrameSelect from "./frameselect";

const EditPannel = () => {
    const [count, setCount] = useState(10); // initial count value
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };


    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setCount(value);
        }
    };

    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    return (
        <MainWrapp>

            <FontWrapp>
                <span>글꼴 선택</span>
                <SelectBox style={{ marginTop: 0 }}>
                    <option value="">나눔바른고딕</option>
                    <option value="">굴림</option>
                    <option value="">바탕</option>
                    <option value="">기타등등</option>
                </SelectBox>
                <TextOption>
                    <Button bgColor="#333" Color="white" style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} onClick={handleDecrement}>-</Button>
                    <CountInput type="number" value={count} onChange={handleInputChange} />
                    <Button bgColor="#333" Color="white" style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px', marginRight: '40px' }} onClick={handleIncrement}>+</Button>


                    <Button onClick={() => setIsBold(!isBold)} isActive={isBold}>
                        <AiOutlineBold />
                    </Button>
                    <Button onClick={() => setIsItalic(!isItalic)} isActive={isItalic}>
                        <AiOutlineItalic />
                    </Button>
                    <Button onClick={() => setIsUnderline(!isUnderline)} isActive={isUnderline}>
                        <AiOutlineUnderline />
                    </Button>
                    <Button onClick={() => setIsStrikethrough(!isStrikethrough)} isActive={isStrikethrough}>
                        <AiOutlineStrikethrough />
                    </Button>
                </TextOption>
                <LineOption>
                    <OptionButton>
                        <AiOutlineAlignLeft />
                    </OptionButton>
                    <OptionButton>
                        <AiOutlineFontColors />
                    </OptionButton>
                    <OptionButton style={{ backgroundColor: "red", color: "white" }}>
                        <AiOutlineFontColors />
                    </OptionButton>
                    <OptionButton>
                        <MdColorize />
                    </OptionButton>
                </LineOption>

                프레임선택<br></br>
                <FrameSelect  style = {{marginTop:'60px'}}/>

            </FontWrapp>


        </MainWrapp>
    )
}

const MainWrapp = styled.main`
width:auto;
height:100vh;
background:white;
left:0;
flex-grow:1;
margin-top:60px;
`

const FontWrapp = styled.article`
/* Select Field

Keywords: dropdown
*/

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: auto;
height: 66.16px;

margin-Bottom:30px;


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

const TextOption = styled.div`
    display: flex;
    align-items: center;
    
`;

const Button = styled.button`
    width: 38px;
    height: 38px;
    font-size: 24px;
    color: ${(props) => props.Color || "black"};
    background: ${(props) => props.bgColor || "white"};
    border: 0.940887px solid #949494;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #4040ff;
    }
    
`;

const CountInput = styled.input`
    width: 60px;
    height: 34px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #ccc;
`;

const LineOption = styled.div`
display: flex;
align-items: center;

`;


const OptionButton = styled.button`
    width: 38px;
    height: 38px;
    font-size: 24px;
    color: black;
    background: white;
    border: 1px solid #949494;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
        background: #f0f0f0;
    }
`;

export default EditPannel;