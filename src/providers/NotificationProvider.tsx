import { Alert, Snackbar } from "@mui/material";
import { type ReactNode, createContext, useContext, useState } from "react";

export interface NotificationContext {
  notifySuccess: (message: string) => void;
  notifyFailure: (message: string) => void;
}

export const NotificationProviderContext =
  createContext<NotificationContext | null>(null);

export interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const notifySuccess = (message: string) => {
    setSeverity("success");
    setMessage(message);
    setOpen(true);
  };

  const notifyFailure = (message: string) => {
    setSeverity("error");
    setMessage(message);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const value = {
    notifySuccess,
    notifyFailure,
  };

  return (
    <NotificationProviderContext.Provider value={value}>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={6000}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </NotificationProviderContext.Provider>
  );
};

export const useNotification = (): NotificationContext => {
  const notificationContext = useContext(NotificationProviderContext);
  if (notificationContext == null) {
    throw new Error(
      "The useNotification hook must be used within the NotificationProvider"
    );
  }
  return notificationContext;
};
