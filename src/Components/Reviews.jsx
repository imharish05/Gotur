import testimonial1 from "../assets/testimonial1.jpg"
import testimonial2 from "../assets/testimonial2.png"
import testimonial3 from "../assets/testimonial3.jpg"


const Reviews = () => {
  return (
    <div className="Reviews d-flex flex-column align-items-center justify-content-around">
      <div className="row">
        <p className="h1 text-center my-5">
          A payments experience people love to talk about
        </p>
      </div>
      <div
        className="carousel slide col-lg-6 my-5"
        data-bs-ride="carousel"
        id="testimonialCarousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active text-center p-5">
            <img src={testimonial1} className="img-fluid mb-3" alt="" />
            <p className="mb-3">
              “Paysilo’s API is a breeze to work with. The documentation is
              clear, the setup is quick, and the flexibility means I can
              customize payments exactly how I need.”
            </p>
            <h6 className="fw-bold text-primary">Simab Dave - Web Designer</h6>
          </div>
          <div className="carousel-item text-center p-5">
            <img
              src={testimonial2}
              className="img-fluid rounded-circle mb-3"
              alt=""
            />
            <p className="mb-3">
              “Transactions are fast and secure, and the platform scales without
              a hitch. As a developer, I love knowing I can trust the system in
              production.”
            </p>
            <h6 className="fw-bold text-primary">Johnthan Doe - UX Designer</h6>
          </div>
          <div className="carousel-item text-center p-5">
            <img
              src={testimonial3}
              className="img-fluid rounded-circle mb-3"
              alt=""
            />
            <p className="mb-3">
              “It’s more than just payments—Paysilo’s dashboards and analytics
              give me and my clients the insights we need to grow. It feels
              built with developers in mind.”
            </p>
            <h6 className="fw-bold text-primary">Maccy Doe - Front End</h6>
          </div>
        </div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Reviews