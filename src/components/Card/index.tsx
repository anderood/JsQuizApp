import React from "react";

import { Image, Text } from 'react-native';

import { Container, ContainerImage, Title, Description, ContainerButton, Button } from './styles';

export function Card(){
    return(
        <Container>
            <ContainerImage>
                {/* <Image source={require('../../images/back-code.jpg')}/> */}
            </ContainerImage>
            <Title>Beginner</Title>
            <Description>
                For JavaScript developers who is just stating learning the language, or has only recently started.
            </Description>
            <ContainerButton>
                <Button>
                    <Text>START</Text>
                </Button>
            </ContainerButton>
        </Container>
    )
}