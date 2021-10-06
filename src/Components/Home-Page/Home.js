import Testimonial from '../Testimonial/Testimonial';
import Course from './Course/Course';
import Header from './Header/Header';
import Newslatter from './Newslatter/Newslatter';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Course></Course>
            <Testimonial></Testimonial>
            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;