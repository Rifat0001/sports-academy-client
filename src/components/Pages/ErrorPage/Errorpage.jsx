import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <section className="w-3/4 mx-auto">
            <div className='text-center'>
                <h2 className='text-3xl text-primary md:mt-20 font-bold py-5'>Sorry, No Page Found</h2>
                <Link
                    to="/"
                    className="btn btn-primary btn-outline  text-primary font-bold"
                >
                    Back to homepage
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <img src='https://i.ibb.co/RB90dFQ/5203172.jpg' alt="" width={400} />

            </div>
        </section>
    );
};

export default Errorpage;