
import About from "./About";
import Contact from "./Contact";
import OurBlog from "./OurBlog";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <OurBlog></OurBlog>
            <Contact></Contact>
        </div>
    );
};

export default Home;