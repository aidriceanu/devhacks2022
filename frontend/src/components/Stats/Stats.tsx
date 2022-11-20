import React, {useEffect, useState} from 'react';
import {Container, Paper} from "@mui/material";
import MoodChart from "./charts/MoodChart/MoodChart";
import GoodBehaviourChart from "./charts/GoodBehaviourChart/GoodBehaviourChart";
import BadBehaviourChart from "./charts/BadBehaviourChart/BadBehaviourChart";

export default function Stats() {
    return (
        <Container>
            <Paper elevation={3} style={{padding: "20px", marginTop: "30px", height: "800px"}}>
                <MoodChart />
                <GoodBehaviourChart />
                <BadBehaviourChart />
            </Paper>
        </Container>
    )
}
