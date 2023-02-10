import styled from "styled-components/native";

export const Container = styled.View`
   height: 320px;
   width: 95%;
   border: 2px solid blue;
   margin-top: 10px;
   border-radius: 10px;
`
export const ContainerImage = styled.View`
    height: 160px;
    /* width: 95%; */
    border: 2px solid red;
    /* border-radius: 10px; */
`

export const Title = styled.Text`
    padding: 10px 0 0 12px;
    font-size: 18px;
    font-weight: bold;
`

export const Description = styled.Text`
    padding: 12px 12px 0 12px;
    border: 2px solid blue;
`

export const ContainerButton = styled.TouchableOpacity`
    padding: 0 0 0 12px;

`
export const Button = styled.TouchableOpacity`
    height: 40px;
    width: 100px;
    background: green;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`

