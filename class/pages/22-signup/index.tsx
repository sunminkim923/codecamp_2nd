import { gql, useMutation } from "@apollo/client"
import { ChangeEvent, useState } from "react"

const CREATE_USER = gql`
    mutation createUser ($createUserInput : CreateUserInput!){
        createUser(createUserInput: $createUserInput){
            _id
        }
    } 
`

export default function SignupPage () {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [createUser] = useMutation(CREATE_USER)

    function onChangeEmail(event: ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }
    function onChangePassword (event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }
    function onChangeName (event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }
    async function onClickSignup (){
        try{
            await createUser({
                variables: {
                    createUserInput: {
                        email: email,
                        password: password,
                        name: name,
                    }
                }
            })
            alert("회원가입을 축하합니다.")
        } catch(error) {
            alert(error.message)
        }
        
    }
    return (
        <>
            이메일: <input  type="text" onChange={onChangeEmail} />
            비밀번호: <input  type="text" onChange={onChangePassword} />
            이름: <input  type="text"  onChange={onChangeName} />
            <button onClick={onClickSignup}>가입하기</button>
        </>
    )
}