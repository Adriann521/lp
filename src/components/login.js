  
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { Col, Row, Container, Form} from 'react-bootstrap'
import './style.css'

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "username is Too Short!")
    .max(50, "username is Too Long!")
    .required("Username is Required"),
  password: Yup.string().required("Password is required")
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }
  componentDidMount() {
    if (localStorage.getItem("TOKEN_KEY") != null) {
      return this.props.history.push('/dashboard');
    }
    let notify = this.props.match.params["notify"]
    if(notify !== undefined){
      if(notify === 'error'){
        swal("Activation Fail please try again !", '', "error")
      }else if(notify === 'success'){
        swal("Activation Success your can login !", '', "success")
      }
     
    }
  }

  submitForm = (values, history) => {
    values.username = values.username.toLowerCase()
    axios
      .post('./login', values, values)
      .then(res => {
        if (res.data.result === "success") {
          localStorage.setItem("TOKEN_KEY", res.data.token);
          localStorage.setItem("userName", values.username)
          swal("Success!", res.data.message, "success").then(value => {
            history.push("/dashboard");
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch(error => {
        console.log(error);
        return swal("Error!", error.message, "error");
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
    return (<Container>
      <Row xs={1} lg={4} className="justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="loginRegisterTitle">
      <a href="/login" style={{textAlign:'center'}}className="row justify-content-center">
              <h1><b>Last</b>Play</h1>
            </a>
            </div>
        <div className="registerLogin">
          <input type="text" name="username" onChange={handleChange} value={values.username} placeholder="Username"className={errors.username && touched.username? "form-control is-invalid": "form-control"}/>
          <div className="">
            <div className="">
              <span className="fas fa-user"></span>
            </div>
          </div>
          {errors.username && touched.username ? (
            <small id="passwordHelp" className="text-danger">
              {errors.username}
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
          <div className="input-group-append">
              <span className="fas fa-lock"></span>
          </div>
          {errors.password && touched.password ? (
            <small id="passwordHelp" className="text-danger">
              {errors.password}
            </small>
          ) : null}
        </div>
        <div className="row justify-content-md-center">

          
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-block"
              style={{marginTop:'25px'}}
            >
              Login
            </button>
        </div>
        
      </form>
      </Row>
      </Container>
    );
  };

  render() {
    return (
      <div className="login-page">
        <div className="register-box">
            <div className="card-body register-card-body">
 
              <Formik
                initialValues={{
                  username: "",
                  password: ""
                }}
                onSubmit={(values, { setSubmitting }) => {
                  this.submitForm(values, this.props.history);
                  setSubmitting(false);
                }}
                validationSchema={LoginSchema}
              >
                {/* {this.showForm()}            */}
                {props => this.showForm(props)}
              </Formik>


            </div>
        </div>
      </div>
    );
  }
}

export default Login;