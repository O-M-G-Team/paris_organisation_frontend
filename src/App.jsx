import {Routes, Route} from 'react-router-dom';
import SportDetail from './pages/SportDetail';


export default function App() {

  return (
    <div>
      <div>

        <Routes>
          <Route path="/sport_detail/:sport_id" element={<SportDetail />} />
        </Routes>
      </div>
    </div>
  );
}



