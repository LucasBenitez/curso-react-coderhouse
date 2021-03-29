import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
} from 'mdbreact';
import { Link } from "react-router-dom";
function Item({ id, item }) {
  return (
  <MDBCol lg='3' md='6' className='mb-lg-0 mb-4' > 
    <Link to={`/item/${id}`} className="link ">
            
          <MDBCard classname="align-items-center">
            <MDBCardImage
              src={item.pictureUrl}
              top
              alt={item.title}
              overlay='white-slight'
              style={{ height: "15rem"}}
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Denim</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Denim trousers</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>$ {item.price}</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-shopping-cart mr-3' />
                    <span>Add to Cart</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-share-alt mr-3' />
                    <span>Share</span>
                  </MDBTooltip>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          
    </Link>
    </MDBCol>
  );
}

export default Item;
