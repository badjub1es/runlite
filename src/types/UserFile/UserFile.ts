import { Shoe } from "../Shoe/Shoe";
import { MetricType } from "../MetricType/MetricType";
import { Run } from "../Run/Run";

export interface UserFileInit {
    name: string;
    metricType: MetricType;
    shoes: Shoe[];
    runs: Run[];
}

export const initialUserFile: UserFileInit = {
    name: '',
    metricType: MetricType.mi,
    shoes: [],
    runs: []
}
