import React from 'react';
import {find} from 'lodash';
import {Form, FormikProps} from 'formik';
import Container from "@mui/material/Container";
import {Box, Button, FormGroup, Input, Paper, Slide, Slider, Typography} from "@mui/material";

export type FormProps = {}

const marks: ArrayLike<BehaviorMark> = [
    {
        value: 1,
        label: 'Really Bad',
    },
    {
        value: 2,
        label: 'Bad',
    },
    {
        value: 3,
        label: 'Uneventfull',
    },
    {
        value: 4,
        label: 'Good',
    },
    {
        value: 5,
        label: "Really Good"
    }
];

type BehaviorMark = {
    value: number;
    label: string;
};

const valuetext = (value: number): string => {
    const mark: BehaviorMark = find<BehaviorMark>(marks, { value }) || {} as BehaviorMark;
    return mark?.label || "";
}

export interface EvaluationValues {
    mood: number;
}

export default function Evaluation({
                                       values,
                                       errors,
                                       touched,
                                       handleChange,
                                       handleBlur,
                                       handleSubmit,
                                       isSubmitting,
                                   }: FormikProps<EvaluationValues>) {
    return (
        <Container>
            <Paper elevation={3} style={{padding: "20px", marginTop: "30px"}}>
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <Typography gutterBottom>General Mood</Typography>
                        <Slider
                            aria-label="Overall behaviour"
                            defaultValue={values.mood}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={5}
                        />
                    </Box>
                    <Box>
                        <Button variant="contained" type={"submit"}>Submit</Button>
                    </Box>
                </Form>
            </Paper>
        </Container>
    );
}
