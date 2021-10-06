
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';

const Cards = (props) => {
    const { title, img, name, rating, rated_people, subjects, students, classes, price } = props.info;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} height="300px" />
                <Card.Body>
                    <h4 className="badge bg_primary">{subjects}</h4>
                    <Card.Title>{title}</Card.Title>
                    <p className="text-muted">By {name}</p>
                    <p>Rating: {rating} ({rated_people})</p>

                    <div className=" d_flex position-relative card-footer">
                        <span className="primary_clr"><FontAwesomeIcon icon={faUser} /></span>
                        <span className="ps-1 ">{students}</span>

                        <span className="primary_clr ps-5"><FontAwesomeIcon icon={faClock} /></span>
                        <span className="ps-1 ">{classes}</span>

                        <button type="button" className="btn btn_custom position-absolute end-0 mt-1">${price}</button>

                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;