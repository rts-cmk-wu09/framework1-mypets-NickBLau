import { Link } from "react-router-dom";

const ListView = () => {
  return (
    <>
      <div>Hello world list</div>
      <Link to="/">
        <button>skip</button>
      </Link>
    </>
  );
};

export default ListView;
