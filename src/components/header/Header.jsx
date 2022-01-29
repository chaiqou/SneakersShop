import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GiWaveCrest } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import styled from 'styled-components'


const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
 `

const StyledLogo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

`
const StyledOptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`



const StyledOptionLink = styled(Link)`
   padding: 10px 15px;
   text-decoration: none;
   cursor: pointer;
   color: black;

`



const Header = ({ hidden }) => {
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  return (
    <StyledHeader>
      <StyledLogo to="/">
        <GiWaveCrest color="black" fontSize="1.8em" />
      </StyledLogo>
      <StyledOptionsContainer>
        <StyledOptionLink to="/shop">
          SHOP
        </StyledOptionLink>
       
        {currentUser && (
          <StyledOptionLink as='div' to="/" onClick={() => logout()} className="option">
            SIGN OUT
          </StyledOptionLink>
        )}
        {!currentUser && (
          <StyledOptionLink  to="/signin">
            SIGN IN
          </StyledOptionLink>
        )}
        <CartIcon />
      </StyledOptionsContainer>
      {hidden ? null : <CartDropdown />}
    </StyledHeader>
  );
};

const mapStateTopProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateTopProps)(Header);
