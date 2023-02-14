import React from "react";
import { Question } from "../../components/Question";

import { Container } from "../ViewQuiz/styles";

import data from "../../data/dataTeste.json";

export function ViewQuiz(){
    return(
        <Container>

            {
                data.questions.map((item, idx) => (
                    item.num == 1 && 
                    <Question 
                        key={idx}
                        position={idx +1}
                        textCode={item.textCode.code}
                        textExplanation={item.explanation}
                        title={item.question}
                        textOption={item.answers}

                    />
                ))
            }

        </Container>
    );
}