import React from "react";

import { Container, ContainerImage, Image, Title, Description, ContainerButton, Button, TextButton } from './styles';

type ImageSourcePropType = React.ComponentProps<typeof Image>['source'];
interface CardProps{
    imgsource: ImageSourcePropType;
    title: string;
    description: string;
    onPress: ()=>void;
}


export function Card({ imgsource, title, description, onPress }: CardProps){
    return(
        <Container>
            <ContainerImage>
                <Image source={imgsource}/>
            </ContainerImage>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <ContainerButton>
                <Button onPress={onPress}>
                    <TextButton>START</TextButton>
                </Button>
            </ContainerButton>
        </Container>
    )
}