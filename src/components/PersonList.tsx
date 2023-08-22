import { ChangeEvent, ReactNode } from "react";
import Person from "./Person";
import styles from "./PersonList.module.css";

type Person = {
  id: number;
  name: string;
  age: number;
};

type Props = {
  showPersons: boolean;
  persons: Array<Person>;
  nameChangedHandler: (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  deleteHandler: (id: number) => void;
};

export default function PersonList(props: Props) {
  let personsList: Array<ReactNode> = [];

  if (props.showPersons) {
    personsList = props.persons.map((person: Person) => {
      return (
        <div className={styles.PersonList}>
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onChange={(event) => props.nameChangedHandler(event, person.id)}
            onDelete={() => props.deleteHandler(person.id)}
          />
        </div>
      );
    });
  }

  return personsList;
}
