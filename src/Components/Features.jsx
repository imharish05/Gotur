import React from 'react'
import { Link } from 'react-router-dom';
import Featuresimg from "../assets/Features.png";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GrDocumentUpload } from "react-icons/gr";
import { FaBagShopping } from "react-icons/fa6";
import { BsPersonBoundingBox } from "react-icons/bs";
import { TbHandFinger } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import Features1 from "../assets/Features1.png";
import Features2 from "../assets/Features2.png";



const Features = () => {
  return (
    <div className="fluid-container d-flex flex-column align-items-center justify-content-between Features">
      <div className="parallex d-flex justify-content-around flex-wrap py-md-4 p-2 w-100">
        <p className="h3 text-center">Over 30,000+ businesses using Paysilo</p>
        <button className="px-5 py-2">
          <Link to="/">Try Now</Link>
        </button>
      </div>

      <div className="grow text-center p-lg-5 p-3">
        <p className="h1">Start, Manage and Grow your Business</p>
        <p className="text-center para">
          With Paysilo, you can start your business easily, manage payments
          seamlessly, and grow with secure, scalable solutions—all in one place.
        </p>
      </div>

      <div className="solutions row gap-1 d-flex justify-content-center flex-lg-nowrap flex-wrap">
        <div className="col-lg-4 col-sm-12 text-end d-flex flex-column justify-content-evenly">
          <div className="box box1">
            <FaMoneyBill1Wave className="my-2" />
            <p className="h2">Payment</p>
            <p>
              Paysilo lets customers pay securely using cards, wallets, or bank
              transfers—fast, simple, and safe.
            </p>
          </div>
          <div className="box box2">
            <GrDocumentUpload className="my-2" />
            <p className="h2">Growth</p>
            <p>
              Grow your business with smarter payments, valuable insights, and
              tools that scale with you.
            </p>
          </div>
          <div className="box box3">
            <FaBagShopping className="my-2" />
            <p className="h2">Business</p>
            <p>
              Paysilo empowers your business with easy payments, smooth
              management, and the freedom to scale without limits.
            </p>
          </div>
        </div>
        <div className="col-3">
          <img className="img-fluid" src={Featuresimg} alt="" />
        </div>
        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-evenly">
          <div className="box box4">
            <BsPersonBoundingBox className="my-2" />

            <p className="h2">Manage Accounting</p>
            <p>
              Track, organize, and manage your accounting effortlessly with
              Paysilo—so you stay focused on growth, not spreadsheets.
            </p>
          </div>
          <div className="box box5">
            <TbHandFinger className="my-2" />

            <p className="h2">Resolve Disputes</p>
            <p>
              Paysilo helps you resolve payment disputes quickly and fairly,
              ensuring trust and transparency between you and your customers.
            </p>
          </div>
          <div className="box box6">
            <MdSupportAgent className="my-2" />
            <p className="h2">Global Support</p>
            <p>
              Get 24/7 global support with Paysilo—wherever your business goes,
              we’re here to help.
            </p>
          </div>
        </div>
      </div>

      <div className="row dashboard1 d-flex align-items-center flex-lg-nowrap flex-wrap py-4">
        <div className="col-lg-6 col-sm-12">
          <img src={Features1} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className="h2">
            We even give you more solutions to grow your business.
          </p>
          <p>
            We provide even more smart solutions to help you run smoothly, scale
            faster, and grow your business with confidence.
          </p>
        </div>
      </div>
      <div className="row dashboard2 d-flex align-items-center flex-lg-nowrap flex-wrap py-4">
        <div className="col-lg-6 col-sm-12">
          <p className="h2">
            Business growth & insights with powerfull dashboards.
          </p>
          <p>
            Unlock your business potential with powerful dashboards that bring
            every insight to your fingertips. From real-time analytics to growth
            trends, Paysilo helps you make smarter decisions, track performance,
            and accelerate your business growth with clarity and confidence.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={Features1} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Features