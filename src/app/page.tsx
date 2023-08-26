"use client"; //to tell next that this is a client component not a server component

import styles from "./page.module.css";
import { ChangeEvent, useState } from "react";
import PersonList from "@/components/PersonList/PersonList";
import MainHeader from "@/components/MainHeader/MainHeader";
import Link from "next/link";

type Person = {
  id: number;
  name: string;
  age: number;
};

export default function Home() {
  const [persons, setPersons] = useState<Array<Person>>([
    { id: 1, name: "Yaqout", age: 22 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Dema", age: 21 },
    { id: 4, name: "Ahmad", age: 9 },
  ]);

  const headerStyle = {
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    height: "50px",
    width: "650px",
    margin: "20px",
    paddingTop: "5px",
  };

  const [showPersons, setShowPersons] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const showHidePersons = () => {
    setShowPersons(!showPersons);
  };

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

  const HideFormHandler = () => setShowForm(false);

  const showFormHandler = () => setShowForm(true);

  const AddPersonHandler = (personName: string, personAge: number) => {
    const personId =
      persons.length !== 0 ? persons[persons.length - 1].id + 1 : 0;

    const newPerson: Person = {
      id: personId,
      name: personName,
      age: personAge,
    };

    setPersons((existingPersons) => {
      const newPersonsList: Array<Person> = [...existingPersons, newPerson];
      return newPersonsList;
    });
    setShowForm(false);
  };

  const mainClasses = [];
  mainClasses.push(styles.main);

  if (showPersons) {
    headerStyle.backgroundColor = "peru";
    mainClasses.push(styles.bold);
  }

  return (
    <main className={mainClasses.join(" ")}>
      <MainHeader onAddPerson={showFormHandler}></MainHeader>

      <button
        type="button"
        className={styles.myButton}
        onClick={showHidePersons}
      >
        {showPersons ? "Hide Persons" : "Show Persons"}
      </button>

      <Link href="/test">Go to the test page</Link>

      <PersonList
        persons={persons}
        showPersons={showPersons}
        nameChangedHandler={(
          event: ChangeEvent<HTMLInputElement>,
          id: number
        ) => nameChangedHandler(event, id)}
        deleteHandler={(personId) => deleteHandler(personId)}
        showForm={showForm}
        onFormClose={HideFormHandler}
        onAddPerson={AddPersonHandler}
      />

      {persons.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: "10px 0" }}>There are no persons yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </main>
  );
}
