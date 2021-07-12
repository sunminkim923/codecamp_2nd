import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite () {


    const router = useRouter()


    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [active, setActive] = useState (false)


    const [createBoard] = useMutation( CREATE_BOARD )
    

    function onChangeWriter(event) {
        setWriter(event.target.value)
        if (event.target.value !== "" && password !== "" && title !== "" && contents !== "") {
            setActive (true)
        }
    }   

    function onChangePassword(event) {
        setPassword(event.target.value)
        if (writer !== "" && event.target.value !== "" && title !== "" && contents !== "") {
            setActive (true)
        } else {
            setActive (false)
        }
    }   
    function onChangeTitle(event) {
        setTitle(event.target.value)
        if (writer !== "" && password !== "" && event.target.value !== "" && contents !== "") {
            setActive (true)
        } else {
            setActive (false)
        }

    }   
    function onChangeContents(event) {
        setContents(event.target.value)
        if (writer !== "" && password !== "" && title !== "" && event.target.value !== "") {
            setActive (true)
        } else {
            setActive (false)
        }
    }  
    // function check () {
    //     if (writer !== "" && password !== "" && title !== "" && contents !== "") {
    //         setActive (true)
    //     }
    // }

    // function check () {
    //     if (setWriter !== "" && setPassword !== "" && setTitle !== "" && setContents !== "") {
    //         setActive (true)
    //     }
    // }


    async function onClickSubmit() {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput : {
                        writer: writer,
                        password: password,
                        title: title,
                        contents: contents
                    }
                }
            })
            alert(result.data.createBoard._id)
            router.push(`/detail/${result.data.createBoard._id}`)
        } catch (error){
            alert(error.message)
        }
    } 

    return (
        <BoardWriteUI    
            aaa={onChangeWriter}
            bbb={onChangePassword}
            ccc={onChangeTitle}
            ddd={onChangeContents}
            eee={onClickSubmit}
            fff={active}
        />


    
    )


}