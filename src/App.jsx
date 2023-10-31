import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import MainRouter from "./Route/Route"
import { AuthProvider, useAuth } from "./Route/AuthContext";
import "./signIn.css"
import SportTable from './pages/SportTable'

const MainApp  = ()=> {
  const {currentUser} = useAuth();
  if (currentUser === null){
    console.log("Execute null")
    return <SignIn/>
  }
  else{
    console.log("Main Router");
    console.log(currentUser)
    console.log(currentUser.uid)
    return <MainRouter/>
  };
}

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