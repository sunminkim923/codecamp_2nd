import { ChangeEvent } from "react"; 

export interface IProps {
    onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void
    onClickSubmit: () => void
    onClickEdit: () => void
    active: boolean
    isEdit?: boolean
}