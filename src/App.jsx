import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import "./signIn.css"
import SportTable from './pages/SportTable'
import SportDetail from './pages/SportDetail';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path='/table' element={<SportTable/>}/>
          <Route path="/sport_detail/:sport_id" element={<SportDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
