
const CopyTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center pt-14 pb-4">
            <h2 className="font-semibold text-4xl text-primary py-3">{heading}</h2>
            <p className=" text-sm text-slate-500">{subHeading}</p>
        </div>
    );
};

export default CopyTitle;