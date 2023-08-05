import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://myapp-nine-iota.vercel.app/users/instructor/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
                }
            });
            // console.log('Instructor = ', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]

};

export default useInstructor;