import SportTable from './pages/SportTable'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (

    <div className="App">
      <Routes>
        <Route path='/table' element={<SportTable/>}/>
      </Routes>  
  
    </div>

  )
}

export default App
