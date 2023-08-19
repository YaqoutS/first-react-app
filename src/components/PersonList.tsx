import { ChangeEvent, ReactNode, useState } from "react";
import Person from "./Person";
import styles from "./PersonList.module.css";

type Person = {
  id: number;
  name: string;
  age: number;
};

type Props = {
  showPersons: boolean;
};

export default function PersonList(props: Props) {
  let personsList: Array<ReactNode> = [];

  const [persons, setPersons] = useState<Array<Person>>([
    { id: 1, name: "Yaqout", age: 22 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Dema", age: 21 },
    { id: 4, name: "Ahmad", age: 9 },
  ]);

  const nameChangedHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const newList: Array<Person> = [...persons];
    const index = newList.findIndex((person, index) => {
      return person.id === id;
    });
    newList[index].name = event.target.value;
    setPersons(newList);
  };

  const deleteHandler = (id: number) => {
    const newList = [...persons];
    const index = newList.findIndex((person, index) => {
      return person.id === id;
    });
    newList.splice(index, 1);
    setPersons(newList);
  };

  if (props.showPersons) {
    personsList = persons.map((person: Person) => {
      return (
        <div className={styles.PersonList}>
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            onChange={(event) => nameChangedHandler(event, person.id)}
            onDelete={() => deleteHandler(person.id)}
          />
        </div>
      );
    });
  }

  return personsList;
}
