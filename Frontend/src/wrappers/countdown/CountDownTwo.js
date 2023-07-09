import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/section-title/SectionTitle";
// import Contact from "../../pages/other/Contact"




export const CustomContact = () => {
  return (
    <>

      <div className="col-12 col-lg-12 col-md-9">
        <div className="contact-form">
          <div className="contact-title mb-30">
            <h2>Get In Touch</h2>
          </div>
          <form className="contact-form-style">
            <div className="row">
              <div className="col-lg-12">
                <input name="name" placeholder="Name*" type="text" />
              </div>
              <div className="col-lg-6">
                <input name="email" placeholder="Email*" type="email" />
              </div>
              <div className="col-lg-6">
                <input
                  name="Mobile Number"
                  placeholder="Mobile Number*"
                  type="text"
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  name="message"
                  placeholder="Any Specification You want"
                  defaultValue={""}
                />
                <button className="submit" id="custom" type="submit">
                  Contact Us
                </button>
              </div>
            </div>
          </form>
          <p className="form-message" />
        </div>
      </div>
    </>
  )
}



const CountDownTwo = ({ spaceTopClass, spaceBottomClass, dateTime }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
      <SectionTitle
          titleText="Get Your Own Customised laces"
          positionClass="text-center"
          spaceClass="mb-10"
        />
        <div className="row align-items-center ">
          {/* <h2 className="text-center">Get Your Own Customised laces</h2> */}
         
          <div className="col-md-6">
       
            <div className="funfact-content funfact-res text-center">
           
              <div className="funfact-btn funfact-btn-green btn-hover">
                <CustomContact />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="fruits-deal-img row align-items-center">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/banner/deal.png"}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownTwo.propTypes = {
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownTwo;
