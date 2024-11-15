// editpannel.jsx
import styled from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline, AiOutlineStrikethrough, AiOutlineAlignLeft, AiOutlineAlignCenter, AiOutlineAlignRight, AiOutlineFontColors,AiOutlineBgColors } from "react-icons/ai";
import { MdColorize } from "react-icons/md"; // 스포이드 아이콘
import FrameSelect from "./frameselect";
import { useCanvas } from '../../context/CanvasContext';
import { fabric } from 'fabric';

const EditPannel = ({imageUrl}) => {
    const { canvas } = useCanvas(); // context로 canvas 객체 공유
    const [count, setCount] = useState(20); // 폰트 크기
    const [textAlign, setTextAlign] = useState("left"); // 텍스트 정렬 상태
    const [textColor, setTextColor] = useState("#000000"); // 텍스트 색상 상태
    const [backgroundColor, setBackgroundColor] = useState("rgba(0,0,0,0)"); // 배경색 상태

    // 텍스트 박스 삽입
    const addTextBox = () => {
        if (canvas) {  // canvas가 있을 때만 실행
            const newTextBox = new fabric.Textbox('Your text', {
                left: 100,
                top: 100,
                width: 200,
                fontSize: 20,  // 기본 폰트 크기
                fill: "#000000",  // 기본 텍스트 색상
                textAlign: "center",  // 기본 정렬 설정
                backgroundColor: "rgba(0,0,0,0)",  // 기본 배경색
                fontFamily: 'Arial',  // 기본 폰트
            });
            canvas.add(newTextBox);
            canvas.setActiveObject(newTextBox);
        } else {
            console.warn("Canvas is not initialized.");
        }
    };

    // 텍스트 박스 폰트 크기 반영
    useEffect(() => {
        if (!canvas) return;

        const handleDeleteKey = (event) => {
            // event.key 확인을 통해 Delete 키일 때만 작동하도록 설정
            if (event.key === 'Delete') {
                const activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    canvas.remove(activeObject);
                    canvas.discardActiveObject();
                    canvas.renderAll();
                }
            }
        };
    
        // Delete 키 이벤트 추가
        window.addEventListener('keydown', handleDeleteKey);
    
        // 사용할 이미지 받아오기는 sessionStorage 이용
        fabric.Image.fromURL(imageUrl, (img) => {
            // 캔버스 크기에 맞게 이미지 크기 설정
            img.scaleToWidth(canvas.width);
            img.scaleToHeight(canvas.height);

            // 이미지 맨 뒤에 추가하고 선택 불가하게 설정
            img.set({
                left: 0,
                top: 0,
                selectable: false,
                evented: false
            });

            canvas.add(img);
            canvas.sendToBack(img); // 캔버스의 맨 뒤로 배치
            //img.moveTo(0);
            canvas.renderAll();
        });

        const textBox = new fabric.Textbox(localStorage.getItem('recommend'), {
            left: 100,
            top: 550,
            fontSize: 30,
            fontFamily: 'Arial',
            fill: '#FFFFFF',
            textAlign: 'center',
            width: 500, 
          });
        canvas.add(textBox);

        const handleObjectSelected = () => {
            const activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'textbox') {
                setCount(activeObject.fontSize || 10);
                setTextAlign(activeObject.textAlign || "left");
                setTextColor(activeObject.fill || "#000000");
                setBackgroundColor(activeObject.backgroundColor || "rgba(0,0,0,0)");
                setIsBold(activeObject.fontWeight === "bold");
                setIsItalic(activeObject.fontStyle === "italic");
                setIsUnderline(activeObject.underline || false);
                setIsStrikethrough(activeObject.linethrough || false);
            }
        };

        canvas.on('selection:created', handleObjectSelected);
        canvas.on('selection:updated', handleObjectSelected);

        return () => {
            window.removeEventListener('keydown', handleDeleteKey);
            canvas.off('selection:created', handleObjectSelected);
            canvas.off('selection:updated', handleObjectSelected);
        };
    }, [canvas]);

    // 폰트 크기 증가 및 감소
    const handleIncrement = () => {
        const newSize = count + 1;
        setCount(newSize);
        updateTextBoxFontSize(newSize);
    };

    const handleDecrement = () => {
        if (count > 1) {
            const newSize = count - 1;
            setCount(newSize);
            updateTextBoxFontSize(newSize);
        }
    };

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setCount(value);
            updateTextBoxFontSize(value);
        }
    };

    const updateTextBoxFontSize = (size) => {
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type === "textbox") {
            activeObject.set("fontSize", size);
            canvas.renderAll();
        }
    };

    // 텍스트 정렬
    const setTextAlignment = (alignment) => {
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type === "textbox") {
            activeObject.set("textAlign", alignment);
            setTextAlign(alignment); // 상태 반영
            canvas.renderAll();
        }
    };

    // 색상 변경 핸들러
    const handleTextColorChange = (event) => {
        const color = event.target.value;
        setTextColor(color);
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type === "textbox") {
            activeObject.set("fill", color);
            canvas.renderAll();
        }
    };

    const handleBackgroundColorChange = (event) => {
        const color = event.target.value;
        setBackgroundColor(color);
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type === "textbox") {
            activeObject.set("backgroundColor", color);
            canvas.renderAll();
        }
    };

    // 폰트 스타일 상태
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);

    const toggleTextStyle = (styleType) => {
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type === "textbox") {
            switch (styleType) {
                case 'bold':
                    setIsBold(!isBold);
                    activeObject.set("fontWeight", isBold ? "normal" : "bold");
                    break;
                case 'italic':
                    setIsItalic(!isItalic);
                    activeObject.set("fontStyle", isItalic ? "normal" : "italic");
                    break;
                case 'underline':
                    setIsUnderline(!isUnderline);
                    activeObject.set("underline", !isUnderline);
                    break;
                case 'strikethrough':
                    setIsStrikethrough(!isStrikethrough);
                    activeObject.set("linethrough", !isStrikethrough);
                    break;
                default:
                    break;
            }
            canvas.renderAll();
        }
    };
    

    return (
        <MainWrapp>
            <FontWrapp>
                <span>글꼴 선택</span>
                <SelectBox style={{ marginTop: 0 }}
                    onChange={(e) => {
                        const selectedFont = e.target.value;
                        const activeObject = canvas.getActiveObject();
                        if (activeObject && activeObject.type === 'textbox') {
                            activeObject.set('fontFamily', selectedFont);
                            canvas.renderAll();
                        }
                    }}>
                    <option value="Arial">Arial</option>
                    <option value="Hahmlet">Hahmlet</option>
                    <option value="Gowun Batang">Gowun Batang</option>
                    <option value="Do Hyeon">Do Hyeon</option>
                </SelectBox>

                <TextOption>
                    {/* 텍스트 박스 텍스트 크기 편집 */}   
                    <BoxButton onClick={addTextBox}>Add TextBox</BoxButton>
                    <Button bgColor="#333" Color="white" style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} onClick={handleDecrement}>-</Button>
                    <CountInput type="number" value={count} onChange={handleInputChange} />
                    <Button bgColor="#333" Color="white" style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px', marginRight: '50px' }} onClick={handleIncrement}>+</Button>

                    {/* 텍스트 박스 특수 효과 */}   
                    <Button onClick={() => toggleTextStyle("bold")} isActive={isBold}><AiOutlineBold /></Button>
                    <Button onClick={() => toggleTextStyle("italic")} isActive={isItalic}><AiOutlineItalic /></Button>
                    <Button onClick={() => toggleTextStyle("underline")} isActive={isUnderline}><AiOutlineUnderline /></Button>
                    <Button onClick={() => toggleTextStyle("strikethrough")} isActive={isStrikethrough}><AiOutlineStrikethrough /></Button>
                </TextOption>

                <LineOption>
                    {/* 텍스트 박스 정렬 버튼 */}
                    <OptionButton isActive={textAlign === "left"} onClick={() => setTextAlignment("left")}><AiOutlineAlignLeft /></OptionButton>
                    <OptionButton isActive={textAlign === "center"} onClick={() => setTextAlignment("center")}><AiOutlineAlignCenter /></OptionButton>
                    <OptionButton style={{ marginRight: '30px' }} isActive={textAlign === "right"} onClick={() => setTextAlignment("right")}><AiOutlineAlignRight /></OptionButton>

                    {/* 텍스트 색상 편집 */}   
                    <ColorPickerLabel>
                        <AiOutlineFontColors />
                        <HiddenColorInput
                            type="color"
                            value={textColor}
                            onChange={handleTextColorChange}
                        />
                    </ColorPickerLabel >
                    <ColorDisplay color={textColor} style={{ marginRight: '30px' }}  />
                            
                    {/* 배경색 선택 */}
                    <ColorPickerLabel>
                        <AiOutlineBgColors />
                        <HiddenColorInput
                            type="color"
                            value={backgroundColor}
                            onChange={handleBackgroundColorChange}
                        />
                        </ColorPickerLabel>
                    <ColorDisplay color={backgroundColor} />
                </LineOption>

                <FrameSelect style={{ marginTop: '60px' }} />
            </FontWrapp>
        </MainWrapp>
    );
};

