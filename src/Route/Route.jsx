import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home'
import SportTable from './pages/SportTable'

function MainRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" component={Home} />
          <Route path='/table' element={<SportTable/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainRouter;