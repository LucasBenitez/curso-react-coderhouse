import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="teal lighten-2" dark expand="md">
      <MDBNavLink to={`/`} >
        <MDBNavbarBrand>
          <strong className="white-text">Mercado Privado</strong>
        </MDBNavbarBrand>
        </MDBNavLink>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            
              <MDBNavLink  to={`/`} exact >Incio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Categorias</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBNavLink to={`/category/Celulares`}exact className="black-text">
                    Celulares
                    </MDBNavLink>
                    </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavLink to={`/category/Auriculares`}exact className="black-text">Auriculares
                  </MDBNavLink></MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                  <MDBNavLink to={`/category/Componentes`}exact  className="black-text">Componentes de PC</MDBNavLink></MDBDropdownItem>
                  <MDBDropdownItem href="#!"><MDBNavLink to={`/category/Parlantes`}exact className="black-text" >Parlantes</MDBNavLink></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
         <MDBNavLink to={`/cart`}>
         <CartWidget/>
         </MDBNavLink>
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default NavbarPage;