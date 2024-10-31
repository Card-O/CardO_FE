import styled from "styled-components";
import InputMessage from "./messagescomp/inputmessage";
import SetNumber from "./messagescomp/setmessagenum";
import OutputImage from "./outputImage.jsx"

const MessageOption = () => {
    return(
        <OptionWrapper>
            <InputMessageWrapper>
                <InputMessage />
            </InputMessageWrapper>
            <SetNumberWrapper>
                <SetNumber />
            </SetNumberWrapper>
        </OptionWrapper>
    );

}

const OptionWrapper = styled.main`
    display: flex;
    justify-content: center;  /* 가로로 중앙 정렬 */
    align-items: flex-start;  /* 세로로 상단 정렬 */
    gap: 5px;                /* 두 컴포넌트 사이 간격을 줄임 */
    width: 100%;              /* 가로 공간 전체 사용 */
    height: 100vh;            /* 세로 공간 전체 사용 */
    padding: 0 4%;            /* 좌우 여백을 4%로 설정 */
    box-sizing: border-box;   /* 컴포넌트 크기를 90%로 축소 */
`;


const InputMessageWrapper = styled.div`
    flex-grow: 1;             /* 남은 공간을 모두 차지하도록 설정 */
    max-width: 550px;         /* 최대 너비를 550px로 제한 */
    min-width: 280px;         /* 최소 너비 설정 */
    padding: 15px;            /* 내부 여백 추가 */
    box-sizing: border-box;   /* padding을 포함하여 크기를 계산 */
    transform: scale(0.8);   /* 크기를 줄이기 */
    border-radius: 8px;       /* 둥근 모서리 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    display: flex;            /* 자식 요소 정렬을 위한 flexbox 사용 */
    align-items: center;      /* 수직 중앙 정렬 */
`;

const SetNumberWrapper = styled.div`
    flex-grow: 1;             /* 남은 공간을 모두 차지하도록 설정 */
    max-width: 550px;         /* 최대 너비를 550px로 제한 */
    min-width: 280px;         /* 최소 너비 설정 */
    padding: 30px;            /* 내부 여백 추가 */
    box-sizing: border-box;   /* padding을 포함하여 크기를 계산 */
    transform: scale(0.8);   /* 크기를 줄이기 */
    border-radius: 8px;       /* 둥근 모서리 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    display: flex;            /* 자식 요소 정렬을 위한 flexbox 사용 */
    align-items: center;      /* 수직 중앙 정렬 */
`;

export default MessageOption;