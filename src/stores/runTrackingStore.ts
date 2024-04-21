import { createStore } from 'zustand/vanilla';

export type RunTrackingState = {
    fileDownload: string;
    fileName: string;
}

export type RunTrackingActions = {
    setFileDownload: (href: string) => void;
    setFileName: (fileName: string) => void;
}

export type RunTrackingStore = RunTrackingState & RunTrackingActions;

export const initRunTrackingStore = (): RunTrackingState => ({
    fileDownload: '',
    fileName: ''
});

export const defaultInitState: RunTrackingState = {
    fileDownload: '',
    fileName: ''
};

export const createRunTrackingStore = (
    initState: RunTrackingState = defaultInitState,
) => {
    return createStore<RunTrackingStore>((set) => ({
        ...initState,
        setFileDownload: (href: string) => set((state) => ({
            ...state,
            fileDownload: href
        })),
        setFileName: (fileName: string) => set((state) => ({
            ...state,
            fileName
        }))
    }))
}
