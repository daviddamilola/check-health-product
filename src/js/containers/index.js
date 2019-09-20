import React from 'react';
import SearchBar from '../components/searchbar.jsx';
import Nutrients from "../components/Nutrients.jsx";
import { fetchProductInformation } from '../actions';
import { connect } from 'react-redux';

const NewSearch = (props) => (
  <SearchBar
  className="searchbar searchbar_welcome"
  onNewProduct={( name ) => (props.fetchProductInformation(name))}
/>
)

const ProductInformation = (props) => {
  const { nutrients, name, isLoading } = props;
  return isLoading === true? 
  null
  : (
    <div>
      <h3>{name}</h3>
      <hr/>
      <Nutrients
        className="nutrientInformation"
        list={nutrients}
      />
    </div>
  )
}

const mapStateToProps = ({productInformationReducer: {name, nutrients, isLoading}}) => ({
  name, nutrients, isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchProductInformation: name => {
    dispatch(fetchProductInformation(name))
  }
});

export const Search = connect(null, mapDispatchToProps)(NewSearch);
export const ProductInfo = connect(mapStateToProps, {fetchProductInformation})(ProductInformation)