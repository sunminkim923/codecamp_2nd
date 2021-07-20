import { Button, Modal } from "antd"
import { useState } from "react"

export default function Libraries3Page(){
    const [isOpen, setIsOpen] = useState(false)
    function onClickSubmit (){
        setIsOpen(true)
    }
    function onClose(){
        setIsOpen(false)
    }

    return (
        <>
            <Modal 
            title="Basic Modal" 
            visible={isOpen} 
            onOk={onClose} 
            onCancel={onClose}
            >
                <div>게시물이 정상적으로 등록 되었습니다.</div>
            </Modal>
            <Button onClick={onClickSubmit}>게시물 등록</Button>
        </>
    )
}