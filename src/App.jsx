import {Routes, Route, useNavigate} from 'react-router-dom';
import SportDetail from './pages/SportDetail';


export default function App() {
  const navigate = useNavigate();

  const navigateToSportDetail = (sport_id) => {
    // 👇️ navigate to /sport_detail
    navigate(`/sport_detail/${sport_id}`);
  };


  return (
    <div>
      <div>
        <button onClick={() => navigateToSportDetail('3')}>A button in table</button>

        <Routes>
          <Route path="/sport_detail/:sport_id" element={<SportDetail />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}


