import React from "react";
import {
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ProductTable from "./ProductTable";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(13),
    marginLeft: theme.spacing(4)
  },
  position: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(5)
  },
  input:{
    marginRight: theme.spacing(3)
  }
}));

const Products = (props) => {
  const classes = useStyles();
  
  return (
    <CssBaseline>
      <div className={classes.root}>

           <TextField
            label="Products Name"
            variant="outlined"
            color="primary" 
            defaultValue={props.values.Product}
            onChange={props.handleChange("Product")}
            className={classes.input}
          />
          <TextField
            label="Price Per Kg"
            variant="outlined"
            color="primary"
            defaultValue={props.values.PricePerKg}
            onChange={props.handleChange("PricePerKg")}
            className={classes.input}
          />
          <TextField
            label="Price Per Bag"
            variant="outlined"
            color="primary"
            defaultValue={props.values.PricePerBag}
            onChange={props.handleChange("PricePerBag")}
            className={classes.input}
          />
            <TextField
            label="Available"
            variant="outlined"
            color="primary"
            defaultValue={props.values.Available}
            onChange={props.handleChange("Available")}
            className={classes.input}
          />   
          <br />
          <Button variant="contained" color="primary" className={classes.input}  onClick={props.onSubmit} >
            Add Product
          </Button>
      </div> 

      <div className={classes.position}>
        <ProductTable />
      </div>
    </CssBaseline>
  );
};

export default Products;
