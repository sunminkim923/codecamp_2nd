import { useMutation } from "@apollo/client"
import { printIntrospectionSchema } from "graphql"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"


interface IProps {
    isEdit?: boolean
}


export default function BoardWrite (props: IProps) {

    const InputInits = {
        writer: "",
        password: "",
        title: "",
        contents: ""
    }

    const [createBoard] = useMutation( CREATE_BOARD )
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const router = useRouter()
    const [active, setActive] = useState (false)
    const [inputs, setInputs] = useState(InputInits)

    
    // const [writer, setWriter] = useState("")
    // const [password, setPassword] = useState("")
    // const [title, setTitle] = useState("")
    // const [contents, setContents] = useState("")
    
    function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
        const newInputs = {
            ...inputs,
            [event.target.name]: event.target.value,
        }
        setInputs(newInputs)
        if(Object.values(newInputs).every(data => data !== "")) {
            setActive(true)
        }
        event.target.name
        event.target.value
    }

    async function onClickEdit () {
        try {
            const result = await updateBoard({
                variables: {
                    boardID: router.query.boardID,
                    password: inputs.password,
                    updateBoardInput: {
                        title: inputs.title,
                        contents: inputs.contents,
                    }
                }
            })
            alert("게시글을 수정합니다.")
            router.push(`/detail/${result.data.updateBoard._id}`)
        } catch (error) {
            alert(error.message)
        }
    }

    async function onClickSubmit() {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput : {
                        // writer: inputs.writer,
                        // password: inputs.password,
                        // title: inputs.title,
                        // contents: inputs.contents
                        ...inputs //  스프레드 연산자 이용
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
            // aaa={onChangeWriter}
            // bbb={onChangePassword}
            // ccc={onChangeTitle}
            // ddd={onChangeContents}
            onClickSubmit={onClickSubmit}
            active={active}
            onChangeInputs={onChangeInputs}
            isEdit={props.isEdit}
            onClickEdit={onClickEdit}
        />


    
    )


}