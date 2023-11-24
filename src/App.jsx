import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from './firebase/AuthContext'; // Import your authentication context
import SignIn from "./pages/SignIn";
import "./styles/SignIn.css";
import SportTable from './pages/SportTable';
import SportDetail from './pages/SportDetail';
import SportDetailError from './pages/SportDetailError';


const MainRouter = () => (
  <Routes>
    <Route path="/" element={<SportTable />} />
    <Route path="/sport_detail/:sport_id" element={<SportDetail />} />
    <Route path="/sport_detail/error_page/:sport_id" element={<SportDetailError />} />
  </Routes>
);

const MainApp = () => {
  const { currentUser } = useAuth();

  if (currentUser === null || currentUser.uid !== 'fbLlCtZj0FR3dkNdkSIhjg5GPFX2') {
    console.log("Execute null");
    return <SignIn />;
  } else {
    console.log("Main Router");
    console.log(currentUser);
    console.log(currentUser.uid);
    return <MainRouter />;
  }
};

function App() {
  const dataIocApi = import.meta.env.VITE_API_DATA_IOC

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(dataIocApi)

        if (!res.ok) {
          throw new Error(`Server responded with status: ${res.status}`)
        }
        const result = await res.json()
        console.log(result)
      } catch (err) {
        console.error("Error fetching data:", err)
      }
    }

    fetchData();
}, []);

  return (
    <div className="app">
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </div>
  );
}
export default App;
