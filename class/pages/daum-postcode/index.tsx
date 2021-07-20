import { useState } from "react"
import DaumPostcode from "react-daum-postcode"
import { Modal } from "antd"



export default function DaumPostcodePage (){
    const [address, setAdress] = useState("")
    const [zoneCode, setZoneCode] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    function onComplete(data){
        console.log(data)
        setAdress(data.address);
        setZoneCode(data.zonecode);
        setIsOpen(false)
    }

    function onClickOpenModal (){
        setIsOpen(true)
    }

    return (
        <>
            {isOpen && (
                <Modal title="주소검색하기" visible={true}>
                    <DaumPostcode onComplete={onComplete}  />
                </Modal>
            )}
            <button onClick={onClickOpenModal}>주소검색하기</button>
            <div>{address}</div>
            <div>{zoneCode}</div>
        </>
    )
}








