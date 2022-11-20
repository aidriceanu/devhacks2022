import React from 'react';
import {Form, FormikProps} from "formik";
import Container from "@mui/material/Container";
import {InputLabel, Paper, Slider, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import {activity} from "../../constants/constants";

export interface ActivityValues {
    activity?: string;
    grade: number
}

export default function Activity({
                                       values,
                                       errors,
                                       touched,
                                       handleChange,
                                       handleBlur,
                                       handleSubmit,
                                       isSubmitting,
                                       setFieldValue,
                                   }: FormikProps<ActivityValues>) {
    return (
        <Container>
            <Paper elevation={3} style={{padding: "20px", marginTop: "30px"}}>
                <Form onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                        <InputLabel id="evaluator-label">Activity</InputLabel>
                        <Select
                            labelId="evaluator-label"
                            id="evaluator"
                            name={'activity'}
                            label="Age"
                            onChange={handleChange}
                            required={true}
                        >
                            {Object.values(activity).map((value) => {
                                return (
                                    value && <MenuItem value={value}>{value}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <FormControl className={'margin-top-10'} fullWidth>
                        <Typography gutterBottom>Activity Grade</Typography>
                        <Slider
                            aria-label="Overall behaviour"
                            defaultValue={values.grade}
                            valueLabelDisplay="on"
                            onChange={(event, value) => setFieldValue('grade', value)}
                            step={1}
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
