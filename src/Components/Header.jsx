import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [nav,setNav] = useState(false)

    return (
      <header className="fluid-container d-flex align-items-center justify-content-center">
        <div className="wrapper d-flex align-items-center justify-content-between">
          <img className="img-fluid" src={Logo} alt="" />
          <nav className="d-none d-lg-flex align-items-center justify-content-between">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/questions">FAQ</Link>
            <Link to="/contact">Contact</Link>
            

            <Link to="/">
                        <button>
              <FaShoppingBag /> Buy Now
            </button></Link>

          </nav>
          <FaBarsStaggered
            className="burger d-lg-none"
            type="button"
            onClick={() => {
              setNav((prevNav) => !prevNav);
            }}
          />

          {nav && (
            <div className="nav2 d-sm-flex">
              <Link
                to="/"
                className="ps-2"
                onClick={(prevSet) => setNav(!prevSet)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="ps-2"
                onClick={(prevSet) => setNav(!prevSet)}
              >
                Features
              </Link>
              <Link
                to="/reviews"
                className="ps-2"
                onClick={(prevSet) => setNav(!prevSet)}
              >
                Reviews
              </Link>
              <Link
                to="/pricing"
                className="ps-2"
                onClick={(prevSet) => setNav(!prevSet)}
              >
                Pricing
              </Link>
              <Link
                to="/questions"
                className="ps-2"
                onClick={(prevSet) => setNav(!prevSet)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="ps-2"
                onClick={(prevSet) => setNav(!prevSet)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>
    );
}

export default Header