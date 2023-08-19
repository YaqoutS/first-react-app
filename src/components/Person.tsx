import { ChangeEventHandler, MouseEventHandler } from "react";
import styles from "./Person.module.css";

type Props = {
  key: number;
  name: string;
  age: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
};

export default function Person(props: Props) {
  return (
    <div className={styles.Person}>
      <p>
        I am {props.name} and I am {props.age}
      </p>
      <input
        type="text"
        style={{
          margin: "2%",
          padding: "0.5% 1%",
          backgroundColor: "white",
          color: "black",
        }}
        onChange={props.onChange}
        value={props.name}
      />
      <button
        className={styles.delete}
        style={{ margin: "2%", padding: "0.5% 1%" }}
        onClick={props.onDelete}
      >
        Delete
      </button>
    </div>
  );
}
