import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import "./signIn.css"


function PrivateRoute() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" component={SignIn} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PrivateRoute();