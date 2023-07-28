import about from '../../../assets/about.jpg'
import { Fade } from "react-awesome-reveal";
const About = () => {
    return (

        <section className="bg-orange-50 py-20">
            <div className="max-w-[1920px] mx-auto xl:px-28 md:px-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center justify-between">
                    <div className="">
                        <Fade delay={1e3} cascade damping={1e-1}><h3 className='text-3xl md:text-5xl text-black font-bold md:font-semibold  mb-4'>About <span className='text-primary'>Us</span></h3></Fade>
                        <p className="text-lg  mb-4 text-justify">
                            With a team of dedicated coaches and instructors, we strive to instill the values of teamwork, sportsmanship, and determination in our young participants. Whether your child is taking their first steps on the field or aiming to enhance their existing abilities, our carefully crafted programs cater to all skill levels and ages.
                        </p>
                        <p className="text-lg  text-justify mb-4">

                            Safety is our utmost priority, and we maintain well-equipped facilities that adhere to the highest standards of child welfare. Our engaging and dynamic training sessions not only focus on honing athletic prowess but also emphasize the importance of staying fit, healthy, and active.
                        </p>

                    </div>

                    {/* <img src="https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg" alt="About Image" className="rounded-lg shadow-lg" /> */}
                    <img src={about} alt="About Image" className="rounded-lg shadow-lg" />

                </div>
            </div>
        </section>

    );
};

export default About;