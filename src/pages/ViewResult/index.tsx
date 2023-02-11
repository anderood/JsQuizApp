import React from "react";

import { Container, Title, Details, Correct, Erros, } from "../ViewResult/styles"

export function ViewResult(){
    return(
        <Container>
            <Title>50%</Title>
            <Details>
                <Correct>CORRECT: 4</Correct>
                <Erros>MISTAKES: 4</Erros>
            </Details>
        </Container>
    );
}