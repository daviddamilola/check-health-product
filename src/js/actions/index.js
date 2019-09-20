import C from '../constants'



export const findProductRequest = (name) => {
 return{
   type:C.FIND_PRODUCT,
   name
 }
}

export const recieveProduct = (name, json) => {
  return{
    type: C.RECEIVED_PRODUCT,
    name,
    nutrients: json.foods[0].food.nutrients,
    productInformation: json,
  }
}

export const fetchProductInformation = (name) => dispatch => {
  const apiKey = "m4RAfqkFapcjid51jg5sTCBZYUdRueSm83fwstkH";
const apiEndpoint = `https://api.nal.usda.gov/ndb/search/?format=json&q=${name}&sort=n&max=25&offset=0&api_key=${apiKey}`;
  dispatch(findProductRequest());
    fetch(apiEndpoint)
    .then(res => res.json())
    .then(data => data.list.item[0].ndbno)
    .then(no => {
      fetch(`https://api.nal.usda.gov/ndb/V2/reports?ndbno=${no}&type=b&format=json&api_key=${apiKey}`)
      .then(
        res => res.json(),
        error => console.log('An error occurred.', error)
        )
      .then(data => dispatch(recieveProduct(name, data)))
    })
}