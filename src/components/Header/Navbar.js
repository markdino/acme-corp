import { useState } from 'react'
import {
  Collapse,
  Navbar as MainNav,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
} from 'reactstrap'
import styled from 'styled-components'

import logo from '../../assets/images/logo.png'

const MainNavbar = styled.nav`
  background-color: #fff !important;
  border-bottom: 12px solid #001254;
`

const BrandLogo = styled.img`
  width: 80px;
  max-height: 80px;
  padding: 2px;
  background-color: #fff;
  margin-bottom: -18px;
`
const BrandNameWrapper = styled.section`
  padding: 0px 20px;
  border-right: 1px solid gray;
`
const BrandName1 = styled.h3`
  font-weight: bold;
  font-size: 0.7rem;
  color: #009bfa;
  margin: 0px;
`
const BrandName2 = styled.h3`
  font-size: 1.8rem;
  color: #193989;
  margin: 0px;
  font-weight: bold;
`

const NavItem = styled.li.attrs({
  className: 'nav-item',
})`
  padding: 0px 30px;
  font-size: 0.8rem;
`
const NavLink = styled.a.attrs({
  className: 'nav-link',
})`
  color: #000 !important;
  &:hover {
    color: gray !important;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <MainNavbar as={MainNav} color='light' light expand='md'>
      <Container>
        <NavbarBrand href='/' className='d-flex align-items-center'>
          <BrandLogo src={logo} alt='logo' />
          <BrandNameWrapper>
            <BrandName1>Research Professional</BrandName1>
            <BrandName2>Platform</BrandName2>
          </BrandNameWrapper>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto mt-4' navbar>
            <NavItem>
              <NavLink href='#'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Insights</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </MainNavbar>
  )
}

export default Navbar
