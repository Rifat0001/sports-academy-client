
import { Helmet } from "react-helmet-async";
import About from "./About";
import Contact from "./Contact";
import OurBlog from "./OurBlog";
import Slider from "./Slider";
import CourseSection from "./CourseSection";
import InstructorSection from "./InstructorSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Mania | Home</title>
            </Helmet>
            <Slider></Slider>
            <About></About>
            <CourseSection></CourseSection>
            <OurBlog></OurBlog>
            <InstructorSection></InstructorSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;