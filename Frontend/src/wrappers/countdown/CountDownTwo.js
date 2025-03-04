import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/section-title/SectionTitle";
import "./countdown.css"
// import Contact from "../../pages/other/Contact"
import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
  return (
    <Carousel>

      <Carousel.Item>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img 
                  src={process.env.PUBLIC_URL + "/assets/img/banner/deal.png"}
                  alt=""
                />
              </Link>
              </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" />
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        <div className="d-flex flex-column align-items-center justify-content-center">
        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img 
                  src={process.env.PUBLIC_URL + "/assets/img/banner/deal.png"}
                  alt=""
                />
              </Link>
              </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {/* <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img 
                  src={process.env.PUBLIC_URL + "/assets/img/banner/deal.png"}
                  alt=""
                />
              </Link>
              </div>
      </Carousel.Item>

    </Carousel>
  );
}


// export const CustomContact = () => {
//   return (
//     <>

//       <div className="col-12 col-lg-12 col-md-9">
//         <div className="contact-form">
//           <div className="contact-title mb-30">
//             <h2>Get In Touch</h2>
//           </div>
//           <form className="contact-form-style">
//             <div className="row">
//               <div className="col-lg-12">
//                 <input name="name" placeholder="Name*" type="text" />
//               </div>
//               <div className="col-lg-6">
//                 <input name="email" placeholder="Email*" type="email" />
//               </div>
//               <div className="col-lg-6">
//                 <input
//                   name="Mobile Number"
//                   placeholder="Mobile Number*"
//                   type="text"
//                 />
//               </div>
//               <div className="col-lg-12">
//                 <textarea
//                   name="message"
//                   placeholder="Any Specification You want"
//                   defaultValue={""}
//                 />
//                 <button className="submit" id="custom" type="submit">
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </form>
//           <p className="form-message" />
//         </div>
//       </div>
//     </>
//   )
// }



const CountDownTwo = ({ spaceTopClass, spaceBottomClass, dateTime }) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
      {/* <SectionTitle
          titleText="Get Your Own Customised laces"
          positionClass="text-center"
          spaceClass="mb-10"
        /> */}
       <div className="customize-title">
        <h6>ADD YOUR MAGIC TOUCH</h6>
        <br></br>
        <h5 >Customize</h5>
       </div>

       
          {/* <h2 className="text-center">Get Your Own Customised laces</h2> */}
          {/* <div className="col-md-6 mt-5">
            <div className="fruits-deal-img d-flex flex-row align-items-center rounded-circle object-fit-cover">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img className="rounded-circle object-fit-cover "
                  src={process.env.PUBLIC_URL + "/assets/img/banner/deal.png"}
                  alt=""
                />
              </Link>
            </div>
       
       
          </div> */}
          <div className="flex-column align-items-center justify-content-center">
          <UncontrolledExample/>
          </div>
          <br></br>
          <div className=" d-flex flex-column align-items-center justify-content-center">
          <p  className="customize-content m-5 w-75">When all that inspiration goes into your shoe design, anything feels possible. 
Voilà! Try your hand at making that so you lace with SneakAce’s co-creation service.</p>
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
