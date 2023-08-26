import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

type Props = {
  onAddPerson: () => void;
};

function MainHeader(props: Props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Persons
      </h1>
      <p>
        <button className={classes.button} onClick={props.onAddPerson}>
          <MdPostAdd size={18} />
          New Person
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
