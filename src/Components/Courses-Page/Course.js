import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faStar } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const { name, img, price, classes, title, students, rating, rated_people, subjects } = props.details;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." height="250px" />
                <div className="card-body">
                    <h4 className="badge bg_primary">{subjects}</h4>
                    <h5 className="card-title">{title}</h5>
                    <p className="fw-light">By {name}</p>
                    <p>
                        <span className="pe-2"><FontAwesomeIcon icon={faUser} /></span><span className="ico-text pe-5 fw-bold font-monospace">{students}</span>
                        <span className="pe-2 icon-gold"><FontAwesomeIcon icon={faStar} /></span><span className="ico-text pe-5 fw-bold font-monospace">{rating} ({rated_people})</span>
                        <span className="pe-2"><FontAwesomeIcon icon={faClock} /></span><span className="ico-text fw-bold font-monospace">{classes}</span>
                    </p>
                    <p className="card-text fw-bold">Price: <span className="font-monospace"> ${price}</span></p>
                    <button type="button" className="btn btn-secondary">Enroll Now</button>
                </div>
            </div>
        </div>

    );
};

export default Course;