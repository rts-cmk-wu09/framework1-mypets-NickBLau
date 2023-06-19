import "../App.css";
import Lottie from "lottie-react";
import ErrorAnimation from "../assets/Error-Animation.json";
import ShibaCoffeRelax from "../assets/ShibaCoffeRelax.json";
import { Link } from "react-router-dom";
const ErrorView = () => {
  return (
    <>
      <div className="text-align">
        <Link to="/List">
          <h1> Error 404!</h1>
          <p> Whoops, something went wrong!</p>
          <p>You are not supposed to be here.</p>

          <p>
            If you are lost, click <span className="return-home">Here</span> to
            return to the front page of the website
          </p>
        </Link>
        <Lottie animationData={ErrorAnimation} />
        <Link to="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">
          <p>
            Or if you can click <span className="return-home">Here</span> to
            learn more about error codes
          </p>
        </Link>
        <p className="margin-top ">
          Or you can just stay here and relax
          <span className="font-size">☺</span>
        </p>
        <p>Don't worry, we don't mind</p>
        <Lottie animationData={ShibaCoffeRelax} />
      </div>
    </>
  );
};

export default ErrorView;
