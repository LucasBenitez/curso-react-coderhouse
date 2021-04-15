import { Link } from "react-router-dom";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBLink,
} from "mdbreact";

function ItemCategories({ categories }) {
  return (
    <MDBContainer className="mb-4">
      <MDBRow>
        <MDBCol>
          <MDBBtnGroup >
              <MDBBtn>
            <MDBLink to={`/`} key={"all"} className="text-white">
              All
            </MDBLink>
            </MDBBtn>
            {Object.keys(categories).map((category) => (
            <MDBBtn>
              <MDBLink
                to={`/category/${category}`}
                key={category}
                className="text-white"
              >
                {category}
              </MDBLink>
              </MDBBtn>
            ))}{" "}
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ItemCategories;
