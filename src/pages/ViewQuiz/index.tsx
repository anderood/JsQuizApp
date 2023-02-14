import React from "react";
import { Question } from "../../components/Question";

import { Container } from "../ViewQuiz/styles";

export function ViewQuiz(){
    return(
        <Container>

            <Question></Question>
        </Container>
    );
}