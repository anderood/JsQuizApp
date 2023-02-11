import React from "react";

import { Container, Title, ContainerScore, TitleScore,  ContainerButton, Button, TextButton, } from "../Modules/styles"

export function Modules(){
    return(
        <Container>
            <Title>Test 1</Title>
            <ContainerScore>
                <TitleScore>Score: 0%</TitleScore>
            </ContainerScore>
            <ContainerButton>
                <Button>
                    <TextButton>START</TextButton>
                </Button>
            </ContainerButton>
        </Container>
    );

}





