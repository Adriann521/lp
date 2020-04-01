import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Col, Row, Container, Form} from 'react-bootstrap'

import './register.css'

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username is too Short!")
    .max(50, "Username is Too Long!")
    .required("Username is Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords do not match"
  )
});

class Register extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {
      alert: null,
      loaded: false
    };
  }

  submitForm = (values, history) => {
    values.username = values.username.toLowerCase()
    axios
      .post('./register', values)
      .then(res => {
        console.log(res.data.result);
        if (res.data.result === "success") {
          swal("Success!", res.data.message, "success").then(value => {
            history.push("/login");
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch(error => {
        console.log(error);
        swal("Error!", "Unexpected error", "error");
      });
  };
  showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting
  }) => {
    return (
      <Container>
      <Row xs={1} lg={4} className="justify-content-center">
      <form onSubmit={handleSubmit}>
      <div className="loginRegisterTitle">
      <a href="/register" className="row justify-content-center">
              <h1><b>Last</b>Play</h1>
            </a>
            </div>
        <div className="registerLogin">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            className="form-control"
            placeholder="Username"
            className={
              errors.username && touched.username
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.fullname && touched.fullname ? (
            <small id="passwordHelp" class="text-danger">
              {errors.username}
            </small>
          ) : null}
        </div>
        <div className="registerLogin">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            className={
              errors.email && touched.email
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Email"
            style={{marginTop:'25px'}}

          />
          {errors.email && touched.email ? (
            <small id="passwordHelp" class="text-danger">
              {errors.email}
            </small>
          ) : null}
        </div>
        <div className="registerLogin">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="form-control"
            placeholder="Password"
            style={{marginTop:'25px'}}
            className={
              errors.password && touched.password
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.password && touched.password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.password}
            </small>
          ) : null}
        </div>
        <div className="registerLogin">
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            className={
              errors.confirm_password && touched.confirm_password
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Confirm Password"
            style={{marginTop:'25px'}}

          />
          {errors.confirm_password && touched.confirm_password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.confirm_password}
            </small>
          ) : null}
        </div>
        <div className="row">
          <div className="col s8 offset-s2 center">
            <button
              type="submit"
              disabled={isSubmitting}
              class="btn btn-primary btn-block"
              style={{marginTop:'25px'}}
            >
              Register
            </button>

          </div>
     
        </div>
      </form>
      </Row>
      </Container>    );
  };

  render() {
    return (
      <div className="register-page">
        
          
            <div>
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  password: "",
                  confirm_password: ""
                }}
                onSubmit={(values, { setSubmitting }) => {
                  this.submitForm(values, this.props.history);
                  setSubmitting(false);
                }}
                validationSchema={SignupSchema}
              >
                {props => this.showForm(props)}
              </Formik>
            </div>
            {/* /.form-box */}
          
          {/* /.card */}
        
      </div>
    );
  }
}

export default Register;