import { useState } from "react"



export default function LoginPage () {

    
    const [id, setId] = useState (' ')
    const [password, setPassword] = useState (' ')

    const [idError, setIdError] = useState (' ')
    const [passwordError, setPasswordError] = useState (' ')
    
    function aaa (event) {
        setId(event.target.value)
    }

    function bbb (event) {
        setPassword(event.target.value)
    }
    function ccc () {
        // 통신프로그램을 통해서 백엔트 컴퓨터 API에 전송하기
        if (id === " ") {
            setIdError ('아이디를 입력해주세요')
        } if (password === " ") {
            setPasswordError ('비밀번호를 입력해주세요')
        } else {
            setIdError(' '), setPasswordError (' ')
        }
    }
    
    return (
        <div>
            <h1>로그인</h1>
            <div>아이디</div>
            <input type="text" onChange={aaa} />
            <div style={{ 'color' : 'red', 'fontSize' : '5px' }}>{idError}</div>
            <div>비밀번호</div>
            <input type="password" onChange={bbb} />
            <div style={{'color' : 'red', 'fontSize' : '5px'}}>{passwordError}</div>
            <button onClick={ccc}>로그인하기</button>
        </div>
    )

}