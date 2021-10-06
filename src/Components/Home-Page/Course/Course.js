import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Cards from './Cards';

const Course = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const homeCourses = courses.slice(0, 4);
    console.log(homeCourses);

    return (
        <Container>
            <h5 className="text-center mt-5 primary_clr">Select Courses</h5>
            <h2 className="font_rale text-center mb-5">Explore Our Popular Courses</h2>
            <Row xs={1} md={2} className="g-4">
                {homeCourses.map(course => <Cards
                    info={course}
                    key={course.id}
                ></Cards>)}
            </Row>
            <div className="text-center mb-5"><button className="mt-3 mb-5 btn btn_custom btn-lg">See All Courses</button></div>


        </Container>
    );
};

export default Course;