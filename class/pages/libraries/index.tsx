import {YoutubeOutlined, CameraOutlined} from '@ant-design/icons'
import styled from '@emotion/styled'

const Youtube = styled (YoutubeOutlined)`
    color: red;
    font-size: 100px;
`;

export default function LibrariesPage () {

    function onClickIcon(event) {
        console.log(event.target);
    }

    return (
    <>
        <div>라이브러리 페이지</div>
        <Youtube id="1234" onClick={onClickIcon} />
        <CameraOutlined />
    </>
    )
}