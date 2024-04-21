import { createStore } from 'zustand/vanilla';

export type RunTrackingState = {
    fileDownload: string;
}

export type RunTrackingActions = {
    setFileDownload: (href: string) => void;
}

export type RunTrackingStore = RunTrackingState & RunTrackingActions;

export const initRunTrackingStore = (): RunTrackingState => ({
    fileDownload: ''
});

export const defaultInitState: RunTrackingState = {
    fileDownload: ''
};

export const createRunTrackingStore = (
    initState: RunTrackingState = defaultInitState,
) => {
    return createStore<RunTrackingStore>((set) => ({
        ...initState,
        setFileDownload: (href: string) => set((state) => ({
            ...state,
            fileDownload: href
        }))
    }))
}
