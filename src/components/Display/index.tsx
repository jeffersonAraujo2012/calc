import s from './styles.module.scss';

interface IDisplay {
  expression: string;
}

export default function Display({expression}: IDisplay) {
  return (
    <div className={s.displayContainer}>
      <p>{expression}</p>
    </div>
  )
}