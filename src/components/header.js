import React, { Component } from "react";
import swal from "sweetalert";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Header extends Component {
  Logout = () => {
    swal("Logout?", {
      buttons: {
        nope: {
          text: "Yes",
          value: "yes"
        },
        sure: {
          text: "Not yet",
          value: "no"
        }
      }
    }).then(value => {
      switch (value) {
        case "yes":
          swal("Logout successful", "").then(val => {
            localStorage.removeItem("TOKEN_KEY");
            return this.props.history.push("/login");
          });
          break;
        case "no":
          break;
        default:
 
      }
    });
  }

  render() {
    return (
<div className="navigation">
<Nav className="navz">
<Nav.Item>
      <Nav.Link href="/dashboard">Home</Nav.Link>
    </Nav.Item>
</Nav>
<Nav className="justify-content-end">
<Nav.Link eventKey="3" disabled style={{textTransform: 'capitalize'}}>
          Welcome, {localStorage.userName}
        </Nav.Link>
<Nav.Item>
      <Nav.Link href="#" onClick={this.Logout}>Logout</Nav.Link>
    </Nav.Item>
</Nav>
</div>
            
    );
  }
}

export default withRouter(Header);


