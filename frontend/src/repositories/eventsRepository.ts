import {Activity, Evaluation, Situation} from "../types/events";
import axios, {AxiosResponse} from "axios";

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

export const getEvaluations = async (): Promise<Evaluation[]> => {
    try {
        const response: AxiosResponse<Evaluation[]> = await axios<Evaluation[]>({
            url: 'http://127.0.0.1:3001/api/evaluations',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        });

        return response.data;
    } catch (e) {
        return [];
    }
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

export const getSituations = async (): Promise<Situation[]> => {
    try {
        const response: AxiosResponse<Situation[]> = await axios<Situation[]>({
            url: 'http://127.0.0.1:3001/api/situations',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        });

        return response.data;
    } catch (e) {
        return [];
    }
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

export const getActivities = async (): Promise<Activity[]> => {
    try {
        const response: AxiosResponse<Activity[]> = await axios<Activity[]>({
            url: 'http://127.0.0.1:3001/api/activities',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        });

        return response.data;
    } catch (e) {
        return [];
    }
}