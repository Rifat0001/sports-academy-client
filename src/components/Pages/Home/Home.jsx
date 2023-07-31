
import { Helmet } from "react-helmet-async";
import About from "./About";
import Contact from "./Contact";
import OurBlog from "./OurBlog";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Mania | Home</title>
            </Helmet>
            <Slider></Slider>
            <About></About>
            <OurBlog></OurBlog>
            <Contact></Contact>
        </div>
    );
};

export default Home;