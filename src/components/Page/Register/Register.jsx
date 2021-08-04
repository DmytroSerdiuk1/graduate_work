import React, { Component } from "react";
import { Container } from "react-bootstrap";

import './Register.scss';

class Register extends Component {
  render() {
    return (
      <Container>
        <div className="register">
          <form className="d-flex flex-column" action="">
            <label className="register-label" htmlFor="email">Ваш email</label>
            <input className="register-input" type="email" id="email" />
            <label className="register-label" htmlFor="name">Ваше імя</label>
            <input className="register-input" type="name" id="name" />
            <label className="register-label" htmlFor="password">Пароль</label>
            <input className="register-input" type="password" id="password" />
            <button className="register-submit" type="submit">Регистрация</button>
          </form>
        </div>
      </Container>
    );
  }
}

export default Register;
