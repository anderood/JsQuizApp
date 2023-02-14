import styled from "styled-components/native";

export const Container = styled.View`
    /* flex: 1; */
    background: #fff;
    /* align-items: center; */
    /* border: 2px solid green; */
    margin: 10px 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    

`

export const ContainerTitle = styled.View`
    flex-direction: row;
    padding: 5px 5px;
`
export const Position = styled.Text`
    padding: 10px 0 0 12px;
    font-family: ${({ theme }) => theme.fonts.bold };
    color: ${({ theme }) => theme.colors.text_dark };
`

export const Title = styled.Text`
    padding: 10px 0 0 12px;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.regular };
    color: ${({ theme }) => theme.colors.text_dark };
`

export const ContainerFrame = styled.View`
    height: 120px;
    /* border: 2px solid blue; */
    background: #30333f;
    /* padding: 10px 10px; */
    /* justify-content: center; */
    /* align-items: center; */
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    padding: 18px 18px;
    color: #fff;
`

export const ContainerOptions = styled.View`
`

export const ButtonOption = styled.TouchableOpacity`
    width: 100%;
    padding: 16px 16px;
    background: #fff;
    border: 1px solid #ccc
    /* border: 1px solid green; */
`

export const TextOption = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    color: ${({ theme }) => theme.colors.text_dark };

`

export const ContainerResponse = styled.View`
    height: 250px;
    background: #dcf4da;
    justify-content: center;
    /* align-content: center; */
    border: 1px solid #ccc
`

export const DescriptionResponse = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold };
    color: #2f7e37;
    padding: 16px 16px;

`

