import styled from "styled-components/native";
export const Container = styled.ScrollView``
export const Wrapper = styled.View``
export const UserWrapper = styled.View`
    flex-direction: row;
    padding: 15px 10px;
`
export const UserImage = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: gray;
`
export const UserInfoWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
`
export const UserInfoLeftContents = styled.View``
export const UserInfoRightContents = styled.View`
    
`
export const UserName = styled.Text`
    font-size: 18px;
`
export const CreatedAt = styled.Text`
    font-size: 14px;
    color: #4f4f4f;
`
export const MoreButton = styled.View`
    width: 50px;
    height: 30px;
    background-color: gray;
`
export const ImageWrapper = styled.View`
    height: 370px;
    background-color: gray;
`
export const BoardContentsWrapper = styled.View`
    padding: 15px 10px;
    border-bottom-width: 1px;
    border-bottom-color: #eaeaea;
`
export const BoardContentsText = styled.Text`
    font-size: 14px;
`
export const CommentsWrapper = styled.View`
    padding: 15px 10px;
    
    border-bottom-width: 1px;
    border-bottom-color: #eaeaea;
`
export const BoardComments = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const CommentsText = styled.Text`
    font-size: 12px;
    color: #828282;
`
export const LikeText = styled.Text`
    font-size: 12px;
    color: #828282;
`
export const NewCommentsWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
`
export const CommentsUserImage = styled.View`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background-color: gray;
`
export const NewCommentsText = styled.Text`
    font-size: 12px;
    color: #828282;
    padding-left: 10px;
`