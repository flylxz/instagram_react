import React from 'react';
import logo from '../logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='container h-flex'>
          <a href='#' className='logo'>
            <img src={logo} alt='logo' />
          </a>
          <nav className='links'>
            <ul>
              <li>
                <a href='#' className='menu__links'>
                  Feed
                </a>
              </li>
              <li>
                <a href='#' className='menu__links'>
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
