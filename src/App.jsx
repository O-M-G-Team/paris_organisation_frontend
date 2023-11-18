import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from './firebase/AuthContext'; // Import your authentication context
import SignIn from "./pages/signIn";
import "./styles/signIn.css";
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

  if (currentUser === null) {
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
  return (
    <div className="app">
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </div>
  );
}
export default App;
