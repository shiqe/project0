import React, { Component } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import Products from "./Products";
import ProductTable from "./ProductTable";

export default class Products_info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product: "",
      PricePerKg: "",
      PricePerBag: "",
      Available: 0,
      ProductsTable: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/")
      .then((res) => this.setState({ ProductsTable: res.data }))
      .catch((err) => console.log(err));
  }

  onDelete = (id) => {
    axios
      .delete("http://localhost:5000/products/delete/" +id)
      .then(() => alert("Item Deleted"))
      .catch((err) => alert(err));
    this.setState({
      ProductsTable: this.state.ProductsTable.filter((el) => el._id !== id)
    });
  };

  onSubmit = () => {
    const Products = {
      ProductName: this.state.Product,
      PricePerKg: this.state.PricePerKg,
      PricePerBag: this.state.PricePerBag,
      Available: this.state.Available
    };
    axios
      .post("http://localhost:5000/products/add", Products)
      .then(() => alert("Product Added"),()=>{
        axios
        .get("http://localhost:5000/products/")
        .then((res) => this.setState({ ProductsTable: res.data }))
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log("Error::" + err));

    window.location = "/products";
  };
  handleReset = () => {
    this.setState({
      Product: "",
      PricePerKg: "",
      PricePerBag: "",
      Available: 0
    });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return (
      <div>
        <Products
          values={this.state}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <Container style={Styles.table}>
          <ProductTable
            Tableinfo={this.state.ProductsTable}
            onDelete={this.onDelete}
          />
        </Container>
      </div>
    );
  }
}

const Styles = {
  table: {
    marginLeft: "4%",
    marginTop: "4%"
  }
};
