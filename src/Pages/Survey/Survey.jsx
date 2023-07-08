import React from 'react';
import './survey.css';
import SurveyComponent from '../../Components/Survey/Survey';
import Footer from '../../Components/Footer/Footer';
import { AiOutlineMinus } from 'react-icons/ai';
import greenTriangle from '../../assets/top-banner-green-triangle.svg';
import SurveyCreatorRenderComponent from '../../surveyComponent';

const SurevyPage = () => {
  const handleClick = (e) => {
    let x = e.target;
    if (x.parentNode.classList[1] !== 'active') {
      x.parentNode.classList.add('active');
    } else {
      x.parentNode.classList.remove('active');
    }
  };
  return (
    <div className="Survey">
      <div className="SurveyPageNavbar">
        <div className="NavBarWrapper">
          <div className="NavLogo">
            <a href="/"> Connect Experts</a>
          </div>
          <div className="FeatureNavDiv">
            <span>As featured in:</span>
            <div className="NavImgWrapper">
              <img
                src="https://images.webforms.mvfglobal.com/cro/cro-tech-innovation/PUBCRO-443/Business_Insider_Logo_grey.svg"
                alt="logo"
              />
            </div>
            <div className="NavImgWrapper">
              <img
                src="https://images.webforms.mvfglobal.com/cro/cro-tech-innovation/PUBCRO-443/The_Guardian_logo_grey.svg"
                alt="logo"
              />
            </div>
            <div className="NavImgWrapper">
              <img
                src="https://images.webforms.mvfglobal.com/cro/cro-tech-innovation/PUBCRO-443/The_Telegraph_logo_grey.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Cta-Main-Sur">
        <div className="left-Cta-Main-Sur"></div>
        <div
          className="right-Cta-Main-Sur"
          style={{ position: 'relative' }}
        >
          <img
            src={greenTriangle}
            alt="logo"
            style={{
              position: 'absolute',
              top: '0px',
              right: '70px',
              transform: ' rotate(-25deg)',
            }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Piste_Europe_7_orange_square.svg/240px-Piste_Europe_7_orange_square.svg.png"
            alt="logo"
            style={{
              position: 'absolute',
              bottom: '0px',
              right: '-70px',
              transform: ' rotate(-70deg)',
            }}
          />
        </div>
      </div>
      <div className="Survey-Box">
        <div className="BoxWrapper">
          <SurveyComponent />
        </div>
        <div className="PartnersDiv">
          <h2>Our partners: </h2>
          <div className="PartnersImgWrapper">
            <div style={{ width: '75px' }}>
              <img
                src="https://images.webforms.mvfglobal.com/cro/b2b/EM_PPC_002/8x8-logo.png"
                alt="logo"
                style={{ width: '100%', height: '35px' }}
              />
            </div>
            <div style={{ width: '45px' }}>
              <img
                src="https://images.webforms.mvfglobal.com/cro/b2b/Super_Theme/hihi_logo_black.png"
                alt="logo"
                style={{ width: '100%', height: '45px' }}
              />
            </div>
            <div style={{ width: '85px' }}>
              <img
                src="https://images.webforms.mvfglobal.com/cro/b2b/EM_PPC_002/lily-logo.jpg"
                alt="logo"
                style={{ width: '100%', height: '55px' }}
              />
            </div>
            <div style={{ width: '110px' }}>
              <img
                src="https://images.webforms.mvfglobal.com/cro/b2b/EM_PPC_002/Radius_Connect_TS.png"
                alt="logo"
                style={{ width: '100%', height: '35px' }}
              />
            </div>
            <div style={{ width: '95px' }}>
              <img
                src="https://images.webforms.mvfglobal.com/cro/b2b/EM_PPC_002/bonline.png"
                alt="logo"
                style={{ width: '100%', height: '28px' }}
              />
            </div>
            <div style={{ width: '85px' }}>
              <img
                src="https://images.webforms.mvfglobal.com/cro/b2b/Super_Theme/Enreach_Logo_2.png"
                alt="logo"
                style={{ width: '100%', height: '60px' }}
              />
            </div>
            <div style={{ width: '100px' }}>
              <img
                src="https://images.webforms.mvfglobal.com/cro/b2b/EM_PPC_002/Zoom_Logo.png"
                alt="logo"
                style={{ width: '100%', height: '40px' }}
              />
            </div>
            <div style={{ width: '140px' }}>
              <img
                src="	https://images.webforms.mvfglobal.com/cro/b2b/EM_PPC_002/NBC_Logo_Dark.png
                "
                alt="logo"
                style={{ width: '100%', height: '25px' }}
              />
            </div>
          </div>
          <hr />
        </div>
        <div className="StepsDiv">
          <h2>
            Save money on Telephone Systems in 3 simple
            steps!
          </h2>
          <div className="steps-Box-Wrapper">
            <div className="box-steps">
              <div className="BoxImgDiv">
                <img
                  src="	https://images.webforms.mvfglobal.com/cro/b2b/EM_REFORM_PPC_001/icons/block-three-a-001.svg"
                  alt="step1"
                />
              </div>
              <h4>1. Leave the hassle to us</h4>
              <span>
                Complete our short form in under a minute
              </span>
            </div>
            <div className="box-steps">
              <div className="BoxImgDiv">
                <img
                  src="https://images.webforms.mvfglobal.com/cro/b2b/EM_REFORM_PPC_001/icons/block-three-a-002.svg"
                  alt="step2"
                />
              </div>
              <h4>2. We’re 100% free</h4>
              <span>
                Receive free quotes from leading suppliers
              </span>
            </div>
            <div className="box-steps">
              <div className="BoxImgDiv">
                <img
                  src="https://images.webforms.mvfglobal.com/cro/b2b/EM_REFORM_PPC_001/icons/block-three-a-003.svg"
                  alt="step3"
                />
              </div>
              <h4>3. Save time & money</h4>
              <span>Save by comparing prices</span>
            </div>
          </div>
          <div className="rightBoxQuestions-sur">
            <div className="FaqBox">
              <div
                className="Faq-Question active"
                value="1"
                onClick={(e) => handleClick(e)}
              >
                <p>What are telephone systems?</p>
                <AiOutlineMinus className="Icon1" />
                <AiOutlineMinus className="Icon2" />
              </div>
              <div className="Faq-Answer" value="1">
                <p>
                  Business telephone systems help you and
                  your team to communicate effectively with
                  one another, while providing a
                  professional experience to customers or
                  clients who call your company. Nowadays,
                  most businesses are opting for VoIP phone
                  systems, as they’re affordable, reliable,
                  feature-rich, and can be accessed
                  remotely. Features like on-hold
                  customisation, auto attendant, and find me
                  follow me make for a smooth customer
                  experience when someone calls your
                  business. Meanwhile, unified
                  communications (UC) features, such as
                  video conferencing and instant messaging,
                  mean many VoIP systems are not so much
                  phone services as full team communication
                  suites. Of course, if VoIP isn’t for you,
                  you’ll find that there are lots of more
                  traditional phone systems still available
                  on the market.
                </p>
              </div>
            </div>
            <div className="FaqBox">
              <div
                className="Faq-Question"
                value="3"
                onClick={(e) => handleClick(e)}
              >
                <p>How do we work?</p>
                <AiOutlineMinus className="Icon1" />
                <AiOutlineMinus className="Icon2" />
              </div>
              <div className="Faq-Answer" value="3">
                <p>
                  Our free quote-matching service is quick
                  and easy to use:
                </p>
                <ol>
                  <li>
                    We’ll ask you a few questions about your
                    business, so we can understand your
                    business needs.
                  </li>
                  <li>
                    We’ll use your answers to match you with
                    up to five trusted suppliers. This is
                    why we ask for your contact details.
                    Your details are safe with us – we are
                    fully GDPR compliant and we’ll only ever
                    match you with suppliers that we know
                    can cater to your needs.
                  </li>
                  <li>
                    Your matched suppliers will get in touch
                    with you, so you can ask questions and
                    receive quotes tailored directly for
                    your needs. You’ll then be armed with
                    all of the information you need to
                    confidently compare, and choose from,
                    the top suppliers for you.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SurevyPage;
