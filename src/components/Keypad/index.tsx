import s from "./styles.module.scss";

export default function Keypad() {
  return (
    <>
      <div className={`${s.row} ${s.operations}`}>
        <button>AC</button>
        <button>--</button>
        <button>(</button>
        <button>)</button>
      </div>

      <div className="flex">
        <div className={s.numericKeypadContainer}>
          <div className={s.row}>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>

          <div className={s.row}>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>

          <div className={s.row}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>

          <div className={s.row}>
            <button>.</button>
            <button>0</button>
            <button className={s.equalButton}>=</button>
          </div>
        </div>

        <div className={`${s.basicOperations} ${s.operations} ${s.btnNoMargin}`}>
          <button>/</button>
          <button>X</button>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </>
  );
}
