"use client"

import { useContext } from "react";
import s from "./styles.module.scss";
import { CalcContext } from "@/contexts/CalcContext";

export default function Display() {
  const { expression } = useContext(CalcContext);
  return (
    <div className={s.displayContainer}>
      <p>{expression}</p>
    </div>
  );
}
