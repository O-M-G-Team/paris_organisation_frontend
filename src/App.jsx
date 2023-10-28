import {Routes, Route} from 'react-router-dom';
import SportDetail from './pages/SportDetail';
import SportTable from './pages/SportTable'


function App() {

  return (

    <div className="App">
      <Routes>
        <Route path='/table' element={<SportTable/>}/>
      </Routes>  
      <Routes>
          <Route path="/sport_detail/:sport_id" element={<SportDetail />} />
      </Routes>
  
    </div>

  )
}

export default App;



