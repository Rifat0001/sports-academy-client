import { useEffect, useState } from "react";
import { Rotate } from "react-awesome-reveal";
import InstructorCard from "../OurInstructor/InstructorCard";

const InstructorSection = () => {
    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(() => {
        fetch('https://myapp-nine-iota.vercel.app/instructor')
            .then((res) => res.json())
            .then((data) => {

                const popularInstructors = data.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled).slice(0, 6);
                // console.log(popularInstructors);
                setPopularInstructor(popularInstructors);
            });
    }, [])
    return (
        <div className=' max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-2 px-4'>
            <div className=' mt-10 mb-5'>
                <Rotate delay={100}><h3 className='text-3xl md:text-5xl text-black font-bold md:font-semibold text-center'>Popular <span className='text-primary'>Class</span></h3></Rotate>
                <p className=' text-slate-500 text-lg text-center mt-6'>Our Most Experience Instructors are here</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-6 pt-3 pb-20 px-4">
                {
                    popularInstructor.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default InstructorSection;