import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import './HomePage.css'

const HomePage = (props) => {
  const [enteredProductId, setEnteredProductId] = useState("");
  const [enteredSellingPrice, setEnteredSellingPrice] = useState("");
  const [enteredProductName, setEnteredProductName] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const productIdChangeHandler = (event) => {
    setEnteredProductId(event.target.value);
  };
  const sellingPriceChangeHandler = (event) => {
    setEnteredSellingPrice(event.target.value);
  };
  const productNameChangeHandler = (event) => {
    setEnteredProductName(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      enteredProductId,
      enteredProductName,
      enteredSellingPrice,
      enteredCategory
    );
    const productData = {
      id: enteredProductId,
      name: enteredProductName,
      price: enteredSellingPrice,
    };
    let KeyId = enteredProductId;

    let existingProducts = JSON.parse(localStorage.getItem(KeyId)) || [];
    existingProducts.push(productData);
    localStorage.setItem(KeyId, JSON.stringify(existingProducts));

    switch (enteredCategory) {
      case "Electronic":
        document.getElementById(
          "Electronic"
        ).innerHTML += `<p>${productData.name} - ${productData.price}</p>`;
        break;
      case "Food":
        document.getElementById(
          "Food"
        ).innerHTML += `<p>${productData.name} - ${productData.price}</p>`;
        break;
      case "Skin":
        document.getElementById(
          "SkinCare"
        ).innerHTML += `<p>${productData.name} - ${productData.price}</p>`;
        break;
      default:
        break;
    }

    setEnteredProductId("");
    setEnteredProductName("");
    setEnteredSellingPrice("");
    setEnteredCategory("");
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Input
          label="Product ID: "
          type="number"
          id="productID"
          value={enteredProductId}
          onChange={productIdChangeHandler}
        ></Input>
        <Input
          label="Selling Price: "
          type="number"
          id="sellingPrice"
          value={enteredSellingPrice}
          onChange={sellingPriceChangeHandler}
        ></Input>
        <Input
          label="Product Name: "
          type="text"
          id="productName"
          value={enteredProductName}
          onChange={productNameChangeHandler}
        ></Input>
        <label className="Label">Choose a Category</label>
        <select className="Select" value={enteredCategory} onChange={categoryChangeHandler}>
          <option value="" key="">
            ...
          </option>
          <option value="Electronic" key="1">
            Electronic Items
          </option>
          <option value="Food" key="2">
            Food Items
          </option>
          <option value="Skin" key="3">
            Skin Care Items
          </option>
        </select>
        <Button type="submit">ADD Product</Button>
      </form>
      <div id="display">
        <div id="Electronic">
          <h1>Electronic Items</h1>
        </div>
        <div id="Food">
          <h1>Food Items</h1>
        </div>
        <div id="SkinCare">
          <h1>Skin Care Items</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
