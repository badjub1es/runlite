import { createStore } from 'zustand/vanilla';

export type RunTrackingState = {
    fileDownload: string;
    fileName: string;
    validFileAvailable: boolean;
}

export type RunTrackingActions = {
    setFileDownload: (href: string) => void;
    setFileName: (fileName: string) => void;
    setValidFileAvailable: (available: boolean) => void;
}

export type RunTrackingStore = RunTrackingState & RunTrackingActions;

export const initRunTrackingStore = (): RunTrackingState => ({
    fileDownload: '',
    fileName: '',
    validFileAvailable: false
});

export const defaultInitState: RunTrackingState = {
    fileDownload: '',
    fileName: '',
    validFileAvailable: false
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
        })),
        setValidFileAvailable: (available: boolean) => set((state) => ({
            ...state,
            validFileAvailable: available
        })),
    }))
}
