import { FormEvent, useState } from "react";
import classes from "./NewPerosnForm.module.css";

type Props = {
  onCancel: () => void;
  onSubmit: (name: string, age: number) => void;
};

export default function NewPersonForm(props: Props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0); //I initiated it with 0 because the browser gives an error saying that the value changed from undifined to defined.

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //here, we should add a client side validation
    //or we may add it within the Home component because the persons list is there not here so we can chen if the added person is already exists.
    props.onSubmit(name, age ? age : 0);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />
      </p>
      <br />
      <p>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="text"
          value={age !== 0 ? age : ""}
          required
          onChange={(event) => setAge(parseInt(event.target.value))}
        />
      </p>
      {/* <button className={classes.actions} type="button">
        Add
      </button> */}
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Add</button>
      </p>
    </form>
  );
}
