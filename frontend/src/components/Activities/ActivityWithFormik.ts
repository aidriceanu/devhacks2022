import {withFormik} from "formik";
import Activity, {ActivityValues} from "./Activity";
import {Activity as ActivityRequest} from "../../types/events";
import {createActivity} from "../../repositories/eventsRepository";

export interface ActivityProps {
    grade?: number;
}

const formDataToActivity = (data: any): ActivityRequest => {
    const { grade, evaluator, activity: label} = data
    return {
        evaluator,
        child: "child 1",
        action: "activity",
        label,
        grade
    } as ActivityRequest;
}

export const ActivityWithFormik = withFormik<ActivityProps, ActivityValues>({
    mapPropsToValues: ({ grade = 3 }: ActivityProps) => {

        return {
            grade
        } as ActivityValues;
    },
    handleSubmit: async (values:ActivityValues) => {
        await createActivity(formDataToActivity(values));
        return false;
    }
})(Activity);