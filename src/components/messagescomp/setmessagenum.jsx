import React, { useState } from "react";
import styled from "styled-components";

const SetNumber = () => {
    const [sendNumber, setSendNumber] = useState(""); // 발신번호 설정
    const [inputNumber, setInputNumber] = useState(""); // 직접 입력한 전화번호
    const [addressList, setAddressList] = useState([
        { name: "홍길동", number: "010-1234-5678" },
        { name: "김철수", number: "010-9876-5432" },
    ]); // 주소록 데이터
    const [selectedNumbers, setSelectedNumbers] = useState([]); // 선택한 전화번호 목록
    const [checkedNumbers, setCheckedNumbers] = useState(new Set()); // 체크된 전화번호 목록

    const handleAddNumber = () => {
        if (inputNumber) {
            setSelectedNumbers([...selectedNumbers, inputNumber]);
            setInputNumber(""); // 입력 후 필드 비우기
        }
    };

    const handleSelectNumber = (number) => {
        if (checkedNumbers.has(number)) {
            checkedNumbers.delete(number);
        } else {
            checkedNumbers.add(number);
        }
        setCheckedNumbers(new Set(checkedNumbers));
    };

    const handleAddCheckedNumbers = () => {
        const newNumbers = Array.from(checkedNumbers);
        setSelectedNumbers([...selectedNumbers, ...newNumbers]);
        setCheckedNumbers(new Set()); // 체크 상태 초기화
    };

    return (
        <NumWrapper>
            <Label>📞 발신번호 설정</Label>
            <InputField
                value={sendNumber}
                onChange={(e) => setSendNumber(e.target.value)}
                placeholder="발신번호를 입력하세요 (예: 010-1212-3434)"
            />
            <Label>📲 수신번호 설정</Label>

            <AddressWrapper>
                <InputContainer>
                    <span>직접입력</span>
                    <InputArea
                        value={inputNumber}
                        onChange={(e) => setInputNumber(e.target.value)}
                        placeholder="전화번호를 입력하세요. (예: 010-1212-3434)"
                    />
                    <PlusButton onClick={handleAddNumber}>번호추가+</PlusButton>
                </InputContainer>
                <InputContainer>
                    <span>주소록</span>
                    <AddressSetContainer>
                        {addressList.map((contact, index) => (
                            <ContactItem key={index}>
                                <input
                                    type="checkbox"
                                    checked={checkedNumbers.has(contact.number)}
                                    onChange={() => handleSelectNumber(contact.number)}
                                />
                                <span>{contact.name}: {contact.number}</span>
                            </ContactItem>
                        ))}
                    </AddressSetContainer>
                    <PlusButton onClick={handleAddCheckedNumbers}>번호추가+</PlusButton>
                </InputContainer>
            </AddressWrapper>

            <br />
            <ButtonContainer>
                <Label>👥 받는사람</Label>
                <DeleteButton onClick={() => setSelectedNumbers([])}>전체 삭제</DeleteButton>
            </ButtonContainer>
            <AddressListContainer>
                <AddressView>
                    {selectedNumbers.map((number, index) => (
                        <div key={index}>{number}</div>
                    ))}
                </AddressView>
                <span style={{ fontWeight: "bold" }}>전체 {selectedNumbers.length}명</span>
            </AddressListContainer>

            <br />
            <span style={{ color: 'red', fontSize: '12px' }}>* 심야(21시~08시)에 발송하는 광고문자는 별도 수신동의를 받으셔야 합니다.</span>
            <br />

            <ButtonContainer>
                <ViewButton>미리보기</ViewButton>
                <SendButton>발송하기</SendButton>
            </ButtonContainer>
        </NumWrapper>
    );
}

const Label = styled.h2`
    font-size: 1.2rem;
    color: #4A4A4A;
`;

const NumWrapper = styled.main`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    background: white;
    box-sizing: border-box;
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 1rem;
    border: 1px solid #C7C7C7;
    border-radius: 4px;
    box-sizing: border-box;
`;

const DeleteButton = styled.button`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #424242;
    border-radius: 4px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between; // 양 끝 정렬
`;

const SendButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 62.05px;
    background: #0055FF;
    color: white;
    border-style: none;
    border-radius: 5px;
`;

const ViewButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 62.05px;
    background: #FFFFFF;
    border: 1px solid #C7CACF;
    border-radius: 5px;
    color: #758398;
    margin-right: 20px;
`;

const AddressWrapper = styled.article`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const InputArea = styled.textarea`
    box-sizing: border-box;
    width: 205px;
    height: 200px;
    overflow: scroll;
    background: #FFFFFF;
    border: 1px solid #C7C7C7;
    border-radius: 5px;
`;

const PlusButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 46px;
    background: #FFFFFF;
    border: 1px solid #424242;
    border-radius: 4px;
`;

const InputContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    gap: 12px;
    width: 220px;
    height: 240px;
    background: #F1F5F9;
    border-radius: 4px;
    color: #758398;
`;

const AddressSetContainer = styled.article`
    box-sizing: border-box;
    width: 200px;
    height: 250px;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    background: white;
`;

const AddressView = styled.div`
    max-height: 150px;
    overflow-y: auto;
`;

const AddressListContainer = styled.div`
    border: 1px solid #C7C7C7;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export default SetNumber;