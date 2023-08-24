// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./Project.module.scss";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";

interface Props {
  setShow: () => void;
}

const Form = ({ setShow }: Props) => {
  const [name, setName] = useState<string>("");
  const [NameError, setNameError] = useState(false);
  const [nameHelperText, setNameHelperText] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [PhoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberHelperText, setPhoneNumberHelperText] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [EmailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState<string>("");

  const checkHandler = () => {
    if (name.length > 0 && email.length > 0 && phoneNumber.length > 0) {
      localStorage.setItem("Name", name);
      localStorage.setItem("Phone Number", phoneNumber);
      localStorage.setItem("Email", email);
      setShow();
    } else {
      if (name.length === 0) {
        setNameError(true);
        setNameHelperText("Cannot be empty.");
      }
      else{
        setNameError(false);
        setNameHelperText("");
      }
      if (phoneNumber.length === 0) {
        setPhoneNumberError(true);
        setPhoneNumberHelperText("Cannot be empty.");
      }
      else{
        setPhoneNumberError(false);
        setPhoneNumberHelperText("");
      }
      if (email.length === 0) {
        setEmailError(true);
        setEmailHelperText("Cannot be empty.");
      }
      else{
        setEmailError(false);
        setEmailHelperText("");
      }
    }
  };

  return (
    <>
      <div className={styles.details}>
        <h1>Enter your details here:</h1>
        <TextField
          error={NameError}
          id="outlined-error-helper-text"
          label="Name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          helperText={nameHelperText}
          InputProps={{
            startAdornment:<InputAdornment position="start"><PersonIcon /></InputAdornment>
          }}
        />
        <TextField
          error={PhoneNumberError}
          id="outlined-error-helper-text"
          label="Phone Number"
          placeholder="Enter your Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          helperText={phoneNumberHelperText}
          InputProps={{
            startAdornment:<InputAdornment position="start"><LocalPhoneIcon /></InputAdornment>
          }}
        />
        <TextField
          error={EmailError}
          id="outlined-error-helper-text"
          label="Email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          helperText={emailHelperText}
          InputProps={{
            startAdornment:<InputAdornment position="start"><EmailIcon /></InputAdornment>  
          }}
        />
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          onClick={checkHandler}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default Form;
