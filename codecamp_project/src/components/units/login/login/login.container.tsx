import LoginUI from "./login.presenter"
import { useState } from "react"
import router from "next/router"

export default function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    

    function onChangeEmail (event){
        setEmail(event.target.value)
    }

    function onChangePassword (event) {
        setPassword(event.target.value)
    }

    function onClickJoin (){
        router.push(`/./`)
    }
    function onClickLogin () {
        if(email === "" ){
            setEmailError("이메일을 입력하세요")
        }
        if (password === ""){
            setPasswordError("비밀번호를 입력하세요")
        }
    }



    return <LoginUI 
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onClickLogin={onClickLogin}
    emailError={emailError}
    passwordError={passwordError}
     />
}