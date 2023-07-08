import React from 'react';
import './NavBar.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  AiOutlineGlobal,
  AiOutlineSearch,
  AiOutlineMenu,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="navBar-mainDiv">
        <div className="MenuIcon-Mobile">
          <AiOutlineMenu
            style={{
              cursor: 'pointer',
              fontSize: '24px',
            }}
          />
        </div>
        <div>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <p className="logo">Connect Experts</p>
          </Link>
        </div>
        <div className="SearchIcon-Mobile">
          {' '}
          <AiOutlineSearch
            style={{
              cursor: 'pointer',
              fontSize: '24px',
            }}
          />
        </div>
        <div className="NavLinks">
          <a href="/">
            Get Noticed{' '}
            <MdKeyboardArrowDown
              style={{ color: '#00d084', fontSize: '18px' }}
            />
          </a>
          <a href="/">
            Get Selling{' '}
            <MdKeyboardArrowDown
              style={{ color: '#00d084', fontSize: '18px' }}
            />
          </a>
          <a href="/">
            Get Organized{' '}
            <MdKeyboardArrowDown
              style={{ color: '#00d084', fontSize: '18px' }}
            />
          </a>
          <a href="/">
            Get Equipped{' '}
            <MdKeyboardArrowDown
              style={{ color: '#00d084', fontSize: '18px' }}
            />
          </a>
          <a href="/">
            Learn More{' '}
            <MdKeyboardArrowDown
              style={{ color: '#00d084', fontSize: '18px' }}
            />
          </a>
          <div className="langDiv">
            <AiOutlineGlobal />
            <span>UK</span>
          </div>
          <div className="SerachDiv">
            <input
              type="text"
              placeholder="Search Connect Expert"
            />
            <AiOutlineSearch
              style={{
                cursor: 'pointer',
                fontSize: '24px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
