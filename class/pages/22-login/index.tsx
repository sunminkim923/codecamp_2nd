import { gql, useMutation } from "@apollo/client"
import router from "next/router"
import { ChangeEvent, useContext, useState } from "react"
import { GlobalContext } from "../_app"

const LOGIN_USER = gql`
    mutation loginUser ($email : String!, $password: String!){
        loginUser(email: $email, password: $password){
            accessToken
        }
    } 
`

export default function SignupPage () {
    const { setAccessToken } = useContext(GlobalContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loginUser] = useMutation(LOGIN_USER)

    function onChangeEmail(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }
    function onChangePassword (event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }
    async function onClickLogin (){
        try{
            const result = await loginUser({
                variables: {
                    email : email,
                    password: password,
                }
            })
            setAccessToken(result.data?.loginUser.accessToken || "")
            router.push("/22-login-success/")

        } catch(error) {
            alert(error.message)
        }
        
    }
    return (
        <>
            이메일: <input  type="text" onChange={onChangeEmail} />
            비밀번호: <input  type="text" onChange={onChangePassword} />
            <button onClick={onClickLogin}>로그인하기</button>
        </>
    )
}