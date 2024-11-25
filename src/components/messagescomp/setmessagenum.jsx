import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { jwtDecode } from "jwt-decode";

const SetNumber = () => {
    const [isSending, setIsSending] = useState(null);
    const [sendNumber, setSendNumber] = useState(""); // 발신번호 저장 상태변수
    const [inputNumber, setInputNumber] = useState(""); // 직접 입력한 수신번호 저장 상태변수
    const [addressList, setAddressList] = useState([]); // 주소록 저장 상태변수
    const [selectedNumbers, setSelectedNumbers] = useState([]); // 선택한 수신번호 저장하는 상태변수
    const [checkedNumbers, setCheckedNumbers] = useState(new Set()); // 체크된 수신번호 저장하는 상태변수
    const [userId, setUserId] = useState(null); // 사용자ID 저장 상태변수

    const token = localStorage.getItem('jwt'); // 로컬 스토리지에서 토큰 가져옴
    
    // 컴포넌트 렌더링될 때마다 userId를 추출하여 상태에 저장
    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            console.log("Decoded Token:", decodedToken);
            setUserId(decodedToken.sub);
            console.log(decodedToken.sub);
        }
    }, [token]); // token 변경될 때마다 실행

    // useEffect(() => {
    //     if (userId) {
    //         fetchAddressList();
    //     }
    // }, [userId]);


    // 주소록 가져오는 함수
    const fetchAddressList = async () => {
        try {
            const response = await fetch(`http://3.104.109.104:4173/address/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // JWT를 Authorization 헤더에 추가
                },
                method: 'GET',
                cache: 'no-cache'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setAddressList(data); // 주소록 데이터 상태에 저장 

        } catch (error) {
            console.error("주소록을 가져오는 데 오류가 발생했습니다:", error);
        }
    };

    // 주소록 가져오기 버튼 처리 함수 
    const handleFetchAddressList = () => {
        fetchAddressList(); // 버튼 클릭 시 주소록을 가져오는 함수 호출
    };

    // 사용자가 직접 입력한 수신번호 처리 함수 
    const handleAddNumber = () => {
        if (inputNumber) {
            // 중복 체크
            if (!selectedNumbers.includes(inputNumber)) {
                setSelectedNumbers(prev => [...prev, inputNumber]); // 새로운 배열 생성
            } else {
                console.log("이미 존재하는 번호입니다.");
            }
            setInputNumber(""); // 입력 후 필드 비우기
        } else {
            console.log("Input number is empty.");
        }
    };

    // 주소록에서 체크한 수신번호 처리 함수
    const handleSelectNumber = (number) => {
        if (checkedNumbers.has(number)) {
            checkedNumbers.delete(number); // 이미 체크된 번호는 제거
        } else {
            checkedNumbers.add(number); // 체크되지 않은 번호는 추가
        }
        setCheckedNumbers(new Set(checkedNumbers));
    };

    // 체크한 수신번호를 선택한 받는사람 목록에 추가하는 함수
    const handleAddCheckedNumbers = () => {
        const newNumbers = Array.from(checkedNumbers);
        // 중복 체크
        const uniqueNumbers = newNumbers.filter(number => !selectedNumbers.includes(number));
        setSelectedNumbers([...selectedNumbers, ...uniqueNumbers]);
        setCheckedNumbers(new Set()); // 체크 상태 초기화
    };

    // 전체 선택 버튼 처리 함수
    const handleSelectAll = () => {
        const allNumbers = addressList.map(contact => contact.phoneNumber);
        const newCheckedNumbers = new Set(allNumbers);
        setCheckedNumbers(newCheckedNumbers);
    };

    // 발송 요청 처리하는 함수
    const handleSendRequest = async () => {
	setIsSending(true);
        console.log("버튼 클릭됨");
        console.log("selectedNumbers 값:", selectedNumbers);
        const promotiontext = localStorage.getItem('promotionText');
        console.log("발송할 데이터:", {
            promotiontext,
            sendNumber,
            receiveNumbers: selectedNumbers,
    });


    try {   
        const userid = localStorage.getItem('uid');
        const image = localStorage.getItem('image'); // base64 인코딩된 이미지 데이터
        const formData = new FormData();

        // base64 데이터를 Blob으로 변환
        const byteString = atob(image.split(',')[1]); // 'data:image/png;base64,' 이후 부분을 가져옴
        const mimeString = image.split(',')[0].split(':')[1].split(';')[0]; // mime type을 가져옴
        const arrayBuffer = new Uint8Array(byteString.length);
	console.log("ByteString:",byteString);
	console.log("mimeString:",mimeString);
        for (let i = 0; i < byteString.length; i++) {
            arrayBuffer[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([arrayBuffer], { type: mimeString });

	// Blob 객체의 속성 확인
    console.log("Blob 객체:", blob);
    console.log("Blob 크기:", blob.size);  // Blob의 크기
    console.log("Blob MIME 타입:", blob.type); // MIME 타입

    // Blob의 내용이 제대로 들어가 있는지 확인 (content를 출력하는 방법은 로그로 볼 수 없지만 size로 확인 가능)
    console.log("Blob 내용 크기:", blob.size);

        formData.append("promotiontext", promotiontext);
        formData.append("sendNumber", sendNumber);
        formData.append("receiveNumbers", JSON.stringify(selectedNumbers));// 배열을 JSON 문자열로 변환
        formData.append("image", blob, 'image.png'); // Blob 객체와 파일 이름을 지정
        formData.append("userid",userid);
        const response = await fetch("http://3.104.109.104:4173/ppuriosend", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`, // JWT 토큰 추가
            },
            body: formData,
        });

        if (response.ok) {
            alert("발송이 완료되었습니다.");
        } else {
            const errorMessage = await response.text(); // 또는 response.json()
            alert("발송에 실패했습니다. 다시 시도해 주세요.");
        }
    } catch (error) {
        alert("발송 요청 중 오류가 발생했습니다:", error);
    } finally {
	    setIsSending(false);
    }
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span>주소록</span>
                    <SelectAllButton  onClick={handleSelectAll}>전체 선택</SelectAllButton >
                    </div>
                    <AddressSetContainer>
                        {addressList.map((contact, index) => (
                            <ContactItem key={index}>
                                <input
                                    type="checkbox"
                                    checked={checkedNumbers.has(contact.phoneNumber)}
                                    onChange={() => handleSelectNumber(contact.phoneNumber)}
                                />
                                <span>{contact.name}: {contact.phoneNumber}</span>
                            </ContactItem>
                        ))}
                    </AddressSetContainer>
                    <PlusButton onClick={handleAddCheckedNumbers}>번호추가+</PlusButton>
                </InputContainer>
            </AddressWrapper>

            <ButtonContainer>
                <FetchButton onClick={handleFetchAddressList}>주소록 가져오기</FetchButton> {/* 주소록 가져오기 버튼 추가 */}
            </ButtonContainer>

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
                <ViewButton onClick={()=>window.open("/preview", "_blank", "width=600,height=400")}>
                    미리보기</ViewButton>

              <SendButton onClick={handleSendRequest} disabled={isSending}>
  {isSending ? '발송중...' : '발송하기' }
</SendButton>



            </ButtonContainer>
        </NumWrapper>
    );
};

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

const SelectAllButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 28px;
    background: #FFFFFF;
    border: 1px solid #424242;
    border-radius: 4px;
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
    z-index: 10;
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

const FetchButton = styled.button`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #0055FF;
    color: white;
    border-style: none;
    border-radius: 5px;
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

const AddressSetContainer = styled.article`
    box-sizing: border-box;
    width: 200px;
    height: 250px;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    background: white;
    overflow-y: auto; // 스크롤
`;

const PlusButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 70px;
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
    height: 190px;
    background: #F1F5F9;
    border-radius: 4px;
    color: #758398;
`;

const AddressView = styled.div`
    max-height: 100px;
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
