import { Link } from "react-router-dom";
import Footer from "./Footer";

const Landing = () => {

  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Brooklyn Art Library</h1>

            <p className="lead">
              
            </p>

            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>

              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};


export default Landing;
