import { Helmet } from "react-helmet-async";
import InstructorCard from "./InstructorCard";
import { useEffect, useState } from "react";

const OurInstructor = () => {
    const [allInstructor, setAllInstructor] = useState([])
    useEffect(() => {
        fetch('https://myapp-nine-iota.vercel.app/instructor')
            .then((res) => res.json())
            .then((data) => {
                // console.log(popularInstructors);
                setAllInstructor(data);
            });
    }, [])
    return (
        <div className="max-w-[1920px] md:mt-5 mx-auto xl:px-28 md:px-10 sm:px-2 px-4">
            <Helmet>
                <title>Sports Mania | Instructor</title>
            </Helmet>
            <div className="text-center">
                <h3 className='text-3xl md:text-5xl text-black font-bold md:font-semibold text-center'>Our <span className='text-primary'>Instructors</span></h3>
                <p className=' text-slate-500 text-lg text-center mt-6'>these are our most experienced instructors</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6 pt-3 pb-20 px-4">
                    {
                        allInstructor.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default OurInstructor;