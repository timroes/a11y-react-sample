import React from 'react';
import logo from '../logo.svg';
import './Header.css';
import { TwitterIcon } from './TwitterIcon';
import { LogoutButton } from './LogoutButton';
import { Menu } from './Menu';

export function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="" aria-hidden="yes" />
      <h1 className="header__title" tabIndex={1}>My App</h1>
      <span className="header__actions">
        <a href="https://twitter.com" tabIndex={2}>
          <TwitterIcon />
        </a>
        <Menu />
        <LogoutButton />
      </span>
    </header>
  );
}