import { ChangeEvent, ReactNode, useState } from "react";
import Person from "./Person/Person";
import styles from "./PersonList.module.css";
import NewPersonForm from "../NewPersonForm/NewPersonForm";
import Modal from "../Modal/Modal";

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
  showForm: boolean;
  onFormClose: () => void;
  onAddPerson: (name: string, age: number) => void;
};

export default function PersonList(props: Props) {
  let personsList: Array<ReactNode> = [];

  if (props.showPersons) {
    personsList = props.persons.map((person: Person) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          onChange={(event) => props.nameChangedHandler(event, person.id)}
          onDelete={() => props.deleteHandler(person.id)}
        />
      );
    });
  }

  return (
    <>
      {props.showForm && (
        <Modal onClose={props.onFormClose}>
          <NewPersonForm
            onSubmit={props.onAddPerson}
            onCancel={props.onFormClose}
          />
        </Modal>
      )}
      <div className={styles.PersonList}>{personsList}</div>
    </>
  );
}
