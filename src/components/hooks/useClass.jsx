import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClass = () => {
    const { refetch, data: classData = [] } = useQuery({
        queryKey: ['classData'],
        queryFn: async () => {
            const res = await fetch('https://myapp-nine-iota.vercel.app/class')
            return res.json()
        }
    })
    return [classData, refetch];
};


export default useClass;