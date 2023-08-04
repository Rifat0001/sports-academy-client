const InstructorCard = ({ instructor }) => {
    const {
        // _id,
        name,
        email,
        image
    } = instructor || {};
    //   console.log(image);
    return (
        <div className="card w-full h-full border border-primary  bg-slate-50 shadow-xl rounded-lg">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                    className="w-full h-64"
                />
            </figure>
            <div className="card-body text-start">
                <h2 className="text-2xl "><span className="font-bold">Name:</span> {name}</h2>
                <h2 className="text-xl "><span className="font-bold">Email:</span> {email}</h2>
            </div>
        </div>
    );
};

export default InstructorCard;