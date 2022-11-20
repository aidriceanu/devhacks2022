import {withFormik} from "formik";
import Evaluation, {EvaluationValues} from "./Evaluation";
import {Evaluation as EvaluationRequest, Situation} from "../../types/events";
import {createEvaluation, createSituation} from "../../repositories/eventsRepository";
import {get} from "lodash";
import {situations} from "../../constants/constants";

export interface EvaluationProps {
    mood?: number;
}

const fromDataToEvaluation = (data: any): EvaluationRequest => {
    const { evaluator, mood: generalMood} = data
    return {
        evaluator,
        child: "child 1",
        action: "evaluation",
        generalMood
    } as EvaluationRequest;
}

const fromDataToSituations = (data: any): Situation[] => {
    const { good = [], bad = [], evaluator} = data;

    const goodSituations = Object.keys(good).map((situationKey): Situation => {
        return {
            evaluator,
            child: "child 1",
            action: "situation",
            label: get(situations, ['good', situationKey]),
            type: 'good'
        } as Situation;
    });

    const badSituations = Object.keys(bad).map((situationKey): Situation => {
        return {
            evaluator,
            child: "child 1",
            action: "situation",
            label: get(situations, ['bad', situationKey]),
            type: 'bad'
        } as Situation;
    });


    return [ ...goodSituations, ...badSituations ] as Situation[];
}

export const EvaluationWithFormik = withFormik<EvaluationProps, EvaluationValues>({
    mapPropsToValues: ({ mood = 3 }: EvaluationProps) => {

        return {
            mood
        } as EvaluationValues;
    },
    handleSubmit: async (values:EvaluationValues) => {
        await createEvaluation(fromDataToEvaluation(values));
        const situations: Situation[] = fromDataToSituations(values);

        for (const situation of situations) {
            await createSituation(situation);
        }

        return false;
    }
})(Evaluation);