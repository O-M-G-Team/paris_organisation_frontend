import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home'


function MainRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainRouter;