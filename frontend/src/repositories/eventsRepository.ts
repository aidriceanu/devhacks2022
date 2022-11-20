import {Activity, Evaluation, Situation} from "../types/events";
import axios from "axios";

export const createEvaluation = async (data: Evaluation) => {
    return axios({
        url: "http://127.0.0.1:3001/api/evaluations",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    });
}

export const createSituation = async (data: Situation) => {
    return axios({
        url: "http://127.0.0.1:3001/api/situations",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    });
}

export const createActivity = async (data: Activity) => {
    return axios({
        url: "http://127.0.0.1:3001/api/activities",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    });
}