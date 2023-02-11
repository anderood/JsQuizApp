import styled from "styled-components/native";

export const Container = styled.View`
    margin: 10px 10px;
    background: #fff ;
   height: 120px;
   width: 45%;
   border: 1px solid #c3c3c3;
   margin-top: 10px;
   border-radius: 10px;
   padding: 10px 10px;
   
`

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${({ theme }) => theme.colors.text_dark };
`

export const ContainerScore = styled.View`
    width: 100px;
    height: 30px;
`

export const TitleScore = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium };
`

export const  ContainerButton = styled.View`
    margin-top: 5px;
`

export const Button = styled.TouchableOpacity`
    height: 35px;
    width: 80px;
    background: green;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.colors.shape }
`

