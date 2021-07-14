import { ChangeEvent, MouseEvent } from "react"
import { 
    MyInput,
    MyButton,
} from "./BoardWrite.styles"

import { IProps } from "./BoardWrite.types"


export default function BoardWriteUI (props: IProps) {
    return (
        <>
            작성자: <MyInput type="text" name="writer" onChange={props.onChangeInputs} /> <br />
            비밀번호: <MyInput type="password" name="password" onChange={props.onChangeInputs} />  <br />
            글제목: <MyInput type="text" name="title" onChange={props.onChangeInputs} />   <br />
            글내용: <MyInput type="text" name="contents" onChange={props.onChangeInputs} />   <br />
            {!props.isEdit && <MyButton onClick={props.onClickSubmit} active={props.active} >데이터 입력하기</MyButton>}
            {props.isEdit && <MyButton onClick={props.onClickEdit} active={props.active} >데이터 수정하기</MyButton>}
        </>
    )
}