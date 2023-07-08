import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <div className="FooterLinks">
          <a href="/privacy-policy">
            {' '}
            Privacy Policy & Cookies{' '}
          </a>
        </div>
        <hr className="FooterLine" />
        <div className="BottomFooter">
          <div className="BottomLeft">
            <p>
              Comparemobiles UK LTD 2023. All rights
              reserved
            </p>
          </div>
          <div className="BottomRight">
            <span>
              COMPAREMOBILES UK LIMITED SUITE C2 HAUGHMOND
              VIEW SHREWSBURY BUSINESS PARK SHREWSBURY
              SHROPSHIRE UNITED KINGDOM SY2 6LG Company No.
              12304810
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
