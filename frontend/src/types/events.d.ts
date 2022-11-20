export interface Evaluation {
    evaluator: string;
    child: string;
    action: "evaluation";
    generalMood: number;
}

export interface Situation {
    evaluator: string;
    child: string;
    action: "situation";
    label: string;
    type: "bad" | "good";
}

export interface Activity {
    evaluator: string;
    child: string;
    action: "activity";
    label: string;
    grade: number;
}