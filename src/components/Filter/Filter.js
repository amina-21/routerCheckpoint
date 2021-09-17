import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({ handleChange, title, ratingChanged }) => {

  return (
    <div>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Choose Movies According to Title</Card.Title>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter movie title"
                onChange={handleChange}
                value={title}
              />
            </Col>
          </Row>
          <br />
          <Card.Title>Choose Movies According to Rating</Card.Title>
          <Row>
            <Col>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={50}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};

export default Filter;
