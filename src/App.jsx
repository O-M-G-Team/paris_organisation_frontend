import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import "./signIn.css"
import SportTable from './pages/SportTable'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path='/table' element={<SportTable/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;