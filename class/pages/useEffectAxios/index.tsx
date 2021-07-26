import { useEffect, useState } from "react"
import axios from "axios"

export default function UseEffectAxiosPage() {
    const [imageUrl, setImageUrl] = useState ("")

    useEffect(()=> {
        
        const getImage = async () => {
        
        const result = await axios.get("https://dog.ceo/api/breeds/image/random")
        setImageUrl(result.data?.message)
    }
    getImage();
    }, [])

    return <img src={imageUrl} />
}