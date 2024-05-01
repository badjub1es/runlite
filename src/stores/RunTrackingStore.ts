import { createStore } from "zustand/vanilla";
import { MetricType } from "~/types/MetricType/MetricType";

export type RunTrackingState = {
  fileDownload: string;
  fileName: string;
  validFileAvailable: boolean;
  name: string;
  metricType: MetricType;
};

export type RunTrackingActions = {
  setFileDownload: (href: string) => void;
  setFileName: (fileName: string) => void;
  setValidFileAvailable: (available: boolean) => void;
  setName: (name: string) => void;
  setMetricType: (metricType: MetricType) => void;
};

export type RunTrackingStore = RunTrackingState & RunTrackingActions;

export const initRunTrackingStore = (): RunTrackingState => ({
  fileDownload: "",
  fileName: "",
  validFileAvailable: false,
  name: "",
  metricType: MetricType.MI,
});

export const defaultInitState: RunTrackingState = {
  fileDownload: "",
  fileName: "",
  validFileAvailable: false,
  name: "",
  metricType: MetricType.MI,
};

export const createRunTrackingStore = (
  initState: RunTrackingState = defaultInitState
) => {
  return createStore<RunTrackingStore>((set) => ({
    ...initState,
    setFileDownload: (href: string) =>
      set((state) => ({
        ...state,
        fileDownload: href,
      })),
    setFileName: (fileName: string) =>
      set((state) => ({
        ...state,
        fileName,
      })),
    setValidFileAvailable: (available: boolean) =>
      set((state) => ({
        ...state,
        validFileAvailable: available,
      })),
    setName: (name: string) =>
      set((state) => ({
        ...state,
        name,
      })),
    setMetricType: (metricType: MetricType) =>
      set((state) => ({
        ...state,
        metricType,
      })),
  }));
};
