"use client"; //to tell next that this is a client component not a server component

import styles from "./page.module.css";
import { ChangeEvent, ReactNode, useState } from "react";
import Person from "@/components/Person";
import PersonList from "@/components/PersonList";

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
  ]);

  const headerStyle = {
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    height: "50px",
    width: "650px",
    margin: "20px",
    paddingTop: "5px",
    // ":hover": {
    //   backgroundColor: "green",
    //   color: "white",
    // },
  };

  const [showPersons, setShowPersons] = useState(true);

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

  if (showPersons) {
    headerStyle.backgroundColor = "peru";
    // headerStyle.color = "white";
    // headerStyle[":hover"] = {
    //   backgroundColor: "blue",
    //   color: "white",
    // };
  }

  /// Changing the list of classes dinamically /// need to be fixed
  const mainClasses = [];
  mainClasses.push(styles.main);
  if (persons.length <= 2) mainClasses.push(styles.blackBG);
  if (persons.length <= 1) mainClasses.push(styles.bold);

  return (
    <main className={mainClasses.join(" ")}>
      <h1 style={headerStyle} onClick={showHidePersons}>
        Persons
      </h1>
      This is my first React app
      <PersonList
        persons={persons}
        showPersons={showPersons}
        nameChangedHandler={(
          event: ChangeEvent<HTMLInputElement>,
          id: number
        ) => nameChangedHandler(event, id)}
        deleteHandler={(personId) => deleteHandler(personId)}
      />
      <button
        type="button"
        className={styles.clickMe}
        onClick={showHidePersons}
      >
        Show/ Hide
      </button>
      {/* <label htmlFor=""></label> */}
    </main>
  );
}
