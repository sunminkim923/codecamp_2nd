import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD} from "./BoardWrite.queries"
import {useRouter} from "next/router";

export default function BoardWrite () {
    
    const router = useRouter();
    const [writer, setWriter] = useState ('')
    const [password, setPassword] = useState ('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [writerError,setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')

    const [active, setActive] = useState(false)

    const [createBoard] = useMutation(CREATE_BOARD)
    
    async function onClickSubmit() {
        if (writer === "") {
            setWriterError("이름을 입력하세요")
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력하세요.")
        } 
        if (title === "") {
            setTitleError("제목을 입력하세요")
        }
        if (contents === "") {
            setContentsError("내용을 입력하세요")
        }
        if (writer && password && title && contents) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoard:{
                            writer: writer,
                            password: password,
                            title: title,
                            contents: contents
                        }
                    }
                })
                alert("등록합니다")
                router.push(`/boards/${result.data.createBoard._id}`)
            }   catch (error){
                alert(error.message)
                }
        } 
        
    }

    function onChangeWriter(event) {
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterError("")
        } if (event.target.value !== "" &&  password !== "" && title !== "" && contents !== "") {
            setActive(true)
        } else {
            setActive(false)
        }
    }
    
    function onChangePassword(event) {
        setPassword(event.target.value)
        if(event.target.value !== "") {
            setPasswordError("")
        } if (writer !== "" &&  event.target.value !== "" && title !== "" && contents !== "") {
            setActive(true)
        } else {
            setActive(false)
        }
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        } if (writer !== "" &&  password !== "" && event.target.value !== "" && contents !== "") {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(event.target.value !=="") {
            setContentsError("")
        } if (writer !== "" &&  password !== "" && title !== "" && event.target.value !== "") {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    return (
        <BoardWriteUI 
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onClickSubmit={onClickSubmit}
            active={active}
        />
    )




}