import React, { useState } from "react";
import { NavigationProp } from "@react-navigation/native";

import { Modules } from "../../components/Modules";
import { Container } from "../Dashboard/styles";

interface DashProps {
    navigation: NavigationProp<any>
}

export function Dashboard({ navigation }: DashProps ){

    const [numModules, setNumModules ] = useState(Array(8).fill(''));

    return(
        <Container>

            {
                numModules.map((elem, idx) => (
                    <Modules key={idx} title={`Modulo ${idx +1}`} onPress={()=> navigation.navigate('ViewQuiz')}/>
                ))
            }
            
        </Container>
    );
}