import {withFormik} from "formik";
import Evaluation, {EvaluationValues} from "./Evaluation";

export interface EvaluationProps {
    mood?: number;
}

export const EvaluationWithFormik = withFormik<EvaluationProps, EvaluationValues>({
    mapPropsToValues: ({ mood = 3 }: EvaluationProps) => {

        return {
            mood
        } as EvaluationValues;
    },
    handleSubmit: (values:EvaluationValues) => {
        alert(JSON.stringify(values));
    }
})(Evaluation);