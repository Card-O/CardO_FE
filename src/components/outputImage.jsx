const Output = () => {
    return (
        <>
        <span>이미지가 마음에 안 드시나요?</span>
        <button>이미지 다시 생성</button>
        <button>저장하기</button>
        <button onClick={() => window.open("/message", "_blank", "width=600,height=400")}>편집하기</button>
        </>
    )
}

export default Output;