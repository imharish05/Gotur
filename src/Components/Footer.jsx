import { Link } from 'react-router-dom';
import Appstore from "../assets/appstore.png"
import Googleplay from "../assets/googleplay.png"
import Logo from "../assets/logo-white.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { TbBallBasketball } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="fluid-container d-flex align-items-center justify-content-center my-4">
      <div className="row">
        <div className="col-lg-3">
          <div className="items py-4">
            <p className="h5">PRODUCTS</p>
            <Link className='d-block py-2' to="/">Payment Gateway</Link>
            <Link className='d-block py-2' to="/">Smart Links</Link>
            <Link className='d-block py-2' to="/">Online  clasStore</Link>
            <Link className='d-block py-2' to="/">Payment Links</Link>
          </div>
          <div className="items py-4">
            <p className="h5">COMPANY</p>
            <Link className='d-block py-2' to="/">About Us</Link>
            <Link className='d-block py-2' to="/">Meet the Team</Link>
            <Link className='d-block py-2' to="/">Careers</Link>
            <Link className='d-block py-2' to="/">In the Press</Link>
            <Link className='d-block py-2' to="/">Privacy</Link>
            <Link className='d-block py-2' to="/">Terms & Conditions</Link>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="items py-4">
            <p className="h5">RESOURCES</p>
            <Link className='d-block py-2' to="/">Blog</Link>
            <Link className='d-block py-2' to="/">Success  clasStories</Link>
            <Link className='d-block py-2' to="/">eBooks</Link>
            <Link className='d-block py-2' to="/">Fee Calcul clasator</Link>
          </div>
          <div className="items py-4">
            <p className="h5">FEATURES</p>
            <Link className='d-block py-2' to="/">NEFT</Link>
            <Link className='d-block py-2' to="/">Convenience Fee</Link>
            <Link className='d-block py-2' to="/">App  clasStore</Link>
            <Link className='d-block py-2' to="/">Webhooks</Link>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="items py-4">
            <p className="h5">DEVELOPERS</p>
            <Link className='d-block py-2' to="/">API & Plugins</Link>
            <Link className='d-block py-2' to="/">System Status</Link>
          </div>
          <div className="items py-4 ">
            <p className="h5">OTHER LINKS</p>
            <Link className='d-block py-2' to="/">Become a Partner</Link>
            <Link className='d-block py-2' to="/">Pricing</Link>
            <Link className='d-block py-2' to="/">Affiliate</Link>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="items py-4">
            <Link className='d-block py-2' to="/"><img src={Googleplay} className='img-fluid py-2' alt="" /></Link>
            <Link className='d-block py-2' to="/"><img src={Appstore} className='img-fluid py-2' alt="" /></Link>
          </div>
          <div className="items py-4">
            <Link className='d-block py-2' to="/"><img src={Logo} className='img-fluid py-2' alt="" /></Link>
            <p className='para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              nisi modi ipsum assumenda doloribus est, perspiciatis adipisci!
              Obcaecati dolores quos nemo fuga provident libero vel quasi
              dolorum. Mollitia, numquam earum.
            </p>
            <div className="brands d-flex justify-content-between text-white">

            <Link className='d-block' to="/"><FaFacebookF /></Link>
            <Link className='d-block' to="/"><FaTwitter /></Link>
            <Link className='d-block' to="/"><TfiYoutube /></Link>
            <Link className='d-block' to="/"><TbBallBasketball /></Link>
            <Link className='d-block' to="/"><FaLinkedinIn /></Link>
            <Link className='d-block' to="/"><FaInstagram /></Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer