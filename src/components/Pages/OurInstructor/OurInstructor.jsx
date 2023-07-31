import { Helmet } from "react-helmet-async";

const OurInstructor = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Mania | Instructor</title>
            </Helmet>
            <div className="text-center">
                <h3 className='text-3xl md:text-5xl text-black font-bold md:font-semibold text-center'>Our <span className='text-primary'>Instructors</span></h3>
                <p className=' text-slate-500 text-lg text-center mt-6'>these are our most experienced instructors</p>
            </div>
        </div>
    );
};

export default OurInstructor;