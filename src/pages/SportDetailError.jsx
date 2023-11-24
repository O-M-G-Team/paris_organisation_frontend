import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/SportDetail.css";

const SportDetailError = () => {
  let { sport_id } = useParams();
  return (
    <>
      <NavBar />

      <div className="error-message">
        <h1> No sport detail for this sport_id: {sport_id} </h1>
      </div>
    </>
  );
};

export default SportDetailError;
