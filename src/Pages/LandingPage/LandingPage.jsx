import React from 'react';
import './LandingPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import {
  AiOutlineArrowRight,
  AiOutlineMinus,
} from 'react-icons/ai';
import { CgFormatSlash } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { MdOutlineBookmark } from 'react-icons/md';
import { TbClockHour2 } from 'react-icons/tb';
import Footer from '../../Components/Footer/Footer';
import EmPicture from '../../assets/business-phone-system.png';
import womanCalling from '../../assets/expert-business.avif';
import womanCalling2 from '../../assets/woman2.jpg';
import top10 from '../../assets/Top10.jpg';
import voipCompare from '../../assets/voipcompare.png';
import voip from '../../assets/voipprovider.jpeg';
import hardHearing from '../../assets/hardHearing.jpg';
import voipphone from '../../assets/voipphone.jpg';
import saveMoney from '../../assets/savemoney.avif';
import multiLine from '../../assets/multiline.jpg';
import servers from '../../assets/servers.jpg';
import expert from '../../assets/icon-experts.svg';
import experience from '../../assets/icon-experience.svg';
import article from '../../assets/icon-article.svg';
import trusted from '../../assets/icon-trusted.svg';

const LandingPage = () => {
  const handleTitleClick = (e) => {
    const slectedSection = e.target.innerText;
    let y = document.getElementsByClassName('SpanTitle');
    let x = document.getElementsByClassName(
      'Boxe-Guidenace'
    );
    for (let i = 0; i < x.length; i++) {
      if (x[i].id === slectedSection) {
        x[i].classList.add('active');
        y[i].classList.add('active');
      } else {
        x[i].classList.remove('active');
        y[i].classList.remove('active');
      }
    }
  };
  const handleClick = (e) => {
    let x = e.target;
    if (x.parentNode.classList[1] !== 'active') {
      x.parentNode.classList.add('active');
    } else {
      x.parentNode.classList.remove('active');
    }
  };
  return (
    <div className="LandingPage">
      <NavBar />
      <div className="Cta-Main">
        <div className="left-Cta-Main"></div>
        <div className="right-Cta-Main">
          <h1 className="title">Business phone Systems</h1>
          <p className="content">
            Due to the development of accessible cloud
            technology, which is revolutionising the
            telecoms sector, today's corporate phone systems
            are used for more than just placing and
            receiving calls. Learn more with the help of our
            reviews and guides, and use our free
            quote-finding tool to receive estimates from the
            best phone system vendors for you that are
            specifically matched to your needs.
          </p>
          <a className="cta-button blinkMe" href="/survey">
            Comparing prices and saving
            <AiOutlineArrowRight
              style={{
                height: '12px',
                marginLeft: '10px',
                position: 'relative',
                top: '1px',
                width: '12px',
              }}
            />
          </a>
        </div>
      </div>
      <div className="What-is-content">
        <div
          style={{
            display: 'flex',
            position: 'relative',
            marginBottom: '20px',
          }}
        >
          <h2>
            {' '}
            <CgFormatSlash
              style={{
                position: 'absolute',
                left: '-24px',
                top: '-5px',
                color: '#0da587',
                fontSize: '46px',
              }}
            />{' '}
            What is a Business Telephone System?
          </h2>
        </div>
        <div className="What-is-content-Wrapper">
          <div className="Wrapper-left">
            <p>
              The way your team collaborates and how your
              company runs can be completely transformed
              with the appropriate business phone system.
              Cloud-based VoIP systems, which send calls
              over the internet rather than a landline, are
              currently the solution of choice for most
              enterprises. By allowing your team to access
              it from any location, collaborate with
              coworkers, and make and receive business calls
              from any internet-connected device, such a
              solution can make the shift to hybrid working
              easier. Additionally, built-in unified
              communications (UC) tools, including as
              instant messaging and video conferencing, can
              make collaboration across various locations
              straightforward.
            </p>
          </div>
          <div
            className="Wrapper-right"
            style={{ position: 'relative' }}
          >
            <img
              src={EmPicture}
              alt="Telephone Systems Graphic"
            />
            <span
              style={{
                borderRadius: '50%',
                position: 'absolute',
                width: '12%',
                height: '12%',
                backgroundColor: 'white',
                bottom: '18px',
                right: '28px',
              }}
            ></span>
          </div>
        </div>
      </div>
      <div className="Get-StartedDiv">
        <div className="Get-Started-Title">
          <CgFormatSlash
            style={{
              position: 'absolute',
              left: '-20px',
              top: '-5px',
              color: '#0da587',
              fontSize: '46px',
            }}
          />
          <h2>Get Started</h2>
          <span>
            View some of our in-depth reviews and guides.
          </span>
        </div>

        <div className="Get-Started-MainWrapper">
          <div className="getStartedLeft-box">
            <Link
              to={'/survey'}
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <div className="imgWrapper-GetStarted">
                <img
                  src={voip}
                  alt="Person using VoIP system on a smartphone"
                />
              </div>
              <div style={{ padding: '22px 20px' }}>
                <h3>
                  The 7 Best Business VoIP Providers in the
                  UK 2023
                </h3>
                <p>
                  Ready to upgrade to a flexible system.
                  Best VoIP Systems for Working from Home?
                  Compare the Top 7 VoIP Providers: Choose
                  the Best Provider for your business
                </p>
              </div>
            </Link>
            <span>By James Watts</span>
          </div>
          <div className="getStartedRight-box">
            <div className="RightBoxe-Boxes">
              <Link
                to={'/survey'}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <div className="wrapperBoxWho">
                  <img
                    src={womanCalling}
                    alt="Person using VoIP system on a smartphone"
                  />
                </div>
                <div className="textBoxWho">
                  <h3 className="title">
                    The 8 Best Phone Systems for Small
                    Businesses
                  </h3>
                  <span className="spanMobile">
                    By Manuel Joe
                  </span>
                </div>
              </Link>
              <span className="spanDesktop">
                By Manuel Joe
              </span>
            </div>
            <div className="RightBoxe-Boxes">
              <Link
                to={'/survey'}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <div className="wrapperBoxWho">
                  <img
                    src={top10}
                    alt="Person using VoIP system on a smartphone"
                  />
                </div>
                <div className="textBoxWho">
                  <h3>
                    What Are The Best Cordless Phones?
                  </h3>
                  <span className="spanMobile">
                    By Mary Joshua
                  </span>
                </div>
              </Link>
              <span className="spanDesktop">
                By Mary Joshua
              </span>
            </div>
            <div className="RightBoxe-Boxes">
              <Link
                to={'/survey'}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <div className="wrapperBoxWho">
                  <img
                    src={voipCompare}
                    alt="Person using VoIP system on a smartphone"
                  />
                </div>
                <div className="textBoxWho">
                  <h3>
                    Telephone Switchboard System Comparison
                  </h3>
                  <span className="spanMobile">
                    By Manuel Joe
                  </span>
                </div>
              </Link>
              <span className="spanDesktop">
                By Manuel Joe
              </span>
            </div>
            <div className="RightBoxe-Boxes">
              <Link
                to={'/survey'}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <div className="wrapperBoxWho">
                  <img
                    src={womanCalling2}
                    alt="Person using VoIP system on a smartphone"
                  />
                </div>
                <div className="textBoxWho">
                  <h3>
                    The Best Telephone Systems for Hotels in
                    2023
                  </h3>
                  <span className="spanMobile">
                    By Jackson Jack
                  </span>
                </div>
              </Link>
              <span className="spanDesktop">
                By Jackson Jack
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="Get-Notified-Div">
        <div className="Get-Started-Title">
          <CgFormatSlash
            style={{
              position: 'absolute',
              left: '-20px',
              top: '-5px',
              color: '#0da587',
              fontSize: '46px',
            }}
          />
          <h2>Get Informed </h2>
          <span>
            Watch our video guide to business phone systems
          </span>
        </div>
        <div className="Get-Notified-MainWrapper">
          <div className="leftBox">
            <ReactPlayer
              url="https://youtu.be/9lyGvfPj1Hc"
              controls={true}
              light={true}
              width="100%"
            />
          </div>
          <div className="rightBox">
            <div>
              <div>
                <MdOutlineBookmark
                  style={{
                    color: 'rgb(0,208,130',
                    fontSize: '38px',
                    marginLeft: '0px',
                    paddingLeft: '0px',
                  }}
                />
                <MdOutlineBookmark
                  style={{
                    color: 'rgb(0,208,130',
                    fontSize: '38px',
                    marginLeft: '0px',
                    paddingLeft: '0px',
                  }}
                />
              </div>
              <p className="QouteText">
                These solutions enable effective
                communication for your team, regardless of
                their physical location, by providing a
                unified system that can be accessed by all
                team members, whether they are working
                together in an office or remotely from
                different buildings.
              </p>
            </div>
            <div>
              <span
                style={{
                  fontWeight: '700',
                  marginBottom: '5px',
                }}
              >
                James Watts
              </span>
              <span>Content Manager</span>
            </div>
          </div>
        </div>
      </div>
      <div className="getGuidance-Div">
        <div className="Get-Started-Title">
          <CgFormatSlash
            style={{
              position: 'absolute',
              left: '-20px',
              top: '-5px',
              color: '#0da587',
              fontSize: '46px',
            }}
          />
          <h2>Get Guidance </h2>
          <span>
            Find the best solution for your business
          </span>
        </div>
        <div className="HeaderSelctMobile">
          <span
            className="SpanTitle active"
            onClick={(e) => handleTitleClick(e)}
          >
            Advice Guides
          </span>
          <span>/</span>
          <span
            className="SpanTitle"
            onClick={(e) => handleTitleClick(e)}
          >
            Cost Guides
          </span>
        </div>
        <div className="Guidnace-MainWrapper">
          <div
            className="Boxe-Guidenace active"
            id="Advice Guides"
          >
            <h3 className="GuidanceTitleDesktop">
              Advice Guides
            </h3>
            <div className="MainBox">
              <div className="mainBoxImg">
                <img
                  src={servers}
                  alt="Logo"
                  style={{ height: '92px', width: '100%' }}
                />
              </div>
              <div className="mainBoxText">
                <Link
                  to={'/survey'}
                  style={{ textDecoration: 'none' }}
                >
                  <h3>
                    2025 marks the end of the landline -
                    what does this mean for your business?
                  </h3>
                </Link>
                <span className="AuthorBox">
                  By Fernanda Alvarez Piñeiro
                </span>
              </div>
            </div>
            <div className="MainBox">
              <div className="mainBoxImg">
                <img
                  src={hardHearing}
                  alt="Logo"
                  style={{ height: '92px', width: '100%' }}
                />
              </div>
              <div className="mainBoxText">
                <Link
                  to={'/survey'}
                  style={{ textDecoration: 'none' }}
                >
                  <h3>Best Phones for Hard of Hearing</h3>
                </Link>
                <span className="AuthorBox">
                  By Fernanda Alvarez Piñeiro
                </span>
              </div>
            </div>
            <div className="MainBox">
              <div className="mainBoxImg">
                <img
                  src={voipphone}
                  alt="Logo"
                  style={{ height: '92px', width: '100%' }}
                />
              </div>
              <div className="mainBoxText">
                <Link
                  to={'/survey'}
                  style={{ textDecoration: 'none' }}
                >
                  <h3>A Guide to GSM Desk Phones</h3>
                </Link>
                <span className="AuthorBox">
                  By Aimee Bradshaw
                </span>
              </div>
            </div>
          </div>
          <div className="Boxe-Guidenace" id="Cost Guides">
            <h3 className="GuidanceTitleDesktop">
              Cost Guides
            </h3>
            <div className="MainBox">
              <div className="mainBoxImg">
                <img
                  src={saveMoney}
                  alt="Logo"
                  style={{ height: '92px', width: '100%' }}
                />
              </div>
              <div className="mainBoxText">
                <Link
                  to={'/survey'}
                  style={{ textDecoration: 'none' }}
                >
                  <h3>
                    Office Phone System Prices: The Ultimate
                    Guide
                  </h3>
                </Link>
                <span className="AuthorBox">
                  By Julia Watts
                </span>
              </div>
            </div>
            <div className="MainBox">
              <div className="mainBoxImg">
                <img
                  src={multiLine}
                  alt="Logo"
                  style={{ height: '92px', width: '100%' }}
                />
              </div>
              <div className="mainBoxText">
                <Link
                  to={'/survey'}
                  style={{ textDecoration: 'none' }}
                >
                  <h3>
                    Multi-Line Phone Systems For Business
                  </h3>
                </Link>
                <span className="AuthorBox">
                  By Aimee Bradshaw
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Cta-Content">
        <div className="wrapperDiv">
          <div className="ImageDiv-Promo"></div>
          <div className="Promo-Cta-Question">
            <h2>
              Do you currently have a telephone system?
            </h2>
            <div className="AnswerCta">
              <a
                href="/survey"
                className="buttonQuestionaire"
              >
                <div className="outer-circle">
                  <div className="inner-circle"></div>
                </div>
                Yes
              </a>
              <a
                href="/survey"
                className="buttonQuestionaire"
              >
                <div className="outer-circle">
                  <div className="inner-circle"></div>
                </div>
                No
              </a>
            </div>
            <span
              style={{
                paddingLeft: '20px',
                marginBottom: '37px',
                marginTop: '26px',
                fontSize: '13px',
                lineHeight: '20px',
                color: '#5D5D60',
                position: 'relative',
              }}
            >
              <TbClockHour2
                style={{
                  color: '#1a9bdb',
                  fontSize: '15px',
                  position: 'absolute',
                  bottom: '3px',
                  left: '0px',
                }}
              />
              It only takes a minute. Save by comparing
              telephone system quotes.
            </span>
          </div>
        </div>
      </div>
      <div className="WhoWeAre-MainDiv">
        <div className="WhoWeAre-Div">
          <div className="Box-title">
            <div
              className="Get-Started-Title"
              style={{ marginLeft: '20px' }}
            >
              <CgFormatSlash
                style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '-5px',
                  color: '#0da587',
                  fontSize: '46px',
                }}
              />
              <h2 style={{ marginTop: '0px' }}>
                Who we are
              </h2>
            </div>
            <p className="Paragraph-Who-weAre">
              We are a team of experienced editors, writers,
              and researchers who are passionate about
              helping businesses find the best solutions for
              their needs. With over a decade of experience,
              we understand the challenges businesses face
              when it comes to finding the right tools for
              their teams while staying within their budget.
              Our mission is to provide accurate and helpful
              guides, reviews, and product comparisons to
              make the process of choosing the right
              solutions for your business easier. We are
              committed to helping businesses make informed
              decisions that lead to improved productivity,
              efficiency, and success.
            </p>
          </div>
          <div className="Box-Wrapper">
            <div className="Box">
              <div className="boxWrapperWho">
                <div className="ImgBoxWrapper">
                  <img src={trusted} alt="img" />
                </div>
                <div className="Boxtitle">
                  <p>Trusted by 60,000 people each month</p>
                  <span className="BoxPara">
                    Become a part of our community of
                    readers and gain access to valuable
                    insights and resources that can help you
                    succeed
                  </span>
                </div>
              </div>
              <div className="boxWrapperWho">
                <div className="ImgBoxWrapper">
                  <img src={experience} alt="img" />
                </div>
                <div className="Boxtitle">
                  <p>12 years of experience</p>
                  <span className="BoxPara">
                    we understand that time and money are
                    valuable resources for any business.
                    That's why we offer tailored quotes that
                    are customized to your specific business
                    needs, helping you save both time and
                    money
                  </span>
                </div>
              </div>
              <div className="boxWrapperWho">
                <div className="ImgBoxWrapper">
                  <img src={expert} alt="img" />
                </div>
                <div className="Boxtitle">
                  <p>Experts across 30 industries</p>
                  <span className="BoxPara">
                    Discovering the right industry solutions
                    can be crucial for business growth
                  </span>
                </div>
              </div>
              <div className="boxWrapperWho">
                <div className="ImgBoxWrapper">
                  <img src={article} alt="img" />
                </div>
                <div className="Boxtitle">
                  <p>
                    Free business advice published daily
                  </p>
                  <span className="BoxPara">
                    we offer a vast library of free articles
                    that cover a wide range of topics
                    related to business solutions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="QuestionsMainDiv">
        <div className="QuestionsWrapperDiv">
          <div className="leftBoxQuestions">
            <h2>
              <CgFormatSlash
                style={{
                  position: 'absolute',
                  left: '-32px',
                  bottom: '-3px',
                  color: '#0da587',
                  fontSize: '46px',
                }}
              />
              Your questions answered
            </h2>
            <p>
              At COMPAREMOBILES, we have dedicated teams of
              specialists who possess extensive industry
              knowledge and expertise. Our teams are
              equipped to assist you in finding the best
              solution for your business needs.
            </p>
            <p>
              Contact us to ask more questions and get
              specific advice on telephone systems.
            </p>
            <a
              href="mailto:info@connect.expert"
              className="EmailLink"
            >
              info@connect.expert
            </a>
          </div>
          <div className="rightBoxQuestions">
            <div className="FaqBox">
              <div
                className="Faq-Question active"
                value="1"
                onClick={(e) => handleClick(e)}
              >
                <p>
                  How much do business phone systems cost?
                </p>
                <AiOutlineMinus className="Icon1" />
                <AiOutlineMinus className="Icon2" />
              </div>
              <div className="Faq-Answer" value="1">
                <p>
                  This depends on how advanced the system is
                  – by that we mean the number and
                  sophistication of the features it offers.
                </p>
                <p>
                  The most simple VoIP systems have prices
                  starting at around £10 per user, per
                  month, while enterprise-grade systems can
                  cost upwards of £60 per user, per month.
                  Basic VoIP-compatible desk phones start at
                  £50 each, while high-spec models can cost
                  up to £500.
                </p>
                <p>
                  There are lots of factors that come into
                  play here, so to get a clearer idea of how
                  much your system might cost, take a look
                  at our guide to business phone system
                  prices.
                </p>
              </div>
            </div>
            <div className="FaqBox">
              <div
                className="Faq-Question"
                value="2"
                onClick={(e) => handleClick(e)}
              >
                <p>
                  Why do I need a business telephone system?
                </p>

                <AiOutlineMinus className="Icon1" />
                <AiOutlineMinus className="Icon2" />
              </div>
              <div className="Faq-Answer" value="2">
                <p>
                  Modern business phone systems boast plenty
                  of benefits that you just don’t get with
                  bog standard domestic phone systems.
                </p>
                <p>
                  Advanced features, such as voicemail,
                  automatic call direction and forwarding,
                  and on-hold music and messages, show the
                  outside world that you’re running a
                  professional operation, and help you build
                  better communication and relationships
                  with customers.
                </p>
                <p>
                  Meanwhile, in-built UC features, such as
                  video calling and instant messaging, mean
                  your team can collaborate more easily
                  while hybrid working, boosting
                  productivity.
                </p>
                <p>
                  Plus, cloud-based business phone systems
                  are truly mobile, and can be accessed and
                  used on any internet-connected device, in
                  any location. Using your personal
                  smartphone, you can make and take calls
                  with your business number, video chat with
                  your team, and more.
                </p>
              </div>
            </div>
            <div className="FaqBox">
              <div
                className="Faq-Question"
                value="3"
                onClick={(e) => handleClick(e)}
              >
                <p>
                  What kind of business phone system should
                  I get?
                </p>
                <AiOutlineMinus className="Icon1" />
                <AiOutlineMinus className="Icon2" />
              </div>
              <div className="Faq-Answer" value="3">
                <p>
                  When deciding on the kind of phone system
                  your business should install, there are a
                  couple of choices to be made.
                </p>
                <p>
                  Firstly, you should decide whether you
                  want a traditional landline system, or a
                  business VoIP system, which makes and
                  takes calls over the internet. Nowadays,
                  most businesses are turning to VoIP
                  systems as they’re more affordable, easier
                  to install and scale, and come packed with
                  sophisticated professional features.
                </p>
                <p>
                  If you plump for VoIP, you’ll also need to
                  think about whether to go for a hosted
                  system or an on-premise system. With
                  hosted VoIP, your phone network will be
                  managed and maintained remotely by your
                  system provider, who’ll keep everything
                  ship shape behind the scenes.
                </p>
                <p>
                  Meanwhile, an on-premise system will be
                  hosted on your own servers, at your own
                  workplace. You’ll be responsible for
                  keeping the network running smoothly
                  yourself, but you’ll also have full
                  ownership of it, and will be able to
                  customise and configure it to your exact
                  needs.
                </p>
              </div>
            </div>
            <div className="FaqBox">
              <div
                className="Faq-Question"
                value="4"
                onClick={(e) => handleClick(e)}
              >
                <p>What does VoIP stand for?</p>
                <AiOutlineMinus className="Icon1" />
                <AiOutlineMinus className="Icon2" />
              </div>
              <div className="Faq-Answer" value="4">
                <p>
                  VoIP stands for voice over internet
                  protocol, and refers to tech that
                  transmits phone calls over the internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
