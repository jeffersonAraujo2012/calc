import Keypad from "@/components/Keypad";
import Display from "@/components/Display";
import CalcContextProvider from "@/contexts/CalcContext";
import s from "./styles.module.scss";

export default function Home() {
  return (
    <CalcContextProvider>
      <div className={s.calcPage}>
        <div className={s.calcContainer}>
          <Display />
          <Keypad />
        </div>
      </div>
    </CalcContextProvider>
  );
}
