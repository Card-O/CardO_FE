import styled from "styled-components";
import InputMessage from "./messagescomp/inputmessage";
import SetNumber from "./messagescomp/setmessagenum";

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
    align-items: center;      /* 세로로 중앙 정렬 */
    gap: 0px;                /* 두 컴포넌트 사이 간격 */
    width: 100%;              /* 가로 공간 전체 사용 */
    height: 100vh;            /* 세로 공간 전체 사용 */
    padding: 0 40%;            /* 좌우에 여백 추가 */
    box-sizing: border-box;
     /* 컴포넌트 크기를 90%로 축소 */
`
const InputMessageWrapper = styled.div`
    flex-grow: 1;             /* 남은 공간을 모두 차지하도록 설정 */
    max-width: 600px;         /* 최대 너비를 600px로 제한 */
    min-width: 300px;         /* 최소 너비 설정 */
    box-sizing: border-box;   /* padding을 포함하여 크기를 계산 */
    transform: scale(0.7);
    
`;

const SetNumberWrapper = styled.div`
    flex-grow: 1;             /* 남은 공간을 모두 차지하도록 설정 */
    max-width: 650px;         /* 최대 너비를 600px로 제한 */
            /* 최소 너비 설정 */
    box-sizing: border-box;   /* padding을 포함하여 크기를 계산 */
    transform: scale(0.7);
`;

export default MessageOption;