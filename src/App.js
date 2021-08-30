import React,{useState, useEffect} from "react";
import { commerce } from './lib/commerce';
import ProductList from './components/ProductList.js';
const App = () => {

  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(data);
  };
  
  useEffect(()=>{
    fetchProducts();

  })


  return (

    <div className="App">
       <h1>Hello</h1>
       <ProductList products={products}/>
    </div>
  );
}

export default App;
