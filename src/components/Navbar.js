import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #2c3e50; /* Example background color */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff; /* Text color */
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavLinkItem = styled.li`
  margin-right: 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/" className="nav-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
        Telemedicine App
      </NavLink>
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/" exact activeClassName="active" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/appointments" activeClassName="active" style={{ textDecoration: 'none', color: 'inherit' }}>
            Appointments
          </NavLink>
        </NavLinkItem>
        {/* Add more links to other pages here */}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
