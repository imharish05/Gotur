import { Link } from 'react-router-dom';
import { FaPaperPlane } from "react-icons/fa";
import Footer from './fOOTER.JSX';

const Contact = () => {
  return (
    <div className="Contact fluid-container d-flex align-items-center flex-column">
      <div className="row w-75 py-lg-4">
        <p className="h1 text-center">Contact Us</p>
        <p className="text-center py-3">
          We’d love to hear from you! Whether you have questions, need support,
          or want to explore how Paysilo can help your business grow, our team
          is always ready to assist. Reach out to us anytime—we’re just a
          message away.
        </p>
      </div>
      <div className="row contactMap">
        <div className="col-lg-6 border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60424.52413465102!2d-73.99127084001911!3d40.711260136117545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1756006427358!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="col-lg-6 ">
          <div className="message d-flex justify-content-center flex-column h-100 ">
            <p className="h2">Drop us message.</p>
            <div className="d-flex flex-wrap justify-content-between gap-3 inputBlock py-4">
              <input
                type="text"
                className="col-lg-5 col-12 px-2 py-3"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="col-lg-5 col-12 px-2 py-3"
                placeholder="Email"
              />
              <input
                type="text"
                className="col-12 px-2 py-3"
                placeholder="Subject"
              />
              <textarea
                name=""
                id=""
                className="col-12 px-2 py-3"
                placeholder="Message Here"
              ></textarea>
              <button className="px-3 py-3">
                <Link to="/">
                  Send Message
                  <FaPaperPlane />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Contact