import styled from "styled-components/native";

export const Container = styled.View`
   height: 300px;
   width: 95%;
   border: 1px solid #c3c3c3;
   margin-top: 10px;
   border-radius: 10px;
`
export const ContainerImage = styled.View`
    height: 160px;
    /* width: 95%; */
    /* border: 2px solid red; */
    /* border-radius: 10px; */
`
export const Image = styled.Image`
    height: 160px;

    
    width: 100%;
    /* border: 2px solid red; */
    /* border-radius: 10px; */
`

export const Title = styled.Text`
    padding: 10px 0 0 12px;
    font-size: 16px;
    /* font-weight: bold; */
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${({ theme }) => theme.colors.text_dark };
    
`

export const Description = styled.Text`
    padding: 8px 12px 0 12px;
    /* border: 2px solid blue; */
    font-family: ${({ theme }) => theme.fonts.regular };
    color: ${({ theme }) => theme.colors.text };
    font-size: 12px;
`

export const ContainerButton = styled.TouchableOpacity`
    padding: 12px 0 0 12px;

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

