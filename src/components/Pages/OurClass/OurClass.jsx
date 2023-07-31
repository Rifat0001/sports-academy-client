import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const OurClass = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    })
    return (
        <div className="max-w-[1920px] mx-auto xl:px-20 md:px-10 sm:px-2 py-10">
            <div className="text-center">
                <h3 className='text-3xl md:text-5xl text-black font-bold md:font-semibold text-center'>Our <span className='text-primary'>Classes</span></h3>
                <p className=' text-slate-500 text-lg text-center mt-6'>Here is our exclusive classes for you</p>
            </div>
            <div className="grid grid-cols-3 ">
                {
                    courses.map(course =>

                        <div key={course.id} className="card my-5 w-96 bg-base-100 shadow-xl">
                            <figure><img src={course.url} className="w-full h-[250px]" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold text-primary">{course.course_name}</h2>
                                <p className="font-semibold text-lg"><span className="font-bold me-4">Instructor:</span>{course.course_instructor}</p>
                                <p className="font-semibold text-lg"><span className="font-bold me-4">Available Seats:</span>{course.seats}</p>
                                <p className="font-semibold text-lg"><span className="font-bold me-4">Price:</span>${course.price}</p>
                                <div className="card-actions">
                                    <button className="btn text-white btn-primary w-full">Enroll Now <FaShoppingCart></FaShoppingCart> </button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default OurClass;