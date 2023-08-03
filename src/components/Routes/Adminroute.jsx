import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const Adminroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    //   console.log(location);
    if (user && isAdmin) {
        return children;
    }
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default Adminroute;