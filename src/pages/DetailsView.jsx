import { Link } from "react-router-dom";
import PetPicture from "../assets/PetPicture.png";

const DetailsView = () => {
  return (
    <>
      <div>Hello world Detail</div>
      <Link to="/">
        <button>skip</button>
      </Link>
      <img src={PetPicture} alt="" />
    </>
  );
};

export default DetailsView;