// label 스타일을 적용하여 버튼처럼 보이게 함
const ColorPickerLabel = styled.label`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    font-size: 24px;
    color: black;
    background: ${(props) => (props.isActive ? "#333" : "white")};
    border: 1px solid #949494;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background: #f0f0f0;
    }
`;
// input[type="color"]는 숨김
const HiddenColorInput = styled.input`
    display: none;
`;


const MainWrapp = styled.main`
    padding: 20px;
    width: auto;
    height: 100vh;
    background: white;
    left: 0;
    flex-grow: 1;
    margin-top: 60px;
`;

const FontWrapp = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: auto;
    height: auto;
    margin-bottom: 30px;
`;

const SelectBox = styled.select`
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #f9f9f9;
`;

const TextOption = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const BoxButton = styled.button`
    width: 160px;
    height: 38px;
    font-size: 24px;
    color: ${(props) => props.Color || "black"};
    background: ${(props) => props.bgColor || "white"};
    border: 0.94px solid #949494;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #4040ff;
    }
`;

const Button = styled.button`
    width: 38px;
    height: 38px;
    font-size: 24px;
    color: ${(props) => props.Color || "black"};
    background: ${(props) => props.bgColor || "white"};
    border: 0.94px solid #949494;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #4040ff;
    }
        
`;

const CountInput = styled.input`
    font-size: 20px;
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
    background: ${(props) => (props.isActive ? "#333" : "white")};
    color: ${(props) => (props.isActive ? "white" : "black")};
    border: 1px solid #949494;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    &:hover {
        background: #f0f0f0;
    }
`;

const ColorDisplay = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.color};
    border: 1px solid #ccc;
    margin-left: 10px;
    border-radius: 3px;
`;

export default EditPannel;
