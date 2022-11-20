import {withFormik} from "formik";
import Activity, {ActivityValues} from "./Activity";

export interface ActivityProps {
    grade?: number;
}

export const ActivityWithFormik = withFormik<ActivityProps, ActivityValues>({
    mapPropsToValues: ({ grade = 3 }: ActivityProps) => {

        return {
            grade
        } as ActivityValues;
    },
    handleSubmit: (values:ActivityValues) => {
        alert(JSON.stringify(values));
        return false;
    }
})(Activity);