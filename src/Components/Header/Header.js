import React, { Component } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

import './Header.css'

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div className="header">
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="nav__brand" href="/home">DRISHTI CPS</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto nav__items align-items-center" navbar>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav>
                                        <NavItem className="nav-link about">About</NavItem>
                                    </DropdownToggle>
                                    <DropdownMenu left>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to='/about/1'>About DRISHTI CPS</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to='/about/2'>Governing Body</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to='/about/3'>Advisory Board</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to='/about/4'>Core Team</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to='/about/5'>What do we do?</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to='/programmes'>Programmes</NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to='/partners'>Partners</NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to='/connect'>Connect</NavLink>
                                </NavItem>
                                <NavItem onClick={this.toggleNav}>
                                    <NavLink className="nav-link" to='/testimonials'>Testimonials</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
