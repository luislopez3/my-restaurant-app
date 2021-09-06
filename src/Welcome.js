import "./Welcome.css";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Breakfast from "./photos/Breakfast.jpeg";
import Lunch from "./photos/Lunch.jpeg";
import Dinner from "./photos/Dinner.jpeg";

export default function Welcome() {
  const { url } = useRouteMatch();

  return (
    <div className="welcome">
      <h1>Capital City Cafe</h1>
      <h2>Welcome to your next favorite restaurant!</h2>
      <h3>We offer many classic and unique dishes that are sure to please.</h3>
      <p>
        We are open daily from 7:00 - 3:00, for Breakfast and Lunch, and 5:00 -
        9:00 for Dinner.
      </p>
      <p>Breakfast is served from 7:00 - 11:00</p>
      <p>Lunch is served from 11:00 - 3:00</p>
      <p>Dinner is served from 5:00 - 9:00</p>
      <hr />
      <h4>To start an order, click the "menu" link below.</h4>
      <h4>
        If you have created an account and would like to repeat a previous
        order, click the "My Orders" link to log-in to your account.
      </h4>

      <Container>
        <Row>
          <Col>
            <div
              className={"img-thumbnail hover-overlay"}
              style={{ maxWidth: "20rem", position: "relative" }}
            >
              <Link to={`${url}menu/Breakfast`}>
                Breakfast Menu
                <img
                  src={Breakfast}
                  className={"img-fluid"}
                  alt={"Breakfast Plate"}
                />
                <div
                  className={"mask overlay"}
                  style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                ></div>
              </Link>
            </div>
          </Col>

          <Col>
            <div
              className={"img-thumbnail hover-overlay"}
              style={{ maxWidth: "20rem", position: "relative" }}
            >
              <Link to={`${url}menu/Lunch`}>
                Lunch Menu
                <img src={Lunch} className={"img-fluid"} alt={"Lunch Plate"} />
                <div
                  className={"mask overlay"}
                  style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                ></div>
              </Link>
            </div>
          </Col>

          <Col>
            <div
              className={"img-thumbnail hover-overlay"}
              style={{ maxWidth: "20rem", position: "relative" }}
            >
              <Link to={`${url}menu/Dinner`}>
                Dinner Menu
                <img
                  src={Dinner}
                  className={"img-fluid"}
                  alt={"Dinner Plate"}
                />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
