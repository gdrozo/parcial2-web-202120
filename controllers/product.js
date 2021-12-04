const data = require('../assets/data');

function getProducts(query) {
  if (query) {
    query = query.toLowerCase()
    return data.filter(element => (
      element.name.toLowerCase().includes(query)
    ))
  }
  return data;
}
 
module.exports = { getProducts };
