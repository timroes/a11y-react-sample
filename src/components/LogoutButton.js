import React from 'react';

import './LogoutButton.css';

export function LogoutButton() {
  const onLogout = () => {
    window.alert('You are now logged out');
  };

  return (
    <div
      role="btn"
      className="logoutbtn"
      onClick={onLogout}
    >
      Log out
    </div>
  );
}