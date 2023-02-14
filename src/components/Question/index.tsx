import React from "react";
import { ScrollView } from "react-native";

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
} from "../Question/styles";

interface QuestionProps{
    position: number;
    title: string;
    textCode: string;
    textOption: string[];
    textExplanation: string;
}

export function Question({
    position,
    title,
    textCode,
    textOption,
    textExplanation,
} : QuestionProps ){
    return(

        <ScrollView>
            
            <Container>
                <ContainerTitle>
                    <Position>{ position +` / 8` }</Position>
                    <Title> {title} </Title>
                </ContainerTitle>
                <ContainerFrame>
                    <Description>{textCode}</Description>
                </ContainerFrame>
                <ContainerOptions>

                    {
                        textOption.map((item, idx) => (

                            <ButtonOption key={idx}>
                                <TextOption>{item}</TextOption>
                            </ButtonOption>
                        ))
                    }
                    
                </ContainerOptions>
                <ContainerResponse>
                    <DescriptionResponse>{textExplanation}</DescriptionResponse>
                </ContainerResponse>

            </Container>
        </ScrollView>
    );
}