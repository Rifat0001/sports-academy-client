import React from 'react';

const Paymenthistory = () => {
    return (
        <div className=" overflow-x-auto w-full xl:px-32 md:px-10 sm:px-2">
            <h2>Payment History</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default Paymenthistory;