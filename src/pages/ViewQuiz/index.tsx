import React from "react";

import { 
    Container, 
    ContainerTitle,
    Position,
    Title,
    ContainerFrame,
    Description,
    ContainerOptions,
    ButtonOption,
    TextOption,
    ContainerResponse,
    DescriptionResponse 
} from "../ViewQuiz/styles";

export function ViewQuiz(){
    return(
        <Container>
            <ContainerTitle>
                <Position>1 / 8</Position>
                <Title>Qual é o valor do result?</Title>
            </ContainerTitle>
            <ContainerFrame>
                <Description >
                    {`
                import React from 'react';
                import { View, Text } from 'react-native';
                
                const MyComponent = () => {
                    return (
                    <View>
                        <Text>Hello, World!</Text>
                    </View>
                    );
                };
                
                export default MyComponent;
                    `}
                </Description>
            </ContainerFrame>
            <ContainerOptions>
                <ButtonOption>
                    <TextOption>throw a SyntaxError</TextOption>
                </ButtonOption>
                <ButtonOption>
                    <TextOption>undefined</TextOption>
                </ButtonOption>
                <ButtonOption>
                    <TextOption>Brendan</TextOption>
                </ButtonOption>
                <ButtonOption>
                    <TextOption>throw a ReferenceError</TextOption>
                </ButtonOption>
            </ContainerOptions>
            <ContainerResponse>
                <DescriptionResponse>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cum eligendi dolor velit nobis minima ea soluta, corporis 
                    facere recusandae voluptatum quam, ex eveniet est unde. 
                    Ex est molestias sunt laborum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cum eligendi dolor velit nobis minima ea soluta, corporis 
                    facere recusandae voluptatum quam, ex eveniet est unde. 
                    Ex est molestias sunt laborum!
                </DescriptionResponse>
            </ContainerResponse>

        </Container>
    );
}