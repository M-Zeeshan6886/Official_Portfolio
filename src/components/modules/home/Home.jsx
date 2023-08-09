import React from "react";
import "./Home.scss";
import FormInput from "../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Aicon, Pfimg } from "../../../assets";
import BuiltItemContainer from "../imageSlider/Imgslider";

const Home = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("name is Required"),
  });



  return (
    <>
      <div className="header-container">
        <div className="header-container-content">
          <div className="header-container-content-left">
            <hr />
            <div className="header-container-content-left-pdata">
              <pre>Hi my name is </pre>
              <h1>Muhammad Zeeshan Zafar.</h1>
              <h2>I am a Front-End Developer.</h2>
              <p>
                I am Zeeshan Zafer working as a full stack frontend developer. I have expertise in all the main stacks which are supportive of frontends like HTML CSS Bootstrap, ReactJS, and Javascript. Also, my aim is to get expertise in all hybrid application development as well. I am highly passionate about learning more skills and adding value to the IT industry.
              <br />
              TO SEEK A CHALLENGING POSITION IN A PROGRESSIVE and GROWING ORGANIZATION WHERE. I MAY B TO UTILIZE MY SKILLS AND ABILITY WITH AN OPPORTUNITY OF GROWTH, ADVANCEMENT & ENHANCEMENT OF MY KNOWLEDGE.
                {/* <span>Read More</span> */}
              </p>
              <a href="./RESUME-ZE.pdf" target="_blank">Download CV</a>
            </div>
            <a href="#about_id">
            <img src={Aicon} alt="ArrowIcon"/>
            </a>
          </div>
          <div className="header-container-content-right">
            <div className="header-container-content-right-menu">
              <a href="#about_id">01 About</a>
              <a href="#built_id">02Things I Built</a>
              <a href="#contact_id">03 Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-container-content">
          <div className="about-container-content-left">
            <h1 id="about_id">About</h1>
          </div>
          <div className="about-container-content-right">
            <hr />
          </div>
        </div>
      </div>
      <div className="aboutdata-container">
        <div className="aboutdata-container-content">
          <div className="aboutdata-container-content-left">
            <ul>
              <li>
                <span>1.5 years </span>
                of professional experience in Frontend Development || React JS || JavaScript || Bootstrap || Sass || HTML5 CSS3.
              </li>
              <li>
               Front-end Developer, Elite IT Team (6 months)
              </li>
              <li>
               Worked on front-end development using React library, HTML, CSS, and Bootstrap.
              </li>
              <li>
Developed expertise in JavaScript and utilized it in various projects.              </li>
              <li>
                Contributed to the team's success by developing and implementing high-quality front-end Solutions
              </li>
              <li>
              Collaborated with team members on live projects, delivering projects on time and within budget.
              </li>
              <li>
              Continuously learned and adapted to new technologies and tools to stay up-to-date in the industry.
              </li>
              <li>
              Looking forward to having an opportunity in the practical field to polish my skills, learn new skills, and can work on live projects.              </li>
              
            </ul>
          </div>
          <div className="aboutdata-container-content-right">
            <img src={Pfimg} alt="Profile-picture" />
          </div>
        </div>
      </div>
      <div className="built-container">
        <div className="built-container-content">
          <div className="built-container-content-left">
            <h1 id="built_id">Things I Built</h1>
          </div>
          <div className="built-container-content-right">
            <hr />
          </div>
        </div>
      </div>
      <BuiltItemContainer />
      <div className="contact-container" id="contact_id">
        <div className="contact-container-content">
          <div className="contact-container-content-left">
            <h1>Let's Talk</h1>
            <p>Get in touch with and together let’s make Internet better.</p>
            <h4>Email</h4>
            <p>mzxeeshuu@gmail.com</p>
            <h4>Whats App</h4>
            <p>+92308 5433524</p>
            <h4>Socials</h4>
            <button>Instagram</button>
            <button>Twitter</button>
            <button>Facebook</button>
          </div>
          <div className="contact-container-content-right">
            <Formik
              initialValues={{
                email: "",
                name: "",
              }}
              validate={{
                email: '',
                name: ''
              }}
            >
              {(formik) => (
                <div>
                  <Form>
                    <FormInput
                      label="Name"
                      name="name"
                      type="text"
                      place="Enter your name"
                    />
                    <FormInput
                      label="Email"
                      name="email"
                      type="email"
                      place="Enter your email"
                    />
                  </Form>
                </div>
              )}
            </Formik>
            <div className="contact-container-content-right-inputfield">
              <label for="textarea">Message</label>
              <textarea id="textarea" required ></textarea>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="Sticky">
        <Socialsbar />
      </div> */}
    </>
  );
};

export default Home;
