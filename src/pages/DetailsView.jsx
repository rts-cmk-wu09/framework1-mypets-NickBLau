import { Link } from "react-router-dom";

const DetailsView = () => {
  return (
    <>
      <div>Hello world Detail</div>
      <Link to="/">
        <button>skip</button>
      </Link>
    </>
  );
};

export default DetailsView;
