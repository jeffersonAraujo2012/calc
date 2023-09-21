"use client"

import { createContext, useState } from "react";

interface ICalcContextValue {
  expression: string;
  setExpression: (expression: string) => void;
  stage: string;
  setStage: (number: string) => void;
}

export const CalcContext = createContext({} as ICalcContextValue);

interface ICalcContextProvider {
  children: React.ReactNode;
}

export default function CalcContextProvider({
  children,
}: ICalcContextProvider) {
  const [expression, setExpression] = useState("");
  const [stage, setStage] = useState("");

  return (
    <CalcContext.Provider
      value={{ expression, setExpression, stage, setStage }}
    >
      {children}
    </CalcContext.Provider>
  );
}
