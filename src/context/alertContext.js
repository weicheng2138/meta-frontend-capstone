import { createContext, useContext, useState } from "react";

export const AlertContext = createContext(undefined);

export const useAlertContext = () => useContext(AlertContext);
