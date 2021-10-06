import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    return (
        <div className="container">
            <h2 className="text-center primary_clr font_rale mt-5">Our All Courses</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
                {
                    allCourses.map(course => <Course
                        key={course.id}
                        details={course}
                    >
                    </Course>)
                }
            </div>

        </div>
    );
};

export default Courses;