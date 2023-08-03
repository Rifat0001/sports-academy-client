import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useInstructor from '../hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';

const Instructorroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    //   console.log(location);
    if (user && isInstructor) {
        return children;
    }
    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default Instructorroute;