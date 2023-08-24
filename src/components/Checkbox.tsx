import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./Project.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CheckBox = () => {
  const [checked, setChecked] = useState([false, false]);
  const [designChecked, setDesignChecked] = useState([false, false, false]);
  const [showCustomerService, setShowCustomerService] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleChangeCustomerService1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked([event.target.checked, event.target.checked]);
    event.target.checked && setShowCustomerService(true);
  };

  const handleChangeCustomerService2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChangeCustomerService3 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleChangeDesign1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesignChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
    event.target.checked && setShowDetails(true);
  };

  const handleChangeDesign2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setDesignChecked([
      event.target.checked,
      designChecked[1],
      designChecked[2],
    ]);
  };

  const handleChangeDesign3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesignChecked([
      designChecked[0],
      event.target.checked,
      designChecked[2],
    ]);
  };

  const handleChangeDesign4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesignChecked([
      designChecked[0],
      designChecked[1],
      event.target.checked,
    ]);
  };

  const customer_service_children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 7 }}>
      <FormControlLabel
        label="support"
        control={
          <Checkbox
            checked={checked[0]}
            onChange={handleChangeCustomerService2}
          />
        }
      />
      <FormControlLabel
        label="customer_success"
        control={
          <Checkbox
            checked={checked[1]}
            onChange={handleChangeCustomerService3}
          />
        }
      />
    </Box>
  );

  const design_children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 7 }}>
      <FormControlLabel
        label="graphic_design"
        control={
          <Checkbox checked={designChecked[0]} onChange={handleChangeDesign2} />
        }
      />
      <FormControlLabel
        label="product_design"
        control={
          <Checkbox checked={designChecked[1]} onChange={handleChangeDesign3} />
        }
      />
      <FormControlLabel
        label="web_design"
        control={
          <Checkbox checked={designChecked[2]} onChange={handleChangeDesign4} />
        }
      />
    </Box>
  );

  return (
    <div className={styles.checkBoxContainer}>
      <span className={styles.title}>Select any option from below:</span>
      <div className={styles.checkBox}>
      {!showCustomerService && (
          <button
            onClick={() => {
              setShowCustomerService(true);
            }}
          >
            <AddIcon />
          </button>
        )}
        {showCustomerService && (
          <button
            onClick={() => {
              setShowCustomerService(false);
            }}
          >
            <RemoveIcon />
          </button>
        )}
        <FormControlLabel
          label="customer_service"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] != checked[1]}
              onChange={handleChangeCustomerService1}
            />
          }
        />
      </div>
      {showCustomerService && customer_service_children}
      <div className={styles.checkBox}>
        {!showDetails && (
          <button
            onClick={() => {
              setShowDetails(true);
            }}
          >
            <AddIcon />
          </button>
        )}
        {showDetails && (
          <button
            onClick={() => {
              setShowDetails(false);
            }}
          >
            <RemoveIcon />
          </button>
        )}
        <FormControlLabel
          label="design"
          control={
            <Checkbox
              checked={designChecked[0] && designChecked[1] && designChecked[2]}
              indeterminate={
                designChecked[0] != designChecked[1] ||
                designChecked[1] != designChecked[2] ||
                designChecked[0] != designChecked[2]
              }
              onChange={handleChangeDesign1}
            />
          }
        />
      </div>
      {showDetails && design_children}
    </div>
  );
};

export default CheckBox;
