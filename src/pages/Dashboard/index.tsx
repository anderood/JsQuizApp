import React from "react";
import { Modules } from "../../components/Modules";

import { Container } from "../Dashboard/styles";

export function Dashboard(){
    return(
        <Container>
            <Modules />
            <Modules />
            
        </Container>
    );
}