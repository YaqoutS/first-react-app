"use client"; //to tell next that this is a client component not a server component

import styles from "./page.module.css";
import { useState } from "react";
import PersonList from "@/components/PersonList";

export default function Home() {
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

  const showHidePersons = () => {
    setShowPersons(!showPersons);
  };

  const mainClasses = [];
  mainClasses.push(styles.main);
  if (showPersons) {
    mainClasses.push(styles.blackBG);
    headerStyle.backgroundColor = "peru";
  }

  return (
    <main className={mainClasses.join(" ")}>
      <h1 style={headerStyle} onClick={showHidePersons}>
        Persons
      </h1>
      This is my first React app
      <PersonList showPersons={showPersons} />
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
