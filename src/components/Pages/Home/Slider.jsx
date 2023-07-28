import slide1 from '../../../assets/slide-1.jpg'
import slide2 from '../../../assets/slide - 2.jpg'
import slide3 from '../../../assets/slide-3.jpg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
    return (
        <div>
            <Carousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
            >
                <div className="relative">
                    <img
                        src={slide1}
                        alt="Slider 1"
                        className="w-full h-[720px]"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="bg-black opacity-50 absolute inset-0"></div>
                        <h1 className="text-5xl py-4 font-bold text-white z-10">
                            Friendly Coach for guide you
                        </h1>
                        <p className="text-lg pb-4 text-white z-10">
                            Expert Tips and Techniques from Coaches to Improve Your Game
                        </p>
                        <button className="btn btn-primary font-bold py-3 z-10">Explore More</button>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={slide2}
                        alt="Slider 2"
                        className="w-full h-[720px]"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="bg-black opacity-50 absolute inset-0"></div>
                        <h1 className="text-5xl py-4 font-bold text-white z-10">
                            Play with Friends and have fun !
                        </h1>
                        <p className="text-lg pb-4 text-white z-10">
                            Organize Exclusive Sports Events and Competitions
                        </p>
                        <button className="btn btn-primary font-bold py-3 z-10">Explore More</button>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={slide3}
                        alt="Slider 3"
                        className="w-full h-[720px]"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="bg-black opacity-50 absolute inset-0"></div>
                        <h1 className="text-5xl py-4 font-bold text-white z-10">
                            Rising Stars: Nurturing Talent, Building Champions
                        </h1>
                        <p className="text-lg pb-4 text-white z-10">
                            Discover the Power of Training and Mentorship at Our Sports Academy
                        </p>
                        <button className="btn btn-primary font-bold py-3 z-10">Explore More</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;