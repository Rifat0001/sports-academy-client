import ClassCart from "./ClassCart";
import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";

const OurClass = () => {
    const [classData] = useClass()
    const allClass = classData.filter(singleClass => singleClass.status === 'approved')

    return (
        <div className="max-w-[1920px] mx-auto xl:px-20 md:px-10 sm:px-2 py-10">
            <Helmet>
                <title>Sports Mania | Class</title>
            </Helmet>
            <div className="text-center">
                <h3 className='text-3xl md:text-5xl text-black font-bold md:font-semibold text-center'>Our <span className='text-primary'>Classes</span></h3>
                <p className=' text-slate-500 text-lg text-center mt-6'>Here is our exclusive classes for you</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
                {
                    allClass.map(course =>

                        <ClassCart key={course.id} course={course}></ClassCart>

                    )
                }
            </div>
        </div>
    );
};

export default OurClass;