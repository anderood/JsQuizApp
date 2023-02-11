import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: #fff;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium };
    color: #3c9308;
    font-size: 80px;
`;

export const Details = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 60%;
    
`;

export const Correct = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    color: #616161;
`;

export const Erros = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    color: #616161;
`;

