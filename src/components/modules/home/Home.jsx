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
              <h2>I am a Full Stack Developer.</h2>
              <p>
                I am a Passionate Developer with Data Enthusiasm, leveraging
                over two years of experience to drive strategic decisions and
                business growth. My expertise spans SQL, Power BI, API
                integration, and full-stack development, with a strong focus on
                front-end technologies such as HTML, CSS, Bootstrap, ReactJS,
                and JavaScript, as well as back-end development.
                <br />I am continuously expanding my skill set, particularly in
                hybrid application development, with a focus on building
                scalable, data-driven solutions. My goal is to harness the power
                of data and technology to deliver innovative, high-impact
                solutions that drive business success.
                {/* <span>Read More</span> */}
              </p>
              <a href="./RESUME-ZE.pdf" target="_blank">
                Download CV
              </a>
            </div>
            <a href="#about_id">
              <img src={Aicon} alt="ArrowIcon" />
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
      {/* 2 years of professional experience in Worked on front-end development
      using React library, HTML, CSS, and Bootstrap. Developed expertise in
      JavaScript and utilized it in various projects. Data analysis and
      engineering using tools like SQL and Power BI to deliver insights that
      support report making. Collaborated on live projects with cross-functional
      teams, ensuring timely and budget-compliant, Delivery, and continuously
      expanded my skill set by adapting to new technologies. Actively seeking
      opportunities to further refine my data and development skills through
      hands-on experience and live projects. */}
      <div className="aboutdata-container">
        <div className="aboutdata-container-content">
          <div className="aboutdata-container-content-left">
            <ul>
              <li>
                <span>2 years </span>
                of professional experience in Data Analyst || Data Engineer ||
                SQL || Power BI || Full Stack Developer || React JS ||
                JavaScript || Bootstrap || Sass || HTML5 CSS3
              </li>

              <li>
                <b> Full Stack Developer in Peri Studios (Persent)</b>
                <br />
                <br />
                <b>Rug Bazaar (React E-Commerce Platform)</b>
                <br />
                <span>https://rugbazaar.co/</span>
                <br />
                <b>Rental Management Application (Sand Caddie)</b>
                <br />
                <span>https://sandcaddie.com/</span>
                <br />
                <b>Admin Panels (Multiple Projects)</b>
              </li>
              <li>
                <b> Full Stack Developer in CAS (1-6 Months)</b>
                <br />
                <br />
                <b>AI Chatbot with Audio Play Feature</b>
                <br />
                <span>https://gregarious-daifuku-ed2ccf.netlify.app/</span>
                <br />
                <b>German Web Portfolio</b>
                <br />
                <b>Admin Panels (Multiple Projects)</b>
              </li>
              <li>
                <b> Internship in Elite IT Team (1-6 Months)</b>
                <br />
                <br />
                <b>Elite IT Team Website</b>
                <br />
                <span>https://golden-haupia-84804e.netlify.app/</span>
                <br />
                <b>Signature Website Front End</b>
                <br />
                <b>Admin Panels (Multiple Projects)</b>
              </li>
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
                email: "",
                name: "",
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
              <textarea id="textarea" required></textarea>
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
