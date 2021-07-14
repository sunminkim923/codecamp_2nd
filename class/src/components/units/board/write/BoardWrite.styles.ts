import styled from '@emotion/styled'

export const MyInput = styled.input``

interface IProps {
    active: boolean
}

export const MyButton = styled.button`
    background-color: ${(props: IProps) => props.active ? 'yellow' : 'gray'} // color : yellow 랑 같음

`

/* "안녕하세요" + aaa + 입니다
`안녕하세요${aaa}입니다`
->템플릿 리터럴 */

