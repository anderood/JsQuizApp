import React from "react";

import { Container } from "../Home/styles";

import { Card } from "../../components/Card";
import { NavigationProp } from "@react-navigation/native";
const logo = require('../../images/back-code.jpg');

interface HomeProps{
    navigation: NavigationProp<any>
}

export function Home({ navigation }: HomeProps ){
    return(
        <Container>
            <Card 
                imgsource={logo}
                title="Iniciante"
                description="For JavaScript developers who is just stating learning the language, or has only recently started."
                onPress={ ()=> navigation.navigate('Home')}
                />
        </Container>
    )
}