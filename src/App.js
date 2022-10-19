
import Login from "./pages/Login";
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
  const user = useSelector((state) => 
  
  state.user.currentUser);
 
  return (
    <Routes>
           
          <Route path="/register" element={  <Register/>}>
          </Route>
          <Route path="/success" element={ <Success />}>
          </Route>
          <Route path="/login" element={user ? <Navigate to="/" /> :  <Login />}  >
          </Route>
          {user &&  <Route path="/" element={ <ProductList />}>
          </Route>}
          <Route path="/" element={<Navigate to="/login" /> }>
          </Route>
     </Routes>
  );
}

export default App;
