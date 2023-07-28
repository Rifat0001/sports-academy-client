import { Slide } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import {
    FaFacebook,
    FaTwitter,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="max-w-[1920px] mx-auto xl:px-28 md:px-10 sm:px-4 py-16 bg-orange-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6">
                <Slide>
                    <div className="px-10">
                        <h3 className='text-3xl md:text-5xl text-black  mb-5 font-bold md:font-semibold '>Contact <span className='text-primary'>With Us</span></h3>
                        <p className=" text-lg">
                            Have questions, suggestions, or just want to say hello? Our team at KidsPlay Academy is here to assist you. Feel free to reach out to us via email, phone, or social media. We're excited to connect with you and be a part of our journey.
                        </p>
                        <div className="flex items-center justify-start gap-5 py-4">
                            <FaFacebook size={30} color="#000000" />{" "}
                            <FaTwitter size={30} color="#000000" />{" "}
                            <FaInstagramSquare size={30} color="#000000" />{" "}
                            <FaLinkedin size={30} color="#000000" />
                        </div>
                    </div>
                </Slide>
                <div className="px-6 py-8">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="py-10 px-8  rounded-md "
                    >

                        <div className="mb-4">
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md"
                                type="text"
                                id="firstname"
                                placeholder="Your Name"
                                {...register("firstname", { required: true })}
                            />
                            {errors.name && (
                                <span className="text-error">
                                    Please enter your name
                                </span>
                            )}
                        </div>


                        <div className="mb-4">
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md"
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^\S+@\S+$/i,
                                })}
                            />
                            {errors.email && (
                                <span className="text-error">
                                    Please enter your email
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md"
                                id="message"
                                placeholder="Your Message"
                                {...register("message", { required: true })}
                            />
                            {errors.message && (
                                <span className="text-error">Please enter a message</span>
                            )}
                        </div>
                        <button
                            className="btn btn-primary w-full font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;