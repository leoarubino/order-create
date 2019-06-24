import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  }
}));

export default function FormInput() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    discount: "",
    amount: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="name"
        label="Nombre"
        className={classes.textField}
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
        variant="outlined"
        inputProps={{ maxLength: 100 }}
      />
      <TextField
        id="discount"
        label="Discount"
        className={classes.textField}
        value={values.discount}
        onChange={handleChange("discount")}
        margin="normal"
        variant="outlined"
        type="number"
      />
      <TextField
        id="amount"
        label="Amount"
        className={classes.textField}
        value={values.amount}
        onChange={handleChange("amount")}
        margin="normal"
        variant="outlined"
        InputProps={{
          inputComponent: AmountFormatCustom
        }}
      />
      <Button variant="contained" color="primary" className={classes.button} onClick={() => { console.log('sendFetch', {values} ); }}>
        Enviar Pedido
      </Button>
    </form>
  );
}

function AmountFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

AmountFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
