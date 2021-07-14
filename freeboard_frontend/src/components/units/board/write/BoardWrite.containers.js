import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD} from "./BoardWrite.queries"
import {useRouter} from "next/router";

export default function BoardWrite () {
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const router = useRouter();

    const InputInits = {
        writer: "",
        password: "",
        title: "",
        contents: ""
    }

    // const [writer, setWriter] = useState ('')
    // const [password, setPassword] = useState ('')
    // const [title, setTitle] = useState('')
    // const [contents, setContents] = useState('')
    const [writerError,setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')
    const [active, setActive] = useState(false)
    const [inputs, setInputs] = useState(InputInits)
    
    function onChangeInputs(event) {
        const newInputs = {
            ...inputs,
            [event.target.name] : event.target.value
        }
        setInputs(newInputs)
        if(Object.values(newInputs).every(data => data !== "")) {
            setWriterError("")
            setPasswordError("")
            setTitleError("")
            setContentsError("")
            setActive(true)
        }
    }

    async function onClickSubmit() {
        console.log(inputs)
        if (inputs.writer === "") {
            setWriterError("이름을 입력하세요")
        }
        if (inputs.password === "") {
            setPasswordError("비밀번호를 입력하세요.")
        } 
        if (inputs.title === "") {
            setTitleError("제목을 입력하세요")
        }
        if (inputs.contents === "") {
            setContentsError("내용을 입력하세요")
        }
        if (Object.values(inputs).every(data => data !== "")) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoard:{
                            ...inputs
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

    async function onClickEdit () {
        console.log(inputs)
        if (inputs.writer === "") {
            setWriterError("이름을 입력하세요")
        }
        if (inputs.password === "") {
            setPasswordError("비밀번호를 입력하세요.")
        } 
        if (inputs.title === "") {
            setTitleError("제목을 입력하세요")
        }
        if (inputs.contents === "") {
            setContentsError("내용을 입력하세요")
        }
        if (Object.values(inputs).every(data => data !== "")) {
            try {
                const result = await updateBoard({
                    variables: {
                        boardId: "",
                        password: "",
                        updateBoardInput: {
                            title: inputs.title,
                            contents: inputs.contents,
                            youtubeUrl: "",
                            images: ""
                        }
                    }
                })
                alert("수정합니다.")
                router.push(`/boards/${result.data.createBoard._id}`)
            }   catch (error){
                alert(error.message)
                }
        }

    }





    

    // function onChangeWriter(event) {
        
    //     setWriter(event.target.value)
    //     if(event.target.value !== ""){
    //         setWriterError("")
    //     } if (event.target.value !== "" &&  password !== "" && title !== "" && contents !== "") {
    //         setActive(true)
    //     } else {
    //         setActive(false)
    //     }
    // }
    
    // function onChangePassword(event) {
    //     setPassword(event.target.value)
    //     if(event.target.value !== "") {
    //         setPasswordError("")
    //     } if (writer !== "" &&  event.target.value !== "" && title !== "" && contents !== "") {
    //         setActive(true)
    //     } else {
    //         setActive(false)
    //     }
    // }
    // function onChangeTitle(event) {
    //     setTitle(event.target.value)
    //     if(event.target.value !== "") {
    //         setTitleError("")
    //     } if (writer !== "" &&  password !== "" && event.target.value !== "" && contents !== "") {
    //         setActive(true)
    //     } else {
    //         setActive(false)
    //     }
    // }

    // function onChangeContents(event) {
    //     setContents(event.target.value)
    //     if(event.target.value !=="") {
    //         setContentsError("")
    //     } if (writer !== "" &&  password !== "" && title !== "" && event.target.value !== "") {
    //         setActive(true)
    //     } else {
    //         setActive(false)
    //     }
    // }

    return (
        <BoardWriteUI 
            // onChangeWriter={onChangeWriter}
            // onChangePassword={onChangePassword}
            // onChangeTitle={onChangeTitle}
            // onChangeContents={onChangeContents}
            onChangeInputs={onChangeInputs}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onClickSubmit={onClickSubmit}
            active={active}
        />
    )

}