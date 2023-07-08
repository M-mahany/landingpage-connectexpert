import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import './privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy">
      <NavBar />
      <div className="PrivacyContainer">
        <h1>PRIVACY POLICY</h1>
        <span style={{ fontWeight: '600' }}>
          Last Updated: 22.06.23
        </span>
        <p>
          Welcome to Connect.Expert ("we", "us", "our").
          This Privacy Policy explains how we use any
          personal data we collect about you when you use
          this website and our services.
        </p>
        <ol>
          <li>WHAT INFORMATION DO WE COLLECT ABOUT YOU?</li>
          <p>
            {' '}
            We collect information about you when you
            register with us, fill in any forms, submit any
            applications for services, or place an order for
            our products or services. We also collect
            information when you voluntarily provide
            feedback and participate in competitions.{' '}
          </p>
          <li>
            HOW WILL WE USE THE INFORMATION ABOUT YOU?
          </li>
          <p>
            We collect information about you to process your
            order, manage your account and if you agree, to
            contact you about other products and services we
            think may be of interest to you.
          </p>
          <p>
            We use your information collected from the
            website to personalise your repeat visits to our
            website.
          </p>
          <p>
            If you agree, we shall pass on your personal
            information to our group of companies and
            networks so that they may offer you their
            products and services.
          </p>
          <p>
            We may share your information with credit
            reference agencies for the purpose of assessing
            your credit score where this is a condition of
            us entering into a contract with you.
          </p>
          <li>MARKETING</li>
          <p>
            We would like to send you information about
            products and services of ours and other
            companies in our group which may be of interest
            to you. If you have consented to receive
            marketing, you may opt out at any time.
          </p>
          <li>ACCESS TO YOUR INFORMATION AND CORRECTION</li>
          <p>
            You have the right to request a copy of the
            information that we hold about you. If you would
            like a copy of some or all of your personal
            information, please email or write to us at the
            address below.
          </p>
          <li>COOKIES</li>
          <p>
            Cookies are text files placed on your computer
            to collect standard internet log information and
            visitor behaviour information. This information
            is used to track visitor use of the website and
            to compile statistical reports on website
            activity. For further information visit
            www.aboutcookies.org or www.allaboutcookies.org.
            You can set your browser not to accept cookies
            and the above websites tell you how to remove
            cookies from your browser. However, some of our
            website features may not function as a result.
          </p>
          <li>OTHER WEBSITES</li>
          <p>
            Our website contains links to other websites.
            This privacy policy only applies to this website
            so when you link to other websites you should
            read their own privacy policies.
          </p>
          <li>CHANGES TO OUR PRIVACY POLICY</li>
          <p>
            We keep our privacy policy under regular review
            and we will place any updates on this web page.
            This privacy policy was last updated on [Date].
          </p>
          <li>HOW TO CONTACT US</li>
          <p>
            Please contact us if you have any questions
            about our privacy policy or information we hold
            about you:
          </p>
          <div className="contactDivPrivacy">
            <a href="mailto:info@connect.expert">
              info@connect.expert
            </a>
            <a href="tel:+47701743598025">01743 598025</a>
          </div>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
