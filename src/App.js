import {addToCart} from "./redux/action"
import {useDispatch} from "react-redux"
import './App.css';

function App() {
  const dispatch = useDispatch();
  const product = {
    name: 'iphone',
    type: 'mobile',
    price: 50000,
    color: 'white'
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default App;
