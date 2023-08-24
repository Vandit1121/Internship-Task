import { ReactElement, useEffect, useState, } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import CheckBox from "./components/Checkbox";

const App = ():ReactElement => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (
      localStorage.getItem("Name") !== null &&
      localStorage.getItem("Phone Number") !== null &&
      localStorage.getItem("Email") !== null
    ) {
      setShow(false);
    }
  }, [show]);

  function setShowToFalse(){
    setShow(false);
  }

  return (
    <>
      {!show && <>
        <Table />
        <CheckBox />
      </>}
      {show && <Form setShow={setShowToFalse} />}
    </>
  );
};

export default App;
