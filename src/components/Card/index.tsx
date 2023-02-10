import React from "react";

import { Container, ContainerImage, Image, Title, Description, ContainerButton, Button, TextButton } from './styles';

export function Card(){
    return(
        <Container>
            <ContainerImage>
                <Image source={require('../../images/back-code.jpg')}/>
            </ContainerImage>
            <Title>Beginner</Title>
            <Description>
                For JavaScript developers who is just stating learning the language, or has only recently started.
            </Description>
            <ContainerButton>
                <Button>
                    <TextButton>START</TextButton>
                </Button>
            </ContainerButton>
        </Container>
    )
}