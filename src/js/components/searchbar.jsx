import React, { Component } from "react";

const SearchForm = ({onNewProduct}) => {
  let _productName
  const submit = e => {
    e.preventDefault();
    onNewProduct(_productName.value)
  };
  return (
    <form onSubmit={submit}>
      <input
        ref={input => (_productName = input)}
        type="text"
        placeholder="Product Name..."
        required
      />
      <button>SEARCH</button>
    </form>
  );
};

export default SearchForm;
