import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product1 from "./pages/Product1";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
           
          <Route path="/register" element={  <Register/>}>
          </Route>
          <Route path="/products/:category" element={ <ProductList />}>
          </Route>
          <Route path="/product/:id" element={ <Product1 />}>
          </Route>
          <Route path="/cart" element={ <Cart />}>
          </Route>
          <Route path="/success" element={ <Success />}>
          </Route>
          <Route path="/login" element={user ? <Navigate to="/" /> :  <Login />}  >
          </Route>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/" element={<Navigate to="/login" /> }>
          </Route>
     </Routes>
  );
}

export default App;
