import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NotFound.scss"

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <Container>
          <h5>Сторінка не знайдена!</h5>
          <p>Неправильно набрано адресу або такої сторінки на сайті більше не існує.</p>
          <Link  className="btn btn-primary mt-4" to="/">
            Перейти на головну сторінку
          </Link>
        </Container>
      </div>
    );
  }
}

export default NotFound;
