import React, { Component } from "react";
import {MDBNavbarNav,MDBNavItem, MDBNavLink,MDBIcon } from "mdbreact";
class CartWidget extends Component{
    render(){
        return(
            <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon icon="shopping-cart" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        );
    }
}
export default CartWidget;