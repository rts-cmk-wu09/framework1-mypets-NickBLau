import { Link } from "react-router-dom";
import PetsIcon from "../assets/MyPetsIcon.svg";
const Tutorial = () => {
  return (
    <>
      <img src={PetsIcon} alt="  " />
      <h1>My Pets</h1>
      <p>
        Taking care of a pet is my favorite, it helps me to gamir stress and
        fatiuge
      </p>
      <Link to="/details">
        <button>skip</button>
      </Link>
    </>
  );
};

export default Tutorial;
