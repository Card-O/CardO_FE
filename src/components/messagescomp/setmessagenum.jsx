import styled from "styled-components";

const SetNumber = () => {
    return (
        <NumWrapper>
            <span style={{marginBottom:'20px'}}>발신번호 설정</span>
            <Button1 style={{marginBottom : "30px"}}> 발신번호등록</Button1>
            <span style={{marginBottom:'10px'}}>수신번호 입력</span>

            <ButtonContainer>
                <ButtonComp>직접 입력</ButtonComp>
                <ButtonComp>주소록</ButtonComp>
            </ButtonContainer>

            <AddressWrapper>
                <InputContainer>
                    <span>직접입력</span>
                    <InputArea/>
                    <PlusButton>번호추가+</PlusButton>
                </InputContainer>
                <AddressSetContainer>
                    <span>받는사람</span>
                    <button>전체제거</button>
                    <hr />
                    <AddressView></AddressView>
                    전체 0명
                    <button>주소록에 저장</button>

                </AddressSetContainer>
            </AddressWrapper>

            <span>발송 설정</span>
            
            <ButtonContainer>
            <ViewButton>미리보기</ViewButton>
            <ViewButton>설정 저장</ViewButton>
            </ButtonContainer>
            <span style={{color:'red', fontSize:'10px'}}>* 심야(21시~08시)에 발송하는 광고문자는 별도 수신동의를 받으셔야 합니다.</span>
            
            <ButtonContainer>
                
            </ButtonContainer>
            <SendButton>발송하기</SendButton>
        </NumWrapper>
    ) 
}

const NumWrapper = styled.main `
/* 입력2 */
width: 100%;
height: auto;
background:white;
box-sizing: border-box;
display:flex;
flex-direction: column;


`

const Button1 = styled.button `
/* Component 7 */

/* Auto layout */
font-size: 12px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 13.3px;
width: 107.6px;
height: 45.5px;
left: 696px;
top: calc(50% - 45.5px/2 - 951.25px);
border-style:none;
background: #6E8EFF;
color:white;
border-radius: 4px;

`

const ButtonComp = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 15px;

width: 90px;
height: 37.23px;
left: 696px;
top: 348.32px;
border-style:none;

background: #F1F5F9;
border-radius: 4px;
color: #758398;
margin-right:20px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction:row;
    margin-bottom:30px;
    `

const SendButton = styled.button`
/* Component 7 */

/* Auto layout */
display: flex;

justify-content: center;
align-items: center;

width: 60%;
height: 62.05px;
left: 893px;
background: #0055FF;
color:white;
border-style:none;
border-radius: 5px;


`

const SaveButton = styled.button `
/* Component 7 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 17px 14.3px;

flex-grow: 1;
height: 55.84px;
left: 1132.75px;
top: calc(50% - 55.84px/2 - 436.96px);

background: #FFFFFF;
border: 1px solid #C7CACF;
border-radius: 4px;

`
const ViewButton = styled.button `
/* Component 7 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 19.5px 15.25px;


height: 50px;
left: 696px;
top: calc(50% - 62.05px/2 - 348.02px);

background: #FFFFFF;
border: 1px solid #C7CACF;
border-radius: 5px;
color: #758398;
margin-right:20px;
`

const AddressWrapper = styled.article `
display:flex;
flex-direction: row;
 gap: 20px;

`

const InputArea = styled.textarea `
/* Background+Border */

box-sizing: border-box;

width: 190px;
height: 100px;
overflow: scroll;

background: #FFFFFF;
border: 1px solid #C7C7C7;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
box-sizing: border-box; 
max-width: 100%;
max-height:50%;

`

const PlusButton = styled.button `
/* Component 7 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 190px;
height: 46px;

background: #FFFFFF;
border: 1px solid #424242;
border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

`

const InputContainer = styled.article `
/* Background */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
gap: 12px;

width: 220px;
height: 200px;
left: 696px;
top: 395.89px;

background: #F1F5F9;
border-radius: 4px;
color: #758398;
`
const AddressSetContainer = styled.article `
/* Border */

box-sizing: border-box;

width: 250px;
height: 200px;
left: 931px;
right: 224px;
top: 395.89px;

border: 1px solid #CCCCCC;
border-radius: 10px;

`

const AddressView = styled.div `
height:40%;

`

export default SetNumber;