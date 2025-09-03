import { useState } from "react";
import Homeimg from "../assets/Home.png"
import Client1 from "../assets/Client1.png";
import Client2 from "../assets/Client2.png";
import Client3 from "../assets/Client3.png";
import Client4 from "../assets/Client4.png";
import Client5 from "../assets/Client5.png";
import { FaLink } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";

const Home = () => {

  const [input, setInput] = useState("");

  const [error,setError] = useState("")

  function handleSubscribe() {
    if (!input == "" || !input == " ") {
      setError(false)
    }
    else {
      setError(true)
    }

  }
  
  return (
    <div className="Home fluid-container d-flex flex-column align-items-center">
      <div className="row homeWrapper justify-content-between flex-wrap flex-lg-nowrap">
        <div className="col-md-5 col-sm-6 d-flex flex-column justify-content-center">
          <h1 className="pb-lg-4 pb-0">
            Powering 30,000+ Businesses like you in Australia
          </h1>
          <p className="pb-lg-4 pb-0">
            Get more than just a payment gateway. No setup fee. No maintenance
            fee. Use it the way you want!
          </p>

          <div className="email">
            <input
              className="px-lg-4 px-1 py-2 m-1"
              type="email"
              id="email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Your Email Address"
            />
            <button
              className="px-lg-5 px-2 py-2"
              onClick={() => {
                handleSubscribe();
              }}
            >
              Subscribe
            </button>

            {error && (
              <p className="errorText">Please Enter an Email Address</p>
            )}
          </div>
        </div>
        <div className="col-md-5 col-sm-6 d-flex align-items-center justify-content-center">
          <img className="img-fluid img-home" src={Homeimg} alt="" />
        </div>
      </div>

      <div className="Gateways d-flex flex-column justify-content-around">
        <div className="clients d-flex align-items-center justify-content-around flex-wrap flex-lg-nowrap">
          <img src={Client1} className="img-fluid" alt="" />
          <img src={Client2} className="img-fluid" alt="" />
          <img src={Client3} className="img-fluid" alt="" />
          <img src={Client4} className="img-fluid" alt="" />
          <img src={Client5} className="img-fluid" alt="" />
        </div>

        <div className="workwrapper d-flex flex-fill align-items-center justify-content-around py-lg-5">
          <div className="works h-100 d-flex flex-column align-items-center justify-content-between">
            <div className="paraWrapper d-flex flex-column align-items-center justify-content-around">
              <p className="h1 text-center">
                How Paysilo Payment Gateway Works
              </p>
              <p className="text-center py-3">
                Paysilo makes payments simple and hassle-free. With our gateway,
                you can instantly create secure payment links, share them with
                your customers through email, chat, or social media, and get
                paid in just a few clicks. No complex setup—just fast, reliable,
                and seamless transactions.
              </p>
            </div>

            <div className="boxs d-flex justify-content-around gap-5 w-100 flex-wrap flex-lg-nowrap">
              <div className="box box1 col-12 col-lg-3 mt-3">
                <FaLink className="icons icon1" />
                <p className="h5 py-3 px-3">1. Create Payment Links</p>
              </div>
              <div className="box box2 col-12 col-lg-3 mt-3">
                <IoArrowRedoSharp className="icons icon1" />
                <p className="h5 py-3 px-3">2. Share with Customers</p>
              </div>
              <div className="box box3 col-12 col-lg-3 mt-3">
                <FaMoneyBillAlt className="icons icon1" />
                <p className="h5 py-3 px-3">3. Get Paid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
