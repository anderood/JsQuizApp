import React from "react";

import { Container, Title, ContainerScore, TitleScore,  ContainerButton, Button, TextButton, } from "../Modules/styles"

interface ModulesProps{
    title: string;
    onPress: () => void;
}

export function Modules({ title, onPress }: ModulesProps){
    return(
        <Container>
            <Title>{ title }</Title>
            <ContainerScore>
                <TitleScore>Score: 0%</TitleScore>
            </ContainerScore>
            <ContainerButton>
                <Button onPress={onPress}>
                    <TextButton>START</TextButton>
                </Button>
            </ContainerButton>
        </Container>
    );

}





