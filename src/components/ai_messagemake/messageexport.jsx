import styled from "styled-components";
import { useStateContext } from '../../context/StateContext'; // StateContext import

const MessageShow = () => {
    const { promotionText, setPromotionText } = useStateContext(); // promotionText 가져오기


    const handleUseClick = () => {
    localStorage.setItem('promotionText', promotionText); // 로컬 스토리지에 저장
    window.close(); // 팝업창 닫기
      
    };

    const handleChange = (e) => {
        console.log("promotion text:",promotionText);
        setPromotionText(e.target.value); // 입력 값에 따라 promotionText 업데이트
    };

    return (
        <MainWrap>
            생성결과
            <TextArea value={promotionText} onChange={handleChange} /> {/* promotionText를 TextArea에 설정 */}
            <ButtonUse onClick={handleUseClick}>이용하기</ButtonUse>
        </MainWrap>
    );
}

const MainWrap=styled.main`
font-family: 'Noto Sans KR';
/* Background+VerticalBorder */
font-size:9px;
display:flex;
flex-direction:column;
height: 100vh;
right:0;
overflow: auto; 
flex-grow:1;

background: #F4F6F8;
padding:30px;
gap:15px;

`

const TextArea = styled.textarea `
/* Rectangle 34 */

box-sizing: border-box;
padding:10px;

font-size: 9px;

min-height:200px;
height: auto;
resize: none; 

background: #FFFFFF;
border: 1px solid #5B89FF;
border-radius: 10px;


`
const ButtonUse = styled.button `
/* Component 4 */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;

isolation: isolate;


width:100px;
font-size:12px;
padding:10px;
color:white;
align-content: center;

background: #000000;
border-radius: 26px;


`
export default MessageShow;