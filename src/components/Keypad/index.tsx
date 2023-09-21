"use client";

import { useContext } from "react";
import s from "./styles.module.scss";
import { CalcContext } from "@/contexts/CalcContext";
import { requestCalc } from "@/services/calcApi";
import Image from "next/image";

export default function Keypad() {
  const { expression, setExpression, stage, setStage } =
    useContext(CalcContext);

  function removeLastChar(): void {
    setExpression(expression.slice(0, -1));

    if (stage === "") {
      const regexNum = /(\d{0,}\.?\d{1,})/;
      const nums = expression.match(regexNum);

      if (nums) {
        setStage(nums[nums.length - 1]);
        return;
      }
    }

    setStage(stage.slice(0, -1));
  }

  function onClickClear(): void {
    setExpression("");
    setStage("");
  }

  function insertStringIntoExpression(string: string): void {
    setExpression(expression + string);
    setStage(stage + string);
  }

  function onClickNumber(num: number): void {
    insertStringIntoExpression(num.toString());
  }

  function onClickDot(): void {
    const regexDecimalSeparator = /[\.,]/;
    if (regexDecimalSeparator.test(stage)) {
      alert("The number should have only one decimal part.");
      return;
    }

    insertStringIntoExpression(".");
  }

  function onClickOperations(operator: string): void {
    if (stage === "") return;

    insertStringIntoExpression(operator);
    setStage("");
  }

  async function onClickEqual(): Promise<void> {
    await requestCalc(expression);
  }

  return (
    <>
      <div className={`${s.row} ${s.operations}`}>
        <button onClick={() => onClickClear()}>AC</button>
        <button onClick={() => removeLastChar()}>
          <Image
            className={s.backspace}
            src="/backspace.svg"
            width={32}
            height={32}
            alt="backspace"
          />
        </button>
        <button>(</button>
        <button>)</button>
      </div>

      <div className="flex">
        <div className={s.numericKeypadContainer}>
          <div className={s.row}>
            {[7, 8, 9].map((num) => (
              <button onClick={() => onClickNumber(num)}>{num}</button>
            ))}
          </div>

          <div className={s.row}>
            {[4, 5, 6].map((num) => (
              <button onClick={() => onClickNumber(num)}>{num}</button>
            ))}
          </div>

          <div className={s.row}>
            {[1, 2, 3].map((num) => (
              <button onClick={() => onClickNumber(num)}>{num}</button>
            ))}
          </div>

          <div className={s.row}>
            <button onClick={onClickDot}>.</button>
            <button onClick={() => onClickNumber(0)}>{0}</button>
            <button onClick={onClickEqual} className={s.equalButton}>
              =
            </button>
          </div>
        </div>

        <div
          className={`${s.basicOperations} ${s.operations} ${s.btnNoMargin}`}
        >
          {["/", "*", "-", "+"].map((operator) => (
            <button onClick={() => onClickOperations(operator)}>
              {operator == "*" ? "x" : operator}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
