import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useAuth } from "../../context/AuthContext";
import "./Header.styles.scss";

const Header = () => {
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser && (
          <Link to="/" onClick={() => logout()} className="option">
            SIGN OUT
          </Link>
        )}
        {!currentUser && (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
