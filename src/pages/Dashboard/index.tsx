import React from "react";

import { Container } from "../Dashboard/styles"

import { Card } from "../../components/Card"
import { Modules } from "../../components/Modules"

export function Dashboard(){
    return(
        <Container>
            <Modules />
            <Modules />
            <Modules />
        </Container>
    )
}