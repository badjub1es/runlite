import { Shoe } from "../Shoe/Shoe";
import { MetricType } from "../MetricType/MetricType";
import { Run } from "../Run/Run";

export interface UserFile {
    name: string;
    metricType: MetricType;
    shoes: Shoe[];
    runs: Run[];
}

export const initialUserFile: UserFile = {
    name: '',
    metricType: MetricType.mi,
    shoes: [],
    runs: []
}
