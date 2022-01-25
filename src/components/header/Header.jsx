import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GiWaveCrest } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import "./Header.styles.scss";

const Header = ({ hidden }) => {
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <GiWaveCrest color="black" fontSize="1.8em" />
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateTopProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateTopProps)(Header);
