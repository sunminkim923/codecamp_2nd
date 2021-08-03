import LoginUI from "./login.presenter"
import { useState } from "react"
import router from "next/router"
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "./login.queries"
import { useContext } from "react"
import { GlobalContext } from "../../../../../pages/_app"

export default function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const { setAccessToken } = useContext(GlobalContext)
    const [loginUser] = useMutation(LOGIN_USER)

    function onChangeEmail (event){
        setEmail(event.target.value)
    }
    function onChangePassword (event) {
        setPassword(event.target.value)
    }
    function onClickJoin (){
        router.push("/login/signup/")
    }
    async function onClickLogin () {
        if(email === "" ){
            setEmailError("이메일을 입력하세요")
        }
        if (password === ""){
            setPasswordError("비밀번호를 입력하세요")
        }
        try{
            const result = await loginUser({
                variables: {
                    email : email,
                    password : password,
                }
            })
            setAccessToken(result.data?.loginUser.accessToken || "")
            alert("반갑습니다")
            router.push("/landing/")
        } catch (error) {
            alert(error.message)
        }
    }
    return <LoginUI 
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onClickLogin={onClickLogin}
    emailError={emailError}
    passwordError={passwordError}
    onClickJoin={onClickJoin}
     />
}