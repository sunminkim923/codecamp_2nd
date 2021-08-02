import { useMutation } from "@apollo/client"
import { useState } from "react"
import JoinUI from "./join.presenter"
import { CREATE_USER } from "./join.queries"


export default function Join () {
    const [createUser] = useMutation(CREATE_USER)

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [samePassword, setSamePassword] = useState("")
    const [samePasswordError, setSamePasswordError] = useState("")

    function onChangeName(event) {
        setName(event.target.value)
    }
    
    function onChangeEmail (event) {
        setEmail(event.target.value)
    }

    function onChangePassword (event) {
        setPassword(event.target.value)
    }
    function onChangeSamePassword (event) {
        setSamePassword(event.target.value)
    }

    function onClickJoin () {
        if( name === "" ){
            setNameError("이름을 입력하세요")
        }
        if( email === "" ){
            setEmailError("이메일을 입력하세요")
        }
        if( password === "" ){
            setPasswordError("비밀번호를 입력하세요")
        }
        if( samePassword !== password ){
            setSamePasswordError("비밀번호가 일치하지 않습니다")
        } if ( name !== "" && email !== "" && password !== "" && samePassword === password) {
            createUser({
                variables:{
                    CreateUserInput : {
                        name,
                        email,
                        password,
                    } 
                }
            })
        }
    }

    return <JoinUI 
        onChangeName={onChangeName}
        nameError={nameError}
        onChangeEmail={onChangeEmail}
        emailError={emailError}
        onChangePassword={onChangePassword}
        passwordError={passwordError}
        onChangeSamePassword={onChangeSamePassword}
        samePasswordError={samePasswordError}
        onClickJoin={onClickJoin}
    />

}