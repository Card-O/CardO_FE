// frameselect.jsx
import styled from "styled-components";
import { useCanvas } from '../../context/CanvasContext';
import { useState } from "react";
import { fabric } from 'fabric';

const FrameSelect = () => {
    const { canvas } = useCanvas();

    const templateList = [
        { name: '1 Template', url: './images/temp1.png' },
        { name: '2 Template', url: './images/temp2.png' },
        { name: '3 Template', url: './images/temp3.png' },
        { name: '4 Template', url: './images/temp4.png' },
    ];
    const [currentTemplate, setCurrentTemplate] = useState(null);

    const applyTemplate = (template) => {
        if (!canvas) return;

        // Remove existing template if any
        const existingTemplate = canvas.getObjects().find(obj => obj.name === 'templateImage');
        if (existingTemplate) {
            canvas.remove(existingTemplate);
        }

        // Load new template image and add to canvas
        fabric.Image.fromURL(template.url, (img) => {
            img.set({
                left: 0,
                top: 0,
                scaleX: canvas.width / img.width,
                scaleY: canvas.height / img.height,
                selectable: false,
                name: 'templateImage'
            });
            canvas.add(img);
            // canvas.sendToBack(img);
            setCurrentTemplate(template.name);
            canvas.renderAll();
        });
    };

    return (
        <div style={{ marginTop: '70px' }}>
            프레임 선택
            <MainWrapp>
                {templateList.map((template) => (
                    <TemplateButton
                        key={template.name}
                        onClick={() => applyTemplate(template)}
                        isSelected={currentTemplate === template.name}
                        disabled={currentTemplate === template.name}
                    >
                        <img src={template.url} alt={template.name} width="100" height="100" />
                        {template.name}
                    </TemplateButton>
                ))}
            </MainWrapp>
        </div>
    );
};

const MainWrapp = styled.main`
    width: 416px;
    min-height: 250px;
    background: #F0F0F0;
    border-radius: 10px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 한 행에 3개씩 배치 */
    gap: 10px;
    padding: 10px;
`;

const TemplateButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => (props.isSelected ? '#C0C0C0' : '#FFFFFF')};
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    cursor: ${(props) => (props.isSelected ? 'not-allowed' : 'pointer')};
    &:hover {
        background: #E0E0E0;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export default FrameSelect;

