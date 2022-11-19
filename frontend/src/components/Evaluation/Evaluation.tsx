import React from 'react';
import {find, get} from 'lodash';
import {Form, FormikProps} from 'formik';
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import {Box, Button, FormGroup, Input, InputLabel, Paper, Slide, Slider, Typography} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Evaluator} from "../../constants/enums";

export type FormProps = {}

const marks = [
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


const valuetext = (value: number): string => {
    const mark = find(marks, { value }) || {} as { label: string};
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
                                        setFieldValue,
                                   }: FormikProps<EvaluationValues>) {
    return (
        <Container>
            <Paper elevation={3} style={{padding: "20px", marginTop: "30px"}}>
                <Form onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                        <InputLabel id="evaluator-label">Evaluator</InputLabel>
                        <Select
                            labelId="evaluator-label"
                            id="evaluator"
                            name={'evaluator'}
                            label="Age"
                            onChange={handleChange}
                            required={true}
                        >
                            {Object.keys(Evaluator as { [s: number]: string }).map((key) => {
                                const value:string = get(Evaluator, key, '');

                                return (
                                    value && <MenuItem value={value}>{key}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <FormControl className={'margin-top-10'} fullWidth>
                        <Typography gutterBottom>General Mood</Typography>
                        <Slider
                            aria-label="Overall behaviour"
                            defaultValue={values.mood}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="on"
                            onChange={(event, value) => setFieldValue('mood', value)}
                            step={1}
                            marks={marks}
                            min={1}
                            max={5}
                        />
                    </FormControl>
                    <FormControl className={'margin-top-20'}>
                        <LoadingButton variant="contained" type={"submit"} loading={isSubmitting}>Submit</LoadingButton>
                    </FormControl>
                </Form>
            </Paper>
        </Container>
    );
}
